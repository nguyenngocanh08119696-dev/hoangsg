import { Product } from '../types';
import { X, CheckCircle, Package, ShieldCheck, Tag, ShoppingCart, MessageSquareCode } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
  cartProducts: string[];
  onOpenQuoteRequest: (product: Product) => void;
}

export default function ProductDetailModal({
  product,
  onClose,
  onAddToCart,
  cartProducts,
  onOpenQuoteRequest
}: ProductDetailModalProps) {
  if (!product) return null;

  const isInCart = cartProducts.includes(product.id);

  const formatVND = (value: number) => {
    if (value === 0) return 'Liên hệ báo giá sỉ lẻ';
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 overflow-y-auto animate-[fadeIn_0.2s_ease-out]">
      <div 
        className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] md:max-h-[85vh] overflow-y-auto shadow-2xl relative border border-emerald-100 flex flex-col md:flex-row"
        id="product-detail-modal"
      >
        {/* Close Button top-right */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 bg-gray-100 hover:bg-rose-50 hover:text-rose-600 p-2 rounded-full text-gray-500 z-10 transition-colors"
          title="Đóng cửa sổ"
          id="close-modal-btn"
        >
          <X className="w-5 h-5" />
        </button>

        {/* LEFT HALF: Product Image */}
        <div className="w-full md:w-1/2 bg-gray-50 p-6 flex items-center justify-center relative min-h-[300px]">
          <img 
            src={product.image} 
            alt={product.name} 
            className="max-h-[380px] object-cover shrink-0 rounded-2xl w-full h-full border border-gray-200"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-10 left-10 right-10 bg-black/60 text-white p-3 py-2 rounded-xl text-xs flex justify-between font-bold backdrop-blur-xs">
            <span>Mã: {product.code}</span>
            <span>Danh mục: {product.subCategory}</span>
          </div>
        </div>

        {/* RIGHT HALF: Product Specifications and features */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            {/* Header info */}
            <div className="space-y-2 mb-4">
              <span className="text-[10px] bg-emerald-100 text-emerald-800 p-1 px-2.5 rounded-full font-black uppercase tracking-widest">
                Hoàng Sài Gòn Cơ Khí
              </span>
              <h3 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight leading-snug">
                {product.name}
              </h3>
              
              <div className="flex items-center space-x-4">
                <span className="text-sm font-semibold text-gray-500">Mã thiết bị: <span className="font-mono text-emerald-800">{product.code}</span></span>
                <span className="w-px h-3 bg-gray-300"></span>
                <span className={`text-xs font-bold ${product.inStock ? 'text-emerald-700' : 'text-amber-700'}`}>
                  {product.inStock ? '✓ Sẵn hàng tại kho' : '⚠ Đặt gia công trước'}
                </span>
              </div>
            </div>

            {/* Price section */}
            <div className="bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100 flex items-center justify-between mb-5">
              <span className="text-xs text-emerald-950 font-bold">Giá bán lẻ tham khảo:</span>
              <span className="text-lg md:text-xl font-black text-emerald-800">
                {formatVND(product.price)}
              </span>
            </div>

            {/* Main Tabs (Description) */}
            <div className="space-y-4 mb-6">
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5 flex items-center gap-1">
                  <Tag className="w-3.5 h-3.5 text-[#008000]" />
                  <span>Mô tả kỹ thuật</span>
                </h4>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed text-justify">
                  {product.description}
                </p>
              </div>

              {/* Specifications table */}
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                  <Package className="w-3.5 h-3.5 text-[#008000]" />
                  <span>Thông số chi tiết</span>
                </h4>
                <div className="border border-gray-150 rounded-xl overflow-hidden font-sans">
                  {Object.entries(product.specifications).map(([key, value], idx) => (
                    <div 
                      key={key} 
                      className={`grid grid-cols-12 text-xs p-2 ${
                        idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                      } border-b border-gray-150 last:border-b-0`}
                    >
                      <div className="col-span-5 font-bold text-gray-500">{key}</div>
                      <div className="col-span-7 font-semibold text-gray-800 pl-2 border-l border-gray-150">{value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key qualities */}
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#008000]" />
                  <span>Ưu điểm vượt trội</span>
                </h4>
                <ul className="space-y-1.5 text-xs text-gray-600">
                  {product.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-[#008000] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-100">
            <button
              onClick={() => {
                onAddToCart(product);
              }}
              className={`font-semibold p-3 rounded-xl text-xs md:text-sm flex items-center justify-center gap-1.5 transition-all outline-none ${
                isInCart 
                  ? 'bg-emerald-50 text-[#008000] border-2 border-[#008000]'
                  : 'bg-emerald-700 hover:bg-[#008000] text-white'
              }`}
            >
              <ShoppingCart className="w-4 h-4" />
              <span>{isInCart ? 'Đã thêm báo giá' : 'Thêm vào báo giá'}</span>
            </button>

            <button
              onClick={() => {
                onOpenQuoteRequest(product);
              }}
              className="bg-[#fcd34d] hover:bg-amber-400 text-emerald-950 font-bold p-3 rounded-xl text-xs md:text-sm flex items-center justify-center gap-1.5 transition-all shadow-md active:scale-95"
            >
              <MessageSquareCode className="w-4 h-4" />
              <span>Gửi báo giá nhanh</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
