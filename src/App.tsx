import { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import AboutCompany from './components/AboutCompany';
import ProductGrid from './components/ProductGrid';
import ProductDetailModal from './components/ProductDetailModal';
import ContactForm from './components/ContactForm';
import SidebarWidgets from './components/SidebarWidgets';
import Footer from './components/Footer';
import RequestQuoteModal from './components/RequestQuoteModal';
import { PRODUCTS } from './data';
import { Product } from './types';
import { Sparkles, Phone, Package, Quote, ClipboardCheck, ArrowRight } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  // Basket Cart containing products to request quotes for
  const [cart, setCart] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Smooth scroll handler helper
  const handleNavigate = (section: string) => {
    setActiveSection(section);
    
    if (section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (section === 'about') {
      const el = document.getElementById('about-section');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (section === 'products') {
      const el = document.getElementById('products-catalog');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (section === 'contact') {
      const el = document.getElementById('contact-info-form');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Scroll to contact form explicitly
  const handleScrollToContact = () => {
    handleNavigate('contact');
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() !== '') {
      // Auto scroll to products catalog to show search results
      const el = document.getElementById('products-catalog');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection('products');
    }
  };

  const handleFilterCategory = (categoryId: string, subCategoryName?: string | null) => {
    setSelectedCategory(categoryId);
    setSelectedSubCategory(subCategoryName || null);
    
    // Smooth scroll to catalog
    const el = document.getElementById('products-catalog');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveSection('products');
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 3000); // 3 seconds timeout
  };

  // Cart Operation Handlers
  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => {
      const exists = prevCart.find((item) => item.id === product.id);
      if (exists) {
        showToast(`Đã tăng số lượng ${product.name} trong giỏ báo giá!`);
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, qty: ((item as any).qty || 1) + 1 } as any : item
        );
      }
      showToast(`Đã thêm ${product.name} vào danh sách báo giá thành công!`);
      return [...prevCart, { ...product, qty: 1 }];
    });
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    showToast('Đã xóa thiết bị khỏi giỏ báo giá.');
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, qty: quantity } as any : item
      )
    );
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Helper open quote request direct from detail modal
  const handleDirectQuoteRequest = (product: Product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (!exists) {
      setCart((prev) => [...prev, { ...product, qty: 1 }]);
    }
    setSelectedProduct(null); // Close details modal
    setIsCartOpen(true); // Open quotation form modal
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans select-none scroll-smooth">
      
      {/* Header elements */}
      <Header 
        onSearch={handleSearch} 
        cartCount={cart.reduce((s, i) => s + ((i as any).qty || 1), 0)}
        openCart={() => setIsCartOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Primary Navigation System with Mega Menu */}
      <Navbar 
        onNavigate={handleNavigate} 
        activeSection={activeSection}
        onFilterCategory={handleFilterCategory}
      />

      {/* MAIN BANNER SLIDER */}
      <HeroBanner 
        onNavigate={handleNavigate}
        onFilterCategory={handleFilterCategory}
      />

      {/* HIGH LIGHTS USP RIBBON */}
      <div className="bg-amber-300 text-emerald-950 py-3 border-y border-amber-400 font-bold text-xs" id="concept">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center gap-4">
          <div className="flex items-center gap-1.5">
            <ClipboardCheck className="w-4 h-4 text-[#008000]" />
            <span>MÁNG LẮC INOX & LỒNG GÀ GIA CÔNG TRỰC TIẾP TẠI XƯỞNG</span>
          </div>
          <span className="hidden md:inline text-emerald-800">•</span>
          <div className="flex items-center gap-1.5">
            <Package className="w-4 h-4 text-[#008000]" />
            <span>BAO ĐỔI TRẢ TRONG VÒNG 7 NGÀY NẾU SAI THÔNG SỐ GIA CÔNG</span>
          </div>
          <span className="hidden md:inline text-emerald-800">•</span>
          <div className="flex items-center gap-1.5">
            <Phone className="w-4 h-4 text-[#008000]" />
            <span>ĐIỆN THOẠI TƯ VẤN THIẾT KẾ TRẠI SỈ LẺ: 0913 777 352</span>
          </div>
        </div>
      </div>

      {/* TWO COLUMN NEWS & INTRO */}
      <AboutCompany onLearnMore={() => handleNavigate('about')} />

      {/* CORE PRODUCT CATALOG GRID SYSTEM */}
      <ProductGrid 
        products={PRODUCTS}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        selectedSubCategory={selectedSubCategory}
        onSelectSubCategory={setSelectedSubCategory}
        searchQuery={searchQuery}
        onViewDetails={(p) => setSelectedProduct(p)}
        onAddToCart={handleAddToCart}
        cartProducts={cart.map(c => c.id)}
      />

      {/* SEED PROMOTION BANNER CARD SECTION */}
      <section className="bg-[#008000] text-white py-12 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-4 relative z-10">
          <span className="bg-amber-300 text-emerald-950 font-black text-xs p-1.5 px-3 rounded-full uppercase tracking-wider">
            KHUYẾN KHÍCH CHĂN NUÔI VIỆT NAM PHÁT TRIỂN
          </span>
          <h2 className="text-2xl md:text-4xl font-black tracking-tight text-white leading-tight">
            Sản Xuất Theo Yêu Cầu Riêng Cho Tần Gá, Kích Thước Ô Chuồng
          </h2>
          <p className="text-sm md:text-base text-emerald-100 max-w-2xl mx-auto leading-relaxed">
            Nếu cô bác anh chị có kích thước ngăn chuồng heo thịt lệch quy cách hay cần đặt số ngăn lồng kẽm kịch sàn khác biệt, hãy gọi ngay hoặc gửi liên hệ. Hoàng Sài Gòn trực tiếp tính toán, lên vách uốn inox chính xác tuyệt đối.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <a 
              href="tel:0913777352"
              className="bg-[#fcd34d] hover:bg-amber-400 text-emerald-950 font-extrabold px-8 py-3.5 rounded-xl shadow-lg transition-transform active:scale-95 text-sm md:text-base"
            >
              Gọi Báo Giá Trực Tiếp: 0913.777.352
            </a>
            <button
              onClick={() => handleNavigate('contact')}
              className="bg-emerald-900 hover:bg-emerald-800 text-white font-semibold px-6 py-3.5 rounded-xl border border-emerald-700 text-sm md:text-base flex items-center gap-1.5"
            >
              <span>Điền biểu mẫu liên hệ</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
        {/* Abstract background graphics */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-800 rounded-full opacity-30 transform translate-x-20 -translate-y-20 blur-xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-800 rounded-full opacity-30 transform -translate-x-20 translate-y-20 blur-xl"></div>
      </section>

      {/* DETAILED FORM CONTACT AND MAPS */}
      <ContactForm />

      {/* FOOTER POLICIES & COPYRIGHTS */}
      <Footer onNavigate={handleNavigate} onFilterCategory={handleFilterCategory} />

      {/* LEFT SIDEBAR STICKY SHORTCUTS & CHATBOT MOCKUP */}
      <SidebarWidgets 
        onNavigateHome={() => handleNavigate('home')} 
        onScrollToContact={handleScrollToContact}
      />

      {/* PRODUCT DETAILS MODAL VIEW */}
      {selectedProduct && (
        <ProductDetailModal 
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
          cartProducts={cart.map(c => c.id)}
          onOpenQuoteRequest={handleDirectQuoteRequest}
        />
      )}

      {/* QUOTATION CART BASKET MODAL */}
      <RequestQuoteModal 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartProducts={cart}
        onRemoveFromCart={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateQuantity}
        onClearCart={handleClearCart}
      />

      {/* SMART GLOBAL TOAST POPUP MODAL */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 bg-emerald-900 border border-emerald-700 text-white text-xs md:text-sm font-semibold p-3.5 rounded-xl shadow-2xl z-50 flex items-center gap-2.5 max-w-sm animate-[fadeIn_0.15s_ease-out]">
          <div className="bg-[#fcd34d] text-emerald-950 p-1 rounded-full shrink-0">
            <Sparkles className="w-4 h-4 fill-emerald-950" />
          </div>
          <span>{toastMessage}</span>
        </div>
      )}

    </div>
  );
}
