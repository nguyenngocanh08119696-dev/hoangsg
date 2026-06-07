import { Award, ShieldCheck, Truck, Users } from 'lucide-react';
import { INTRO_TXT } from '../data';

interface AboutCompanyProps {
  onLearnMore?: () => void;
}

export default function AboutCompany({ onLearnMore }: AboutCompanyProps) {
  return (
    <section className="py-12 bg-gray-50 border-y border-gray-100 font-sans" id="about-section">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Column Left: Text Content */}
          <div className="lg:col-span-7 space-y-5">
            <div className="space-y-1.5">
              <span className="text-xs font-bold text-[#008000] uppercase tracking-widest block">
                UY TÍN 12 NĂM PHỤC VỤ NHÀ NÔNG
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight leading-tight">
                {INTRO_TXT.title}
              </h2>
              <p className="text-sm md:text-base text-emerald-800 font-semibold italic">
                "{INTRO_TXT.subtitle}"
              </p>
            </div>
            
            <div className="text-gray-600 space-y-4 text-justify text-sm md:text-base leading-relaxed">
              <p>{INTRO_TXT.content1}</p>
              <p>{INTRO_TXT.content2}</p>
            </div>

            {/* Quick Core Strengths Box */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              {INTRO_TXT.stats.map((stat, idx) => (
                <div key={idx} className="bg-white p-3 rounded-xl shadow-xs border border-emerald-100 text-center">
                  <div className="text-2xl md:text-3xl font-black text-[#008000]">{stat.value}</div>
                  <div className="text-[11px] md:text-xs text-gray-500 font-bold uppercase mt-1 tracking-wide">{stat.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Column Right: Elegant Illustrative Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Card 1: Giá gốc tận xưởng */}
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs hover:shadow-md hover:border-emerald-200 transition-all group">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#008000] flex items-center justify-center mb-3 group-hover:bg-[#008000] group-hover:text-white transition-colors">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-1">Giá Gốc Tại Xưởng</h3>
              <p className="text-xs text-gray-500 leading-relaxed text-left">
                Là cơ sở gia công và trực tiếp nhập khẩu thiết bị, cam kết giá lẻ cạnh tranh nhất, giá sỉ tốt nhất thị trường.
              </p>
            </div>

            {/* Card 2: Chất lượng hàng đầu */}
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs hover:shadow-md hover:border-emerald-200 transition-all group">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#008000] flex items-center justify-center mb-3 group-hover:bg-[#008000] group-hover:text-white transition-colors">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-1">Kiểm Thử Thực Tế</h3>
              <p className="text-xs text-gray-500 leading-relaxed text-left">
                Thiết bị inox, đồng đều được đưa vào dùng thử trực tiếp ở trang trại vật nuôi để chỉnh sửa kết cấu khớp cơ học tốt nhất trước khi bán sỉ.
              </p>
            </div>

            {/* Card 3: Giao hàng tận trang trại */}
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs hover:shadow-md hover:border-emerald-200 transition-all group">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#008000] flex items-center justify-center mb-3 group-hover:bg-[#008000] group-hover:text-white transition-colors">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-1">Giao Toàn Quốc</h3>
              <p className="text-xs text-gray-500 leading-relaxed text-left">
                Liên kết xe tải, xe khách và bưu cục Bắc Nam. Kiểm tra hàng hóa ưng ý, đầy đủ linh kiện chụp ốc rồi mới thanh toán tiền.
              </p>
            </div>

            {/* Card 4: Kỹ thuật kinh nghiệm */}
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs hover:shadow-md hover:border-emerald-200 transition-all group">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#008000] flex items-center justify-center mb-3 group-hover:bg-[#008000] group-hover:text-white transition-colors">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-1">Bà Con Tin Cậy</h3>
              <p className="text-xs text-gray-500 leading-relaxed text-left">
                Hỗ trợ tư vấn cách đặt máng, treo bóng úm rọi đèn, cách nối máng uống Pelican cao độ phù hợp theo tuổi của bầy gà chuẩn tư thế đớp.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
