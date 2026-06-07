import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, PhoneCall, CheckCircle, Award, PackageCheck } from 'lucide-react';
import { INTRO_TXT } from '../data';

interface HeroBannerProps {
  onNavigate: (section: string) => void;
  onFilterCategory: (category: string) => void;
}

export default function HeroBanner({ onNavigate, onFilterCategory }: HeroBannerProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'MÁNG ĂN TỰ ĐỘNG INOX THẾ HỆ MỚI',
      subtitle: 'Kích thích heo tăng trưởng - Tiết kiệm 15% lượng cám rơi vãi',
      tagline: 'Sản xuất trực tiếp trên dây chuyền cơ khí CNC hiện đại',
      buttonTxt: 'Xem thiết bị chăn nuôi heo',
      category: 'pig',
      bgImage: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&q=80&w=1200'
    },
    {
      title: 'HỆ THỐNG LỒNG GÀ ĐẺ CÔNG NGHIỆP',
      subtitle: 'Sắt mạ kẽm dày dặn - Trứng tự động lăn, hạn chế bể vỡ 99%',
      tagline: 'Hàng cơ khí xuất khẩu chất lượng cao - Bao sập tải',
      buttonTxt: 'Khám phá thiết bị gia cầm',
      category: 'poultry',
      bgImage: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&q=80&w=1200'
    },
    {
      title: 'SƯỞI ẤM HỒNG NGOẠI & ÚM THÔNG MINH',
      subtitle: 'Bóng đèn hồng ngoại chống nổ - Giảm bệnh lạnh bụng ở gia súc sơ sinh',
      tagline: 'Bộ sưởi dẻo dai, giữ ấm lan tỏa sâu, hoạt động 6000 giờ thắp',
      buttonTxt: 'Xem hệ thống sưởi ấm',
      category: 'heating',
      bgImage: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&q=80&w=1200'
    }
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000); // 7 seconds per slide

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleSlideAction = (category: string) => {
    onFilterCategory(category);
    onNavigate('products');
  };

  return (
    <section className="relative w-full h-[320px] md:h-[460px] bg-emerald-950 overflow-hidden font-sans select-none" id="hero-slider">
      {/* Background slide wrapper */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-30' : 'opacity-0 pointer-events-none'
            }`}
          >
            <img
              src={slide.bgImage}
              alt={slide.title}
              className="w-full h-full object-cover object-center filter saturate-50 contrast-125"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
        {/* Soft overlay gradient style */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-900/90 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 via-transparent to-transparent"></div>
      </div>

      {/* Slide text content indicator */}
      <div className="relative max-w-7xl mx-auto h-full px-6 flex flex-col justify-center text-white z-10">
        <span className="inline-block self-start text-xs font-bold text-amber-300 bg-emerald-800/80 px-3 py-1 rounded-full border border-emerald-600/40 uppercase tracking-widest mb-3 animate-pulse">
          {slides[currentSlide].tagline}
        </span>
        
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white tracking-tight max-w-xl md:max-w-2xl leading-tight">
          {slides[currentSlide].title}
        </h2>
        
        <p className="text-sm md:text-lg text-emerald-100 mt-2 md:mt-4 max-w-lg md:max-w-xl font-medium">
          {slides[currentSlide].subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mt-6 md:mt-8">
          <button
            onClick={() => handleSlideAction(slides[currentSlide].category)}
            className="bg-[#fcd34d] hover:bg-amber-400 text-emerald-950 font-bold px-6 py-3 rounded-lg transition-all shadow-lg text-sm md:text-base flex items-center justify-center gap-2 transform active:scale-95"
          >
            <PackageCheck className="w-5 h-5 shrink-0" />
            <span>{slides[currentSlide].buttonTxt}</span>
          </button>
          
          <a
            href="tel:0913777352"
            className="border-2 border-white hover:bg-white hover:text-emerald-950 font-bold px-6 py-3 rounded-lg transition-all text-sm md:text-base flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-4 h-4 shrink-0" />
            <span>Tư vấn kỹ thuật chuồng trại</span>
          </a>
        </div>
      </div>

      {/* Left/Right Arrow controllers */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-emerald-900/60 hover:bg-emerald-800 text-emerald-100 transition-colors hidden md:block border border-emerald-700/30"
        title="Quay lại"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-emerald-900/60 hover:bg-emerald-800 text-emerald-100 transition-colors hidden md:block border border-emerald-700/30"
        title="Tiếp theo"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide indicators (dot matrix) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === currentSlide ? 'bg-[#fcd34d] w-6' : 'bg-emerald-800 hover:bg-emerald-700'
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
