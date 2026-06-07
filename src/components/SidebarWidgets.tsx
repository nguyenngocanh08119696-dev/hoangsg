import { useState, FormEvent } from 'react';
import { Home, MessageCircle, Phone, ArrowUp, X, Send } from 'lucide-react';

interface SidebarWidgetsProps {
  onNavigateHome: () => void;
  onScrollToContact: () => void;
}

export default function SidebarWidgets({ onNavigateHome, onScrollToContact }: SidebarWidgetsProps) {
  const [showChatBox, setShowChatBox] = useState(false);
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'user' | 'bot'; text: string }>>([
    { sender: 'bot', text: 'Chào bà con! Thiết bị chăn nuôi Hoàng Sài Gòn có thể giúp gì cho cô bác hôm nay?' },
    { sender: 'bot', text: 'Bà con cần máng ăn cho heo, lồng kẽm nuôi gà hay bóng hồng ngoại sưởi ấm gấp ạ? Nhắn tin số lượng sđt bên dưới, chúng tôi tư vấn báo giá ngay lập tức!' }
  ]);
  const [inputVal, setInputVal] = useState('');

  const sendChatMessage = (e: FormEvent) => {
    e.preventDefault();
    if (inputVal.trim() === '') return;

    const userMsg = inputVal;
    setChatMessages((prev) => [...prev, { sender: 'user', text: userMsg }]);
    setInputVal('');

    // Simulate auto bot response for traditional Vietnamese farm consultation
    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: 'Dạ, Hoàng Sài Gòn đã nhận tin nhắn tư vấn của bà con. Nhân viên kỹ thuật của chúng tôi sẽ gọi điện lại trực tiếp qua SĐT của bà con trong vòng 5 phút hoặc kết nối Zalo 0913.777.352 để gửi ảnh mẫu máng inox báo giá nhé ạ!'
        }
      ]);
    }, 1000);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onNavigateHome();
  };

  return (
    <>
      {/* Fixed Sticky Left Sidebar container */}
      <aside 
        className="fixed left-3 bottom-24 md:top-1/3 md:bottom-auto flex flex-col space-y-3 z-50 font-sans cursor-pointer select-none"
        id="left-sticky-widgets"
      >
        {/* Widget 1: Trang chủ */}
        <button
          onClick={handleScrollToTop}
          className="bg-[#008000] hover:bg-emerald-800 text-white p-3 rounded-2xl shadow-xl transition-all duration-200 border-2 border-emerald-100 flex flex-col items-center justify-center w-12 h-12 md:w-14 md:h-14 group"
          title="Quay về Trang chủ"
          id="sticky-widget-home"
        >
          <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span className="text-[8px] md:text-[9px] font-bold uppercase mt-0.5 tracking-wider hidden md:block">Home</span>
        </button>

        {/* Widget 2: Zalo Chat */}
        <button
          onClick={() => setShowChatBox(!showChatBox)}
          className="bg-sky-500 hover:bg-sky-600 text-white p-3 rounded-2xl shadow-xl transition-all duration-200 border-2 border-sky-100 flex flex-col items-center justify-center w-12 h-12 md:w-14 md:h-14 group relative"
          title="Nhắn tin hỗ trợ Zalo"
          id="sticky-widget-zalo"
        >
          <span className="absolute -top-1 -right-1 bg-rose-500 h-2.5 w-2.5 rounded-full animate-ping"></span>
          <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span className="text-[8px] md:text-[9px] font-black uppercase mt-0.5 tracking-wider hidden md:block">Zalo Chat</span>
        </button>

        {/* Widget 3: Liên hệ */}
        <button
          onClick={onScrollToContact}
          className="bg-amber-400 hover:bg-amber-500 text-emerald-950 p-3 rounded-2xl shadow-xl transition-all duration-200 border-2 border-amber-100 flex flex-col items-center justify-center w-12 h-12 md:w-14 md:h-14 group"
          title="Cuộn nhanh đến Form Liên Hệ"
          id="sticky-widget-contact"
        >
          <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span className="text-[8px] md:text-[9px] font-bold uppercase mt-0.5 tracking-wider hidden md:block">Liên hệ</span>
        </button>

        {/* Widget 4: Cuộn lên đầu (chỉ ở mobile hỗ trợ tiện lợi) */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-gray-800 hover:bg-black text-white p-3 rounded-2xl shadow-md flex items-center justify-center w-10 h-10 md:hidden opacity-80"
          title="Lên đầu trang"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </aside>

      {/* Floating Zalo Chat box popup mockup */}
      {showChatBox && (
        <div 
          className="fixed bottom-6 left-16 md:bottom-20 md:left-20 bg-white w-[300px] md:w-[340px] rounded-2xl shadow-2xl z-50 border border-sky-100 overflow-hidden font-sans flex flex-col h-[380px] md:h-[420px] animate-[fadeIn_0.25s_ease-out]"
          id="zalo-chatbox-widget"
        >
          {/* Header */}
          <div className="bg-sky-500 text-white p-3 px-4 flex items-center justify-between shadow-xs">
            <div className="flex items-center space-x-2">
              <div className="bg-white text-sky-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm shadow-xs select-none">
                HSG
              </div>
              <div className="text-left">
                <h4 className="font-bold text-xs md:text-sm leading-tight">Hoàng Sài Gòn Zalo</h4>
                <p className="text-[10px] text-sky-100">Đang trực tuyến • 0913 777 352</p>
              </div>
            </div>
            <button 
              onClick={() => setShowChatBox(false)}
              className="text-white/80 hover:text-white hover:bg-sky-600 p-1 rounded-full transition-colors"
              title="Đóng chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages list body */}
          <div className="flex-1 p-3.5 space-y-3.5 overflow-y-auto bg-slate-50 text-xs">
            {chatMessages.map((msg, index) => (
              <div 
                key={index} 
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] p-2.5 rounded-2xl shadow-xs leading-relaxed text-left ${
                    msg.sender === 'user' 
                      ? 'bg-sky-500 text-white rounded-br-xs' 
                      : 'bg-white text-gray-800 rounded-bl-xs border border-gray-150'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Form input bottom bar */}
          <form onSubmit={sendChatMessage} className="p-2 bg-white border-t border-gray-150 flex items-center gap-1.5 shrink-0">
            <input
              type="text"
              placeholder="Nhập câu hỏi hoặc sđt mua hàng sỉ lẻ..."
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              className="flex-1 p-2 border border-gray-250 rounded-xl focus:outline-none focus:ring-1 focus:ring-sky-400 text-xs text-gray-800"
            />
            <button
              type="submit"
              className="bg-sky-500 hover:bg-sky-600 text-white p-2 rounded-xl transition-all duration-200"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

          {/* Direct call to Zalo app button */}
          <a
            href="https://zalo.me/0913777352"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-sky-600 text-white text-center py-1.5 text-[11px] font-black hover:bg-sky-700 block transition-colors select-none"
          >
            Nhấp kết nối Zalo.me trực tiếp (0913.777.352)
          </a>
        </div>
      )}
    </>
  );
}
