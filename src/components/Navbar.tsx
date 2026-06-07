import { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown, Award, Sparkles, Building, Layers, Eye, ShieldCheck, HeartPulse } from 'lucide-react';

interface NavbarProps {
  onNavigate: (section: string) => void;
  activeSection: string;
  onFilterCategory: (categoryId: string, subCategoryName?: string) => void;
}

export default function Navbar({ onNavigate, activeSection, onFilterCategory }: NavbarProps) {
  const [isOpenMega, setIsOpenMega] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const megaMenuRef = useRef<HTMLDivElement>(null);

  // Close mega menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node)) {
        setIsOpenMega(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubCategoryClick = (category: string, subCategory?: string) => {
    onFilterCategory(category, subCategory);
    onNavigate('products');
    setIsOpenMega(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="w-full bg-[#008000] border-t border-emerald-700 text-white font-sans sticky top-[80px] md:top-[88px] z-40 shadow-sm" id="main-navigation">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-12">
        
        {/* Navigation Links for Desktop */}
        <div className="hidden md:flex items-center space-x-1 h-full font-semibold">
          <button 
            onClick={() => { onNavigate('home'); setIsMobileMenuOpen(false); }}
            className={`px-4 py-3.5 text-sm uppercase tracking-wider transition-colors duration-200 border-b-2 hover:bg-emerald-800 ${
              activeSection === 'home' ? 'border-[#fcd34d] text-amber-200 bg-emerald-800' : 'border-transparent text-white'
            }`}
            id="nav-home"
          >
            Trang chủ
          </button>
          
          <button 
            onClick={() => { onNavigate('about'); setIsMobileMenuOpen(false); }}
            className={`px-4 py-3.5 text-sm uppercase tracking-wider transition-colors duration-200 border-b-2 hover:bg-emerald-800 ${
              activeSection === 'about' ? 'border-[#fcd34d] text-amber-200 bg-emerald-800' : 'border-transparent text-white'
            }`}
            id="nav-about"
          >
            Giới thiệu
          </button>

          {/* Mega Menu Parent */}
          <div 
            className="relative h-full flex items-center group" 
            onMouseEnter={() => setIsOpenMega(true)}
            onMouseLeave={() => setIsOpenMega(false)}
            ref={megaMenuRef}
          >
            <button 
              onClick={() => { setIsOpenMega(!isOpenMega); onNavigate('products'); }}
              className={`px-4 py-3.5 text-sm uppercase tracking-wider transition-colors duration-200 border-b-2 hover:bg-emerald-800 flex items-center gap-1.5 h-full ${
                activeSection === 'products' ? 'border-[#fcd34d] text-amber-200 bg-emerald-800' : 'border-transparent text-white'
              }`}
              id="nav-products"
            >
              Sản phẩm
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpenMega ? 'rotate-180' : ''}`} />
            </button>

            {/* MEGA MENU COMPONENT */}
            {isOpenMega && (
              <div 
                className="absolute left-0 top-full w-[800px] bg-white text-gray-800 rounded-b-lg shadow-2xl border border-gray-100 p-6 flex gap-6 z-50 animate-[fadeIn_0.15s_ease-out]"
                id="mega-menu-content"
              >
                {/* Column 1: Pig */}
                <div className="flex-1 border-r border-gray-100 pr-5">
                  <div 
                    onClick={() => handleSubCategoryClick('pig')}
                    className="font-bold text-[#008000] text-sm uppercase pb-2 mb-2 border-b border-emerald-500/20 flex items-center gap-2 cursor-pointer hover:text-emerald-800"
                  >
                    <Building className="w-4 h-4 text-emerald-600" />
                    <span>Thiết bị cho heo</span>
                  </div>
                  <ul className="space-y-2 text-sm pl-6 list-disc marker:text-emerald-600">
                    <li>
                      <button 
                        onClick={() => handleSubCategoryClick('pig', 'Máng ăn heo')}
                        className="text-gray-600 hover:text-[#008000] font-medium text-left w-full transition-colors"
                      >
                        Máng ăn heo
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => handleSubCategoryClick('pig', 'Núm uống nước')}
                        className="text-gray-600 hover:text-[#008000] font-medium text-left w-full transition-colors"
                      >
                        Núm uống nước
                      </button>
                    </li>
                  </ul>
                  
                  {/* Decorative tag for pig */}
                  <div className="mt-4 bg-emerald-50 p-2 rounded text-[11px] text-emerald-800 font-semibold flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Inox 304 tiêu chuẩn cơ sở</span>
                  </div>
                </div>

                {/* Column 2: Poultry */}
                <div className="flex-1 border-r border-gray-100 pr-5">
                  <div 
                    onClick={() => handleSubCategoryClick('poultry')}
                    className="font-bold text-[#008000] text-sm uppercase pb-2 mb-2 border-b border-emerald-500/20 flex items-center gap-2 cursor-pointer hover:text-emerald-800"
                  >
                    <Layers className="w-4 h-4 text-emerald-600" />
                    <span>Thiết bị gia cầm</span>
                  </div>
                  <ul className="space-y-2 text-sm pl-6 list-disc marker:text-emerald-600">
                    <li>
                      <button 
                        onClick={() => handleSubCategoryClick('poultry', 'Lồng gà')}
                        className="text-gray-600 hover:text-[#008000] font-medium text-left w-full transition-colors"
                      >
                        Lồng gà chất lượng cao
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => handleSubCategoryClick('poultry', 'Máng ăn gà')}
                        className="text-gray-600 hover:text-[#008000] font-medium text-left w-full transition-colors"
                      >
                        Máng tập ăn gà con
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => handleSubCategoryClick('poultry', 'Máng uống gà')}
                        className="text-gray-600 hover:text-[#008000] font-medium text-left w-full transition-colors"
                      >
                        Máng uống nước gà
                      </button>
                    </li>
                  </ul>
                  
                  <div className="mt-4 bg-amber-50 p-2 rounded text-[11px] text-amber-900 font-semibold flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>Sắt mạ kẽm & Nhựa chịu nhiệt</span>
                  </div>
                </div>

                {/* Column 3: Sưởi & Thú Y */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div 
                      onClick={() => handleSubCategoryClick('heating')}
                      className="font-bold text-[#008000] text-sm uppercase pb-1.5 mb-2 border-b border-emerald-500/20 flex items-center gap-2 cursor-pointer hover:text-emerald-800"
                    >
                      <Sparkles className="w-4 h-4 text-amber-500" />
                      <span>Hệ thống sưởi & điện</span>
                    </div>
                    <ul className="space-y-1.5 text-sm pl-6 list-inside list-disc marker:text-emerald-600 mb-4">
                      <li>
                        <button 
                          onClick={() => handleSubCategoryClick('heating')}
                          className="text-gray-600 hover:text-[#008000]"
                        >
                          Bóng sưởi hồng ngoại
                        </button>
                      </li>
                      <li>
                        <button 
                          onClick={() => handleSubCategoryClick('heating')}
                          className="text-gray-600 hover:text-[#008000]"
                        >
                          Chụp sưởi Ga thông minh
                        </button>
                      </li>
                    </ul>

                    <div 
                      onClick={() => handleSubCategoryClick('vet')}
                      className="font-bold text-[#008000] text-sm uppercase pb-1.5 mb-2 border-b border-emerald-500/20 flex items-center gap-2 cursor-pointer hover:text-emerald-800"
                    >
                      <HeartPulse className="w-4 h-4 text-rose-500" />
                      <span>Dụng cụ thú y</span>
                    </div>
                    <ul className="space-y-1.5 text-sm pl-6 list-inside list-disc marker:text-emerald-600">
                      <li>
                        <button 
                          onClick={() => handleSubCategoryClick('vet')}
                          className="text-gray-600 hover:text-[#008000]"
                        >
                          Xy lanh tự động tiêm vắc xin
                        </button>
                      </li>
                      <li>
                        <button 
                          onClick={() => handleSubCategoryClick('vet')}
                          className="text-gray-600 hover:text-[#008000]"
                        >
                          Que phối tinh, vách ngăn nái
                        </button>
                      </li>
                    </ul>
                  </div>

                  <button 
                    onClick={() => { onNavigate('products'); setIsOpenMega(false); }}
                    className="w-full mt-4 text-center text-xs bg-emerald-600 hover:bg-[#008000] text-white py-1.5 rounded-md font-sans font-bold flex items-center justify-center gap-1"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    Xem tất cả trang thiết bị
                  </button>
                </div>
              </div>
            )}
          </div>

          <button 
            onClick={() => { onNavigate('contact'); setIsMobileMenuOpen(false); }}
            className={`px-4 py-3.5 text-sm uppercase tracking-wider transition-colors duration-200 border-b-2 hover:bg-emerald-800 ${
              activeSection === 'contact' ? 'border-[#fcd34d] text-amber-200 bg-emerald-800' : 'border-transparent text-white'
            }`}
            id="nav-contact"
          >
            Liên hệ
          </button>
        </div>

        {/* Special USP / Slogan in main nav */}
        <div className="hidden lg:flex items-center text-[#fcd34d] text-xs font-bold gap-1 relative overflow-hidden select-none">
          <span className="animate-pulse bg-amber-500 text-emerald-950 px-1.5 py-0.5 rounded text-[10px]">TIN CẬY</span>
          <span>CHẤT LƯỢNG CHĂN NUÔI ĐẠT CHUẨN XUẤT KHẨU</span>
        </div>

        {/* Hamburger Mobile Menu Button */}
        <div className="md:hidden flex items-center justify-between w-full">
          <span className="text-sm font-bold uppercase tracking-wider text-amber-200">
            {activeSection === 'home' && 'Trang chủ'}
            {activeSection === 'about' && 'Giới thiệu'}
            {activeSection === 'products' && 'Sản phẩm'}
            {activeSection === 'contact' && 'Liên hệ ý kiến'}
          </span>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-1 px-2.5 rounded-md hover:bg-emerald-800 border border-emerald-600 text-white flex items-center gap-1.5 transition-colors"
            id="mobile-menu-toggle"
          >
            <span className="text-xs uppercase font-bold tracking-wider">Danh mục</span>
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu Content */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden bg-emerald-950 border-t border-emerald-800 text-emerald-100 flex flex-col py-3 px-4 space-y-2 font-medium z-40 transition-all duration-300"
          id="mobile-menu-drawer"
        >
          <button 
            onClick={() => { onNavigate('home'); setIsMobileMenuOpen(false); }}
            className="text-left w-full p-2.5 border-b border-emerald-900 hover:text-white"
          >
            Trang chủ Hoàng Sài Gòn
          </button>
          <button 
            onClick={() => { onNavigate('about'); setIsMobileMenuOpen(false); }}
            className="text-left w-full p-2.5 border-b border-emerald-900 hover:text-white"
          >
            Giới thiệu doanh nghiệp
          </button>

          {/* Collapsible Product lists directly on mobile */}
          <div className="p-2 bg-emerald-900/60 rounded-md my-1">
            <span className="text-amber-300 font-bold text-xs uppercase tracking-wider block px-1 mb-2">Đồ Dùng Cho Heo</span>
            <div className="flex flex-col space-y-1 text-sm pl-2">
              <button 
                onClick={() => handleSubCategoryClick('pig', 'Máng ăn heo')} 
                className="text-left p-1 text-emerald-200 hover:text-white"
              >
                + Máng ăn tự động cho Heo
              </button>
              <button 
                onClick={() => handleSubCategoryClick('pig', 'Núm uống nước')} 
                className="text-left p-1 text-emerald-200 hover:text-white"
              >
                + Núm nước Inox, Silicon
              </button>
            </div>
          </div>

          <div className="p-2 bg-emerald-900/60 rounded-md my-1">
            <span className="text-amber-300 font-bold text-xs uppercase tracking-wider block px-1 mb-2">Dụng Cụ Gia Cầm</span>
            <div className="flex flex-col space-y-1 text-sm pl-2">
              <button 
                onClick={() => handleSubCategoryClick('poultry', 'Lồng gà')} 
                className="text-left p-1 text-emerald-200 hover:text-white"
              >
                + Lồng gà đẻ trứng sắt
              </button>
              <button 
                onClick={() => handleSubCategoryClick('poultry', 'Máng ăn gà')} 
                className="text-left p-1 text-emerald-200 hover:text-white"
              >
                + Máng tập ăn chống bới
              </button>
              <button 
                onClick={() => handleSubCategoryClick('poultry', 'Máng uống gà')} 
                className="text-left p-1 text-emerald-200 hover:text-white"
              >
                + Máng uống nước Pelican
              </button>
            </div>
          </div>

          <div className="p-2 bg-emerald-900/60 rounded-md my-1 flex justify-between gap-2">
            <button 
              onClick={() => handleSubCategoryClick('heating')} 
              className="flex-1 bg-emerald-850 hover:bg-emerald-800 p-2 text-center rounded text-xs border border-emerald-700 hover:text-white"
            >
              Hệ Thống Sưởi
            </button>
            <button 
              onClick={() => handleSubCategoryClick('vet')} 
              className="flex-1 bg-emerald-850 hover:bg-emerald-800 p-2 text-center rounded text-xs border border-emerald-700 hover:text-white"
            >
              Dụng Cụ Thú Y
            </button>
          </div>

          <button 
            onClick={() => { onNavigate('contact'); setIsMobileMenuOpen(false); }}
            className="text-left w-full p-2.5 bg-amber-500 text-emerald-950 font-bold rounded-md hover:bg-amber-400 mt-2 text-center"
          >
            Liên hệ đặt hàng trực tiếp
          </button>
        </div>
      )}
    </nav>
  );
}
