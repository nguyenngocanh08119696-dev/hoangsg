import { useState, FormEvent } from 'react';
import { Product } from '../types';
import { X, Trash2, Send, CheckCircle, Calculator, Info } from 'lucide-react';

interface RequestQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartProducts: Product[];
  onRemoveFromCart: (id: string) => void;
  onUpdateQuantity: (id: string, qty: number) => void;
  onClearCart: () => void;
}

export default function RequestQuoteModal({
  isOpen,
  onClose,
  cartProducts,
  onRemoveFromCart,
  onUpdateQuantity,
  onClearCart
}: RequestQuoteModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    notes: ''
  });
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  // Format currency beautifully
  const formatVND = (value: number) => {
    if (value === 0) return 'Liên hệ giá sỉ';
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
  };

  // Calculate estimated total price (only for products with non-zero prices)
  const estimatedTotal = cartProducts.reduce((sum, item) => {
    // Treat 'qty' field (added dynamically) or fallback to 1
    const qty = (item as any).qty || 1;
    return sum + (item.price * qty);
  }, 0);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (cartProducts.length === 0) {
      alert('Danh sách báo giá trống. Vui lòng thêm sản phẩm chăn nuôi trước!');
      return;
    }
    if (!formData.fullName || !formData.phone) {
      alert('Vui lòng nhập Họ tên và Số điện thoại liên hệ để chúng tôi báo giá!');
      return;
    }

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitSuccess(true);
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        address: '',
        notes: ''
      });
      // Clear cart items on completion
      setTimeout(() => {
        onClearCart();
        setIsSubmitSuccess(false);
        onClose();
      }, 5000);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 overflow-y-auto animate-[fadeIn_0.2s_ease-out]">
      <div 
        className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl relative border border-emerald-100 flex flex-col"
        id="quote-request-modal"
      >
        
        {/* Header Modal */}
        <div className="p-5 border-b border-gray-150 flex justify-between items-center bg-emerald-50 rounded-t-3xl">
          <div className="flex items-center gap-2">
            <Calculator className="w-5 h-5 text-[#008000]" />
            <h3 className="font-extrabold text-gray-900 text-base md:text-lg">
              Yêu Cầu Báo Giá ({cartProducts.length} sản phẩm)
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 p-1 bg-white rounded-full border border-gray-150 transition-colors"
            title="Đóng cửa sổ"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 space-y-6 overflow-y-auto flex-1">
          
          {isSubmitSuccess ? (
            <div className="text-center py-8 space-y-4">
              <div className="inline-flex items-center justify-center bg-emerald-100 p-4 rounded-full text-emerald-600 mb-2">
                <CheckCircle className="w-12 h-12 stroke-[2.5]" />
              </div>
              <h4 className="text-xl font-black text-[#008000]">Gửi Yêu Cầu Báo Giá Thành Công!</h4>
              <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                Hoàng Sài Gòn đã nhận được danh sách thiết bị yêu cầu báo giá của cô bác/anh chị. 
                Chúng tôi sẽ tra cứu bảng chiết khấu đại lý tốt nhất và liên hệ điện thoại trong vòng ít phút nhé!
              </p>
              <div className="text-xs text-gray-400 font-mono italic">Cửa sổ sẽ tự đóng trong giây lát...</div>
            </div>
          ) : (
            <>
              {/* Cart List */}
              {cartProducts.length === 0 ? (
                <div className="text-center py-10 space-y-3">
                  <div className="text-gray-300 text-5xl">🛒</div>
                  <p className="text-gray-500 font-bold text-sm">Danh sách báo giá trống rỗng!</p>
                  <p className="text-xs text-gray-400">Hãy đóng cửa sổ này và tìm kiếm sản phẩm thích hợp, sau đó bấm nút "Thêm vào báo giá" để thu thập sản phẩm.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Danh mục thiết bị đã chọn</h4>
                  
                  <div className="divide-y divide-gray-150 max-h-[180px] overflow-y-auto border border-gray-150 rounded-xl px-3 bg-gray-50/30">
                    {cartProducts.map((item) => {
                      const qty = (item as any).qty || 1;
                      return (
                        <div key={item.id} className="py-3 flex items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="w-10 h-10 object-cover rounded-md border border-gray-250 shrink-0"
                              referrerPolicy="no-referrer"
                            />
                            <div className="text-left">
                              <h5 className="font-bold text-xs md:text-sm text-gray-800 line-clamp-1">{item.name}</h5>
                              <span className="text-[10px] text-gray-400 font-mono">{item.code} • {formatVND(item.price)}</span>
                            </div>
                          </div>

                          <div className="flex items-center space-x-3 shrink-0">
                            {/* Quantity controller */}
                            <div className="flex items-center border border-gray-300 rounded-lg bg-white">
                              <button 
                                onClick={() => onUpdateQuantity(item.id, Math.max(1, qty - 1))}
                                className="px-2 py-0.5 text-xs font-black text-gray-500 hover:bg-gray-100 rounded-l-lg"
                                type="button"
                              >
                                -
                              </button>
                              <span className="px-2 text-xs font-black text-gray-800 select-none min-w-5 text-center">{qty}</span>
                              <button 
                                onClick={() => onUpdateQuantity(item.id, qty + 1)}
                                className="px-2 py-0.5 text-xs font-black text-gray-500 hover:bg-gray-100 rounded-r-lg"
                                type="button"
                              >
                                +
                              </button>
                            </div>

                            {/* Delete button */}
                            <button
                              onClick={() => onRemoveFromCart(item.id)}
                              className="text-gray-400 hover:text-rose-600 p-1 rounded-md"
                              title="Xóa thiết bị"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Grand total prediction */}
                  <div className="flex justify-between items-center p-3 bg-emerald-50 rounded-xl border border-emerald-100 text-xs md:text-sm font-bold">
                    <span className="text-emerald-950 flex items-center gap-1">
                      <Info className="w-4 h-4 text-emerald-600 shrink-0" />
                      Tổng tạm tính (Chưa gồm chiết khấu):
                    </span>
                    <span className="text-emerald-800 font-black text-base">
                      {estimatedTotal === 0 ? 'Giá thương lượng sỉ' : formatVND(estimatedTotal)}
                    </span>
                  </div>
                </div>
              )}

              {/* Informative form blocks */}
              {cartProducts.length > 0 && (
                <form onSubmit={handleSubmit} className="space-y-4 pt-2 border-t border-gray-150">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Thông tin người nhận báo giá</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-600 block">Họ và tên bà con <span className="text-rose-500">*</span></label>
                      <input
                        type="text"
                        required
                        placeholder="Nguyễn Văn A"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full text-xs md:text-sm p-3 rounded-xl border border-gray-250 focus:outline-none focus:ring-2 focus:ring-[#008000] bg-gray-50/40"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-600 block">Số điện thoại chăn nuôi <span className="text-rose-500">*</span></label>
                      <input
                        type="tel"
                        required
                        placeholder="0913xxxxxx"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full text-xs md:text-sm p-3 rounded-xl border border-gray-250 focus:outline-none focus:ring-2 focus:ring-[#008000] bg-gray-50/40"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-600 block">Hòm thư Email (nếu có)</label>
                      <input
                        type="email"
                        placeholder="nhan_bao_gia@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full text-xs md:text-sm p-3 rounded-xl border border-gray-250 focus:outline-none focus:ring-2 focus:ring-[#008000] bg-gray-50/40"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-600 block">Địa chỉ giao nhận thiết bị (tỉnh/huyện)</label>
                      <input
                        type="text"
                        placeholder="Ví dụ: Châu Thành, Bến Tre"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="w-full text-xs md:text-sm p-3 rounded-xl border border-gray-250 focus:outline-none focus:ring-2 focus:ring-[#008000] bg-gray-50/40"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-600 block">Yêu cầu/ghi chú về quy cách gia công hoặc lắp đặt</label>
                    <textarea
                      rows={3}
                      placeholder="Ghi rõ kích cỡ chuồng, vật nuôi hoặc thời gian giao hàng mong muốn..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full text-xs md:text-sm p-3 rounded-xl border border-gray-250 focus:outline-none focus:ring-2 focus:ring-[#008000] bg-gray-50/40 resize-y"
                    ></textarea>
                  </div>

                  {/* Submission and warning */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3">
                    <span className="text-[11px] text-gray-400">
                      * Thiết bị chăn nuôi Hoàng Sài Gòn cam kết phản hồi báo giá sỉ lẻ sau 5-15 phút.
                    </span>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto bg-[#008000] hover:bg-emerald-800 text-white font-bold p-3 px-8 rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-md active:scale-95 leading-none uppercase text-xs md:text-sm shrink-0"
                    >
                      {isSubmitting ? (
                        <span>Đang xử lý nộp đơn...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Gửi bản yêu cầu báo giá</span>
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}
            </>
          )}

        </div>

      </div>
    </div>
  );
}
