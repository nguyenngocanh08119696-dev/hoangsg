import { useState, FormEvent } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, ShieldAlert } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    subject: '',
    message: ''
  });
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      alert('Vui lòng cung cấp ít nhất Họ tên và Số điện thoại liên hệ!');
      return;
    }

    setIsSubmitting(true);
    // Simulate API delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitSuccess(true);
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        address: '',
        subject: '',
        message: ''
      });
      // Clear message after 5 seconds
      setTimeout(() => setIsSubmitSuccess(false), 5000);
    }, 1200);
  };

  return (
    <section className="py-12 bg-gray-50 border-t border-gray-150 font-sans scroll-mt-24" id="contact-info-form">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Title structure */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-bold text-[#008000] uppercase tracking-widest block mb-1">
            KẾT NỐI VỚI HOẢNG SÀI GÒN
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">
            Liên Hệ Đặt Hàng & Tư Vấn Kỹ Thuật
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Đội ngũ tư vấn lắp đặt chuồng trại của chúng tôi luôn túc trực lắng nghe và phản hồi bà con trong vòng 15 phút.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Info Blocks: 5 cols */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Box 1: Tru so chinh */}
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs flex gap-4">
              <div className="bg-emerald-50 text-[#008000] p-3 rounded-xl h-fit shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-gray-900 text-sm md:text-base uppercase tracking-wider">Cơ sở sản xuất chính</h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed text-left">
                  Quốc lộ 1A, Xã Vĩnh Lộc B, Huyện Bình Chánh, Thành phố Hồ Chí Minh, Việt Nam.
                </p>
                <div className="text-emerald-800 text-xs font-semibold pt-1">
                  (Bán sỉ phụ kiện máng, úm, máng lắc công nghiệp sỉ lẻ)
                </div>
              </div>
            </div>

            {/* Box 2: Chi nhanh mien tay */}
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs flex gap-4">
              <div className="bg-emerald-50 text-[#008000] p-3 rounded-xl h-fit shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-gray-900 text-sm md:text-base uppercase tracking-wider">Chi nhánh Miền Tây</h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed text-left">
                  Quốc lộ 30, Xã Mỹ Trà, Thành phố Cao Lãnh, Tỉnh Đồng Tháp, Việt Nam.
                </p>
                <div className="text-emerald-800 text-xs font-semibold pt-1">
                  (Cung cấp lồng nuôi gà vịt đẻ công nghiệp mạ kẽm)
                </div>
              </div>
            </div>

            {/* Box 3: Hotline & Email */}
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs space-y-4">
              <div className="flex gap-4 items-center">
                <div className="bg-emerald-50 text-[#008000] p-3 rounded-xl shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">Hotline Tư Vấn Đại Lý</h4>
                  <a href="tel:0913777352" className="text-lg font-black text-emerald-800 hover:underline">
                    0913.777.352
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-center border-t border-gray-100 pt-4">
                <div className="bg-emerald-50 text-[#008000] p-3 rounded-xl shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">Hòm Thư Điện Tử</h4>
                  <a href="mailto:thanhphuong8872001@gmail.com" className="text-sm font-bold text-gray-700 hover:text-[#008000] break-all">
                    thanhphuong8872001@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Simulated Live Map Preview */}
            <div className="bg-white p-2 rounded-2xl border border-gray-100 shadow-xs h-[180px] overflow-hidden relative">
              <iframe
                title="Bản đồ chỉ dẫn Hoàng Sài Gòn"
                className="w-full h-full rounded-xl border-0 grayscale saturate-150"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15676.817088265551!2d106.56832265000001!3d10.834015700000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752b0f4fd8e7bb%3A0xe54d3ee09919f96b!2zVmluaCBM4buZYyBCLCBCw6BuaCBDaMOhbmgsIEhDTSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1717364121415!5m2!1svi!2s"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>

          {/* Contact Input Form: 7 cols */}
          <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-md">
            <h3 className="font-bold text-gray-900 text-lg mb-6 pb-2.5 border-b border-gray-150">
              Gửi Yêu Cầu Liên Hệ / Yêu Cầu Báo Giá Nhanh
            </h3>

            {isSubmitSuccess && (
              <div className="bg-emerald-50 border-2 border-emerald-300 text-emerald-950 p-4 rounded-xl flex items-start gap-3 mb-6 animate-[bounce_1s_ease-in-out_1]">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-emerald-900">Gửi thông tin thành công!</h4>
                  <p className="text-xs text-emerald-800 leading-normal mt-0.5">
                    Hệ thống đã ghi nhận thông tin của cô bác/anh chị. Thiết bị chăn nuôi Hoàng Sài Gòn sẽ có nhân viên gọi điện tư vấn đúng các thiết bị chăn nuôi theo nhu cầu nhanh nhất có thể. Cảm ơn bà con!
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Full name input */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-600 block">Họ và tên của bà con <span className="text-rose-500">*</span></label>
                  <input
                    type="text"
                    required
                    placeholder="Ví dụ: Nguyễn Văn A"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full text-xs md:text-sm p-3 rounded-xl border border-gray-250 focus:outline-none focus:ring-2 focus:ring-[#008000] bg-gray-50/50"
                  />
                </div>

                {/* Phone contact input */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-600 block">Số điện thoại liên hệ <span className="text-rose-500">*</span></label>
                  <input
                    type="tel"
                    required
                    placeholder="Ví dụ: 0913xxxxxx"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full text-xs md:text-sm p-3 rounded-xl border border-gray-250 focus:outline-none focus:ring-2 focus:ring-[#008000] bg-gray-50/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Email input */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-600 block">Hòm thư Email (nếu có)</label>
                  <input
                    type="email"
                    placeholder="ten-cua-ban@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full text-xs md:text-sm p-3 rounded-xl border border-gray-250 focus:outline-none focus:ring-2 focus:ring-[#008000] bg-gray-50/50"
                  />
                </div>

                {/* Farm Address */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-600 block">Địa chỉ trang trại (tỉnh/huyện)</label>
                  <input
                    type="text"
                    placeholder="Ví dụ: Cao Lãnh, Đồng Tháp"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full text-xs md:text-sm p-3 rounded-xl border border-gray-250 focus:outline-none focus:ring-2 focus:ring-[#008000] bg-gray-50/50"
                  />
                </div>
              </div>

              {/* Subject topic */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-600 block">Nội dung yêu cầu báo giá thiết bị / tư vấn</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full text-xs md:text-sm p-3 rounded-xl border border-gray-250 focus:outline-none focus:ring-2 focus:ring-[#008000] bg-gray-50/50 text-gray-700"
                >
                  <option value="">-- Chọn nội dung quan tâm --</option>
                  <option value="pig">Tư vấn hệ thống nuôi heo (Máng ăn, núm nước)</option>
                  <option value="poultry">Tư vấn lồng gà, máng ăn gia cầm công nghiệp</option>
                  <option value="heating">Cung cấp bóng sưởi hồng ngoại sỉ lẻ</option>
                  <option value="quote">Yêu cầu nhận bảng giá đại lý chiết kháu cao</option>
                  <option value="other">Ý kiến/góp ý hoặc nội dung khác</option>
                </select>
              </div>

              {/* Message text block */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-600 block">Nội dung chi tiết (Số lượng cần mua, quy cách chuồng)</label>
                <textarea
                  rows={4}
                  placeholder="Ghi rõ số lượng máng ăn heo, lồng kẽm hoặc chiều dài chuồng trại để Hoàng Sài Gòn tính toán tối ưu..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full text-xs md:text-sm p-3 rounded-xl border border-gray-250 focus:outline-none focus:ring-2 focus:ring-[#008000] bg-gray-50/50 resize-y"
                ></textarea>
              </div>

              {/* Submit button bar */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3">
                <div className="flex items-center gap-1.5 text-xs text-gray-400 font-sans">
                  <ShieldAlert className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Bảo mật tuyệt đối thông tin liên hệ của bà con</span>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-[#008000] hover:bg-emerald-800 text-white font-bold p-3 px-8 rounded-xl flex items-center justify-center gap-2 transition-all shadow active:scale-95 text-xs md:text-sm shrink-0 uppercase"
                  id="submit-contact-btn"
                >
                  {isSubmitting ? (
                    <span>Đang nộp thông tin...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>GỬI LIÊN HỆ NGAY</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
