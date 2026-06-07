import { Phone, Mail, MapPin, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: string) => void;
  onFilterCategory: (categoryId: string) => void;
}

export default function Footer({ onNavigate, onFilterCategory }: FooterProps) {
  
  const handleNavCategory = (catId: string) => {
    onFilterCategory(catId);
    onNavigate('products');
    window.scrollTo({ top: 380, behavior: 'smooth' });
  };

  return (
    <footer className="bg-emerald-950 text-emerald-100 py-12 border-t-4 border-amber-300 font-sans" id="app-footer">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Column 1: Brand Info */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2.5">
            <div className="bg-white text-[#008000] p-1 px-2.5 rounded-lg border-2 border-amber-300 font-black text-base shadow-md">
              HSG
            </div>
            <div>
              <h3 className="font-black text-white tracking-widest text-base">HOẢNG SÀI GÒN</h3>
              <p className="text-[10px] text-amber-300 uppercase tracking-wider font-semibold">Chăn nuôi công nghệ tốt</p>
            </div>
          </div>
          <p className="text-xs text-emerald-200/90 leading-relaxed text-justify">
            Cơ sở sản xuất và phân phối trực tiếp thiết bị chăn nuôi inox 304, sắt mạ kẽm chính hiệu phục vụ các dự án nông trại vừa và lớn tại Việt Nam. Cam kết hàng Việt Nam chất lượng cao.
          </p>
          <div className="flex items-center space-x-2 text-[11px] text-emerald-300">
            <ShieldCheck className="w-4.5 h-4.5 text-amber-300 shrink-0" />
            <span>Mã hộ kinh doanh: 41B8872001CS</span>
          </div>
        </div>

        {/* Column 2: Product Categories Quicklinks */}
        <div className="space-y-4">
          <h4 className="text-white text-sm font-black uppercase tracking-wider border-b border-emerald-800 pb-2">
            Danh mục sản phẩm
          </h4>
          <ul className="space-y-2 text-xs md:text-sm font-sans font-medium">
            <li>
              <button 
                onClick={() => handleNavCategory('pig')}
                className="hover:text-amber-300 transition-colors text-emerald-200"
              >
                + Thiết bị chăn nuôi Heo
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavCategory('poultry')}
                className="hover:text-amber-300 transition-colors text-emerald-200"
              >
                + Lồng sắt nuôi gà, vịt đẻ trứng
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavCategory('heating')}
                className="hover:text-amber-300 transition-colors text-emerald-200"
              >
                + Đèn úm hồng ngoại & sưởi Gas
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavCategory('vet')}
                className="hover:text-amber-300 transition-colors text-emerald-200"
              >
                + Xy lanh, kim tiêm, phối tinh thú y
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Corporate Policies */}
        <div className="space-y-4">
          <h4 className="text-white text-sm font-black uppercase tracking-wider border-b border-emerald-800 pb-2">
            Chính sách & Hướng dẫn
          </h4>
          <ul className="space-y-2 text-xs text-emerald-200/90 font-medium">
            <li className="hover:text-amber-300 cursor-pointer" onClick={() => onNavigate('about')}>
              • Về thương hiệu Hoàng Sài Gòn
            </li>
            <li className="hover:text-amber-300 cursor-pointer" onClick={() => onNavigate('contact')}>
              • Hướng dẫn đặt hàng & thanh toán
            </li>
            <li className="hover:text-amber-300 cursor-pointer">
              • Chính sách bảo hành Inox 12 tháng
            </li>
            <li className="hover:text-amber-300 cursor-pointer">
              • Điều khoản sỉ lẻ xe tải vận chuyển
            </li>
            <li className="hover:text-amber-300 cursor-pointer">
              • Bảo mật thông tin khách hàng chăn nuôi
            </li>
          </ul>
        </div>

        {/* Column 4: Address Info */}
        <div className="space-y-4">
          <h4 className="text-white text-sm font-black uppercase tracking-wider border-b border-emerald-800 pb-2">
            Thông tin liên hệ
          </h4>
          <ul className="space-y-3.5 text-xs text-emerald-200/95 leading-relaxed text-left">
            <li className="flex gap-2 items-start">
              <MapPin className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
              <span>Quốc lộ 1A, Vĩnh Lộc B, Bình Chánh, TP. Hồ Chí Minh.</span>
            </li>
            <li className="flex gap-2 items-start">
              <Phone className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
              <a href="tel:0913777352" className="hover:text-amber-300 hover:underline font-bold text-white">
                0913.777.352 (Zalo)
              </a>
            </li>
            <li className="flex gap-2 items-start">
              <Mail className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
              <a href="mailto:thanhphuong8872001@gmail.com" className="hover:text-amber-300 break-all text-white">
                thanhphuong8872001@gmail.com
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom copyright banner */}
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-6 border-t border-emerald-900 text-center text-xs text-emerald-300 font-medium">
        <p>Bản quyền © 2026 thuộc về **Cơ Sở Thiết Bị Chăn Nuôi Hoàng Sài Gòn**. Toàn quyền bảo lưu.</p>
        <p className="mt-1 flex items-center justify-center gap-1 text-[11px] text-emerald-400">
          Thiết kế chuẩn SEO chuyên nghiệp - Đồng hành cùng phát triển chăn nuôi Việt Nam 
          <Heart className="w-3 h-3 text-red-500 fill-red-500" />
        </p>
      </div>
    </footer>
  );
}
