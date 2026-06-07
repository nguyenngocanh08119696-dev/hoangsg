import { useState, FormEvent, useEffect } from 'react';
import { Phone, Mail, Search, Clock, ShieldCheck, ShoppingCart } from 'lucide-react';

interface HeaderProps {
  onSearch: (query: string) => void;
  cartCount: number;
  openCart: () => void;
  onNavigate: (section: string) => void;
}

export default function Header({ onSearch, cartCount, openCart, onNavigate }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  // Auto trigger search when typing completes or query changes
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      onSearch(searchQuery);
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  return (
    <header className="w-full flex flex-col z-50 relative" id="header-top">
      {/* Top bar info */}
      <div className="bg-emerald-900 text-emerald-100 text-xs py-2 px-4 shadow-sm border-b border-emerald-800 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 font-medium">
              <Clock className="w-3.5 h-3.5 text-amber-300" />
              <span>Giờ mở cửa: 7:00 - 18:00 (Thứ 2 - Chủ Nhật)</span>
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-300" />
              <span>Sản phẩm chính hãng - Bảo hành uy tín lên tới 12 tháng</span>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="mailto:thanhphuong8872001@gmail.com" className="flex items-center gap-1.5 hover:text-amber-300 transition-colors">
              <Mail className="w-3.5 h-3.5 text-amber-300" />
              <span>thanhphuong8872001@gmail.com</span>
            </a>
            <span className="w-px h-3 bg-emerald-800"></span>
            <span className="text-amber-300 hover:underline cursor-pointer font-medium" onClick={() => onNavigate('concept')}>
              Tại sao chọn chúng tôi?
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-[#008000] text-white py-4 px-4 sticky top-0 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* Brand Logo & Name */}
          <div 
            onClick={() => onNavigate('home')} 
            className="flex items-center space-x-3 cursor-pointer group select-none shrink-0"
            id="brand-logo"
          >
            <div className="bg-white text-[#008000] p-2 rounded-xl border-2 border-amber-300 shadow-md flex items-center justify-center font-black text-xl w-12 h-12 transition-transform group-hover:scale-105">
              HSG
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-black tracking-tight text-white flex items-center gap-1">
                HOẢNG SÀI GÒN
              </h1>
              <p className="text-[10px] md:text-xs text-amber-200 font-semibold tracking-wider uppercase">
                THIẾT BỊ CHĂN NUÔI CHUYÊN NGHIỆP
              </p>
            </div>
          </div>

          {/* Search bar */}
          <form 
            onSubmit={handleSearchSubmit}
            className="w-full max-w-lg flex items-center relative"
            id="search-form"
          >
            <input 
              type="text" 
              placeholder="Tìm kiếm máy hơi, máng ăn heo, núm inox, lồng gà..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-12 py-2.5 rounded-l-md text-gray-800 placeholder-gray-400 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#008000] text-sm md:text-base leading-5"
            />
            <button 
              type="submit"
              className="bg-[#fcd34d] hover:bg-amber-400 text-emerald-950 font-bold px-5 py-2.5 rounded-r-md transition-all duration-150 flex items-center justify-center shadow-sm hover:shadow active:scale-95 shrink-0"
              id="search-btn"
            >
              <Search className="w-5 h-5 text-emerald-950 stroke-[2.5]" />
            </button>
          </form>

          {/* Contact Hotline & Cart Info */}
          <div className="flex items-center space-x-6 shrink-0">
            {/* Hotline number */}
            <a 
              href="tel:0913777352" 
              className="flex items-center space-x-2.5 group bg-emerald-900 border border-emerald-800/40 p-2 px-3.5 rounded-lg text-white hover:bg-emerald-800 transition-all duration-200"
              id="hotline-link"
            >
              <div className="bg-[#fcd34d] p-1.5 rounded-full text-emerald-900 animate-pulse group-hover:scale-110 transition-transform">
                <Phone className="w-4 h-4 fill-emerald-900" />
              </div>
              <div className="text-left font-sans">
                <div className="text-[10px] text-emerald-200 font-semibold uppercase tracking-wider leading-none">Hotline 24/7</div>
                <div className="text-base text-white font-bold tracking-tight leading-tight group-hover:text-amber-200 transition-colors">
                  0913.777.352
                </div>
              </div>
            </a>

            {/* Quote Request Basket/Cart */}
            <button
              onClick={openCart}
              className="relative p-2.5 text-white hover:text-amber-300 hover:bg-emerald-800 rounded-lg transition-colors flex items-center space-x-1"
              title="Danh sách yêu cầu báo giá"
              id="quote-cart-btn"
            >
              <div className="relative">
                <ShoppingCart className="w-6 h-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-[#fcd34d] text-emerald-950 text-xs font-black rounded-full h-5 w-5 flex items-center justify-center border-2 border-[#008000] animate-bounce">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="hidden lg:inline text-xs font-bold uppercase tracking-wider">Báo giá</span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
