import { useState, useMemo } from 'react';
import { Product } from '../types';
import { CATEGORIES } from '../data';
import { Filter, Eye, PhoneCall, RefreshCw, Sparkles, Check } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
  selectedSubCategory: string | null;
  onSelectSubCategory: (subCat: string | null) => void;
  searchQuery: string;
  onViewDetails: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  cartProducts: string[];
}

export default function ProductGrid({
  products,
  selectedCategory,
  onSelectCategory,
  selectedSubCategory,
  onSelectSubCategory,
  searchQuery,
  onViewDetails,
  onAddToCart,
  cartProducts
}: ProductGridProps) {
  const [priceRange, setPriceRange] = useState<string>('all');

  // Filter products based on search query, category, subcategory and price range
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // 1. Search Query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(query);
        const matchesCode = p.code.toLowerCase().includes(query);
        const matchesDesc = p.description.toLowerCase().includes(query);
        const matchesSub = p.subCategory.toLowerCase().includes(query);
        if (!matchesName && !matchesCode && !matchesDesc && !matchesSub) {
          return false;
        }
      }

      // 2. Main Category
      if (selectedCategory !== 'all') {
        if (p.category !== selectedCategory) return false;
      }

      // 3. Sub Category
      if (selectedSubCategory) {
        if (p.subCategory !== selectedSubCategory) return false;
      }

      // 4. Price range filter
      if (priceRange !== 'all') {
        if (priceRange === 'contact') {
          return p.price === 0;
        } else if (priceRange === 'under-100') {
          return p.price > 0 && p.price < 100000;
        } else if (priceRange === '100-500') {
          return p.price >= 100000 && p.price <= 500000;
        } else if (priceRange === 'over-500') {
          return p.price > 500000;
        }
      }

      return true;
    });
  }, [products, selectedCategory, selectedSubCategory, searchQuery, priceRange]);

  // Format money beautifully
  const formatVND = (value: number) => {
    if (value === 0) return 'Liên hệ báo giá';
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
  };

  const handleCategoryReset = () => {
    onSelectCategory('all');
    onSelectSubCategory(null);
    setPriceRange('all');
  };

  const currentCategoryData = useMemo(() => {
    return CATEGORIES.find(c => c.id === selectedCategory);
  }, [selectedCategory]);

  return (
    <section className="py-12 bg-white font-sans scroll-mt-24" id="products-catalog">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Title Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-gray-150">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-8 h-1.5 bg-[#008000] rounded-sm"></span>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">
                DANH MỤC THIẾT BỊ CHĂN NUÔI
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">
              {currentCategoryData ? currentCategoryData.name : 'Danh Sách Sản Phẩm'}
              {selectedSubCategory && <span className="text-emerald-700 font-bold ml-2">› {selectedSubCategory}</span>}
            </h2>
          </div>
          
          {/* Result count */}
          <span className="text-xs font-bold text-[#008000] bg-emerald-50 border border-emerald-100 p-1 px-3 rounded-full mt-2 md:mt-0 self-start">
            Tìm thấy {filteredProducts.length} sản phẩm
          </span>
        </div>

        {/* Layout Grid: Sidebar Controls + Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* LEFT COLUMN: FILTER CONTROLS */}
          <div className="space-y-6 lg:col-span-1">
            
            {/* Category selection */}
            <div className="bg-gray-50 border border-gray-100 p-5 rounded-2xl">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-200">
                <h3 className="font-bold text-gray-900 text-sm flex items-center gap-2">
                  <Filter className="w-4 h-4 text-[#008000]" />
                  <span>PHÂN LOẠI CHÍNH</span>
                </h3>
                <button 
                  onClick={handleCategoryReset} 
                  className="text-xs text-[#008000] hover:underline font-bold flex items-center gap-1"
                  title="Đặt lại bộ lọc"
                >
                  <RefreshCw className="w-3 h-3" />
                  Xóa lọc
                </button>
              </div>

              <div className="space-y-1.5">
                {CATEGORIES.map((cat) => (
                  <div key={cat.id}>
                    <button
                      onClick={() => {
                        onSelectCategory(cat.id);
                        onSelectSubCategory(null);
                      }}
                      className={`w-full text-left text-xs md:text-sm p-2.5 rounded-lg font-bold flex items-center justify-between transition-all ${
                        selectedCategory === cat.id
                          ? 'bg-[#008000] text-white shadow-sm'
                          : 'bg-white hover:bg-emerald-50 text-gray-700 hover:text-emerald-950 border border-gray-150'
                      }`}
                    >
                      <span>{cat.name}</span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                        selectedCategory === cat.id ? 'bg-emerald-900 text-amber-200' : 'bg-gray-100 text-gray-500'
                      }`}>
                        {products.filter(p => cat.id === 'all' || p.category === cat.id).length}
                      </span>
                    </button>

                    {/* Subcategories drawer if selected */}
                    {selectedCategory === cat.id && cat.subCategories && (
                      <div className="pl-3 mt-1.5 mb-2 border-l-2 border-emerald-500 space-y-1 py-1 bg-emerald-50/40 rounded-r-md">
                        <button
                          onClick={() => onSelectSubCategory(null)}
                          className={`w-full text-left text-xs p-1.5 transition-colors ${
                            selectedSubCategory === null ? 'text-[#008000] font-black' : 'text-gray-500 hover:text-emerald-800'
                          }`}
                        >
                          Tất cả sub-category
                        </button>
                        {cat.subCategories.map((sub) => (
                          <button
                            key={sub}
                            onClick={() => onSelectSubCategory(sub)}
                            className={`w-full text-left text-xs p-1.5 transition-colors block leading-tight ${
                              selectedSubCategory === sub ? 'text-[#008000] font-black' : 'text-gray-500 hover:text-emerald-800'
                            }`}
                          >
                            + {sub}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Price filter */}
            <div className="bg-gray-50 border border-gray-100 p-5 rounded-2xl">
              <h3 className="font-bold text-gray-900 text-sm pb-2.5 mb-3.5 border-b border-gray-200 uppercase tracking-wider">
                Mức giá bán lẻ
              </h3>
              <div className="space-y-2">
                {[
                  { id: 'all', title: 'Tất cả mức giá' },
                  { id: 'under-100', title: 'Dưới 100,000 đ' },
                  { id: '100-500', title: 'Từ 100,000 đ – 500,000 đ' },
                  { id: 'over-500', title: 'Trên 500,000 đ' },
                  { id: 'contact', title: 'Liên hệ báo giá sỉ lẻ' }
                ].map((range) => (
                  <label 
                    key={range.id} 
                    className="flex items-center space-x-2.5 text-xs md:text-sm font-semibold text-gray-700 hover:text-emerald-900 cursor-pointer select-none"
                  >
                    <input
                      type="radio"
                      name="priceRange"
                      checked={priceRange === range.id}
                      onChange={() => setPriceRange(range.id)}
                      className="w-4 h-4 text-[#008000] focus:ring-emerald-500 border-gray-300"
                    />
                    <span>{range.title}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Hotline banner in sidebar */}
            <div className="bg-emerald-950 text-white p-5 rounded-2xl shadow-md border-2 border-amber-300 relative overflow-hidden">
              <div className="relative z-10 space-y-4">
                <span className="bg-amber-300 text-emerald-950 font-black text-[10px] px-2 py-0.5 rounded uppercase">Báo Giá Sỉ Tại Xưởng</span>
                <p className="text-xs text-emerald-100 font-sans tracking-wide leading-relaxed">
                  Bà con cần nhập sỉ số lượng lớn lồng nuôi, máng lắc mạ kẽm để thiết kế trại? Liên hệ riêng nhận chiết khấu đến 20%!
                </p>
                <a 
                  href="tel:0913777352" 
                  className="w-full bg-[#fcd34d] hover:bg-amber-400 text-emerald-950 font-bold p-2.5 rounded-lg text-center text-xs flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all"
                >
                  <PhoneCall className="w-4 h-4 shrink-0" />
                  <span>Gọi 0913 777 352</span>
                </a>
              </div>
              <div className="absolute -bottom-6 -right-6 text-emerald-900 opacity-20 transform rotate-12 scale-150 font-black text-6xl">HSG</div>
            </div>

          </div>

          {/* RIGHT COLUMN: PRODUCT GRID */}
          <div className="lg:col-span-3">
            
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16 bg-gray-50 rounded-2xl border border-gray-200 p-8">
                <div className="text-gray-400 text-5xl mb-4">🔍</div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">Không tìm thấy sản phẩm phù hợp</h3>
                <p className="text-sm text-gray-500 max-w-md mx-auto mb-6">
                  Chúng tôi không tìm thấy kết quả nào thích ứng với bộ lọc hoặc từ khóa tìm kiếm "{searchQuery}". Vui lòng thử lại với từ khóa khác hoặc xóa bộ lọc.
                </p>
                <button
                  onClick={handleCategoryReset}
                  className="bg-[#008000] text-white font-bold p-2 px-6 rounded-lg text-sm hover:bg-emerald-800 transition-colors"
                >
                  Hiển thị tất cả sản phẩm
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="products-list-grid">
                {filteredProducts.map((p) => {
                  const isInCart = cartProducts.includes(p.id);
                  return (
                    <article 
                      key={p.id}
                      className="bg-white rounded-2xl border border-gray-100 hover:border-emerald-200 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden group relative"
                      id={`product-card-${p.id}`}
                    >
                      {/* Product tag badges */}
                      <div className="absolute top-2.5 left-2.5 z-10 flex flex-col gap-1.5">
                        <span className="bg-emerald-800 text-white text-[10px] font-black tracking-wide p-1 px-2 rounded-md shadow-xs flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-amber-300 fill-amber-300" />
                          <span>CHẤT LƯỢNG CAO</span>
                        </span>
                        {p.inStock ? (
                          <span className="bg-emerald-100 text-emerald-800 text-[9px] font-bold p-0.5 px-1.5 rounded self-start">
                            Còn hàng sẵn
                          </span>
                        ) : (
                          <span className="bg-amber-100 text-amber-900 text-[9px] font-bold p-0.5 px-1.5 rounded self-start">
                            Gia công đặt trước
                          </span>
                        )}
                      </div>

                      {/* Product image container */}
                      <div 
                        onClick={() => onViewDetails(p)}
                        className="w-full h-48 bg-gray-50 overflow-hidden relative cursor-pointer group"
                      >
                        <img 
                          src={p.image} 
                          alt={p.name}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors"></div>
                        
                        {/* Detail Hover Eye overlay */}
                        <div className="absolute inset-0 bg-[#008000]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                          <span className="bg-white text-[#008000] p-2.5 rounded-full font-bold text-xs flex items-center gap-1.5 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                            <Eye className="w-4 h-4" />
                            <span>XEM CHI TIẾT</span>
                          </span>
                        </div>
                      </div>

                      {/* Product details */}
                      <div className="p-4 flex-1 flex flex-col justify-between">
                        <div>
                          {/* Code & SubCat info */}
                          <div className="flex items-center justify-between text-[11px] text-gray-500 font-bold mb-1.5 uppercase">
                            <span>{p.subCategory}</span>
                            <span className="font-mono text-emerald-800 bg-emerald-50 p-0.5 px-1 rounded">{p.code}</span>
                          </div>

                          {/* Product name */}
                          <h3 
                            onClick={() => onViewDetails(p)}
                            className="font-bold text-gray-900 text-sm md:text-base leading-snug line-clamp-2 hover:text-[#008000] cursor-pointer"
                          >
                            {p.name}
                          </h3>
                        </div>

                        {/* Price & Action footer */}
                        <div className="mt-4 pt-3 border-t border-gray-100">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-xs text-gray-400 font-semibold">Giá bán lẻ:</span>
                            <span className={`text-base font-black ${p.price === 0 ? 'text-gray-500 italic text-[13px]' : 'text-emerald-700'}`}>
                              {formatVND(p.price)}
                            </span>
                          </div>

                          {/* Controls buttons */}
                          <div className="grid grid-cols-12 gap-2">
                            <button
                              onClick={() => onViewDetails(p)}
                              className="col-span-5 border border-gray-200 hover:border-[#008000] hover:text-[#008000] font-bold text-xs p-2 rounded-lg transition-colors text-center text-gray-700 flex items-center justify-center gap-1"
                              title="Xem thông số kỹ thuật chi tiết"
                            >
                              Chi tiết
                            </button>
                            
                            <button
                              onClick={() => onAddToCart(p)}
                              className={`col-span-7 font-bold text-xs p-2 rounded-lg transition-all flex items-center justify-center gap-1 shadow-xs transform active:scale-95 ${
                                isInCart 
                                  ? 'bg-emerald-50 text-[#008000] border-2 border-[#008000]'
                                  : 'bg-[#fcd34d] hover:bg-amber-400 text-emerald-950'
                              }`}
                            >
                              {isInCart ? (
                                <>
                                  <Check className="w-3.5 h-3.5" />
                                  <span>Đã thêm</span>
                                </>
                              ) : (
                                <span>Thêm báo giá</span>
                              )}
                            </button>
                          </div>
                        </div>
                      </div>

                    </article>
                  );
                })}
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
