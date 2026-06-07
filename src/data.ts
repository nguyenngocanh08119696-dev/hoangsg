import { Product } from './types';

export const CATEGORIES = [
  { id: 'all', name: 'Tất cả sản phẩm' },
  { 
    id: 'pig', 
    name: 'Thiết bị cho heo',
    subCategories: ['Máng ăn heo', 'Núm uống nước']
  },
  { 
    id: 'poultry', 
    name: 'Thiết bị gia cầm',
    subCategories: ['Lồng gà', 'Máng ăn gà', 'Máng uống gà']
  },
  { 
    id: 'heating', 
    name: 'Hệ thống sưởi & chiếu sáng',
    subCategories: ['Đèn hồng ngoại', 'Chụp sưởi', 'Thiết bị chiếu sáng']
  },
  { 
    id: 'vet', 
    name: 'Dụng cụ thú y',
    subCategories: ['Xi lanh & Kim tiêm', 'Dụng cụ phối giống', 'Thiết bị đánh dấu']
  }
];

export const PRODUCTS: Product[] = [
  // --- THIẾT BỊ CHO HEO ---
  {
    id: 'heo-01',
    code: 'HSG-MH-01',
    name: 'Máng tập ăn cho heo con bằng inox 304',
    category: 'pig',
    subCategory: 'Máng ăn heo',
    price: 320000,
    image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&q=80&w=600', // heo con ăn
    description: 'Máng tập ăn inox 304 cao cấp chuyên dụng cho heo con tập ăn giai đoạn theo mẹ và sau cai sữa. Thiết kế hình tròn nhiều ngăn giúp nhiều heo con cùng ăn một lúc, chống vương vãi cám và giữ vệ sinh tuyệt đối.',
    specifications: {
      'Chất liệu': 'Inox 304 chống rỉ sét, dày 1.2mm',
      'Kích thước': 'Đường kính 30cm, Chiều cao 15cm',
      'Số ngăn ăn': '5 ngăn ngăn cách bằng thanh thép tròn',
      'Trọng lượng': '1.8 kg',
      'Xuất xứ': 'Việt Nam (Hoàng Sài Gòn sản xuất)'
    },
    features: [
      'Chất liệu inox bền bỉ, không bị ăn mòn bởi nước chua hoặc thức ăn của heo',
      'Thiết kế móc treo lò xo dưới đáy chắc chắn, dễ dàng gá cố định vào sàn pallet sàn chuồng heo',
      'Mép máng bo tròn mềm mại, bảo vệ heo con không bị xước mõm khi ăn',
      'Vệ sinh xịt rửa dễ dàng, hạn chế tối đa vi khuẩn tích tụ'
    ],
    inStock: true
  },
  {
    id: 'heo-02',
    code: 'HSG-MH-02',
    name: 'Máng lắc tự động nuôi heo thịt 50kg inox',
    category: 'pig',
    subCategory: 'Máng ăn heo',
    price: 1850000,
    image: 'https://images.unsplash.com/photo-1589182397057-b145e117bb9a?auto=format&fit=crop&q=80&w=600', // heo chuồng
    description: 'Máng ăn tự động dạng lắc (máng tự chảy) cao cấp dùng cho heo từ lúc cai sữa đến xuất chuồng. Giúp heo ăn tự do theo nhu cầu, kích thích tăng trọng nhanh, tiết kiệm tối đa nhân công cho trang trại dọn dẹp hoặc cho ăn tay.',
    specifications: {
      'Chất liệu': 'Thùng chứa nhựa PP chịu lực + Đế và cơ chế lắc inox 304',
      'Sức chứa': '50 kg cám viên',
      'Số lượng heo': 'Phù hợp cho ô chuồng từ 20 đến 30 con heo thịt',
      'Kích thước': 'Cao 95cm x Rộng đế 55cm',
      'Bảo hành': '12 tháng chính hãng'
    },
    features: [
      'Cơ chế lắc điều phối lượng cám rơi ra vừa đủ khi heo chạm mõm, chấm dứt tình trạng nghẹt cám hoặc trào cám ra ngoài',
      'Điều chỉnh được 8 cấp độ chảy của thức ăn phù hợp với từng giai đoạn tuổi của heo',
      'Đế máng inox đúc dập dày dặn, có vách ngăn giảm tranh giành thức ăn',
      'Giúp tiết kiệm đến 10% lượng cám rơi vãi so với máng ăn máng xây truyền thống'
    ],
    inStock: true
  },
  {
    id: 'heo-03',
    code: 'HSG-NU-01',
    name: 'Núm uống nước inox dày cho heo thịt (phi 21)',
    category: 'pig',
    subCategory: 'Núm uống nước',
    price: 35000,
    image: 'https://images.unsplash.com/photo-1628157582853-a796fa650a6a?auto=format&fit=crop&q=80&w=600', // inox / pig drinking
    description: 'Núm uống nước inox cao cấp thế hệ mới cho heo thịt, heo nái. Hệ thống lò xo đàn hồi cực tốt kết hợp cùng gioăng cao su silicon chống rỉ nước hiệu quả tuyệt đối. Heo chỉ cần ngậm và đẩy nhẹ chốt là nước chảy ra sạch sẽ.',
    specifications: {
      'Chất liệu': 'Inox 304 đúc nguyên khối chống mài mòn',
      'Đường kính ống': 'Ren nối phi 21 (1/2 inch) thông dụng',
      'Bộ phận bên trong': 'Lò xo thép không gỉ + Ti đồng + Gioăng cao su cao cấp',
      'Độ bền': 'Hơn 5 năm sử dụng liên tục'
    },
    features: [
      'Lực lò xo tính toán vừa vặn cho heo dễ dàng kích hoạt, không quá nặng cũng không quá nhạy gây tốn nước',
      'Đuôi núm có lưới lọc cặn cát giúp sạch nước và bảo vệ hệ thống gioăng đệm bên trong',
      'Thiết kế đầu vát mỏ vịt giúp heo ngậm sâu và ôm khít, hạn chế tràn nước ra sàn chuồng ẩm ướt'
    ],
    inStock: true
  },

  // --- THIẾT BỊ GIA CẦM ---
  {
    id: 'ga-01',
    code: 'HSG-LG-01',
    name: 'Lồng kẽm đẻ trứng công nghiệp (Lồng gà đẻ)',
    category: 'poultry',
    subCategory: 'Lồng gà',
    price: 245000,
    image: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&q=80&w=600', // lồng gà trứng nuôi trang trại
    description: 'Lồng nuôi gà đẻ trứng sắt mạ kẽm nguội hoặc mạ kẽm nhúng nóng chất lượng cao. Thiết kế tầng nghiêng tiêu chuẩn giúp trứng sau khi gà đẻ tự động lăn nhẹ ra khay hứng phía trước, ngăn chặn tối đa trứng bị dập vỡ hoặc bị gà mổ hư.',
    specifications: {
      'Chất liệu': 'Thép mạ kẽm độ bền mạ cao chống rỉ sét ăn mòn phân',
      'Kích thước lồng': 'Dài 120cm x Rộng 65cm x Cao trước 38cm/sau 33cm',
      'Công suất': 'Nuôi được 9 - 12 con gà đẻ (chia 3 ngăn tiện lợi)',
      'Độ dốc đáy': '9 độ (chuẩn lăn an toàn cho trứng)'
    },
    features: [
      'Khoảng cách nan nan lồng cực kỳ hợp lý: Đáy khít 1.5cm bảo vệ chân gà, nan vách thoáng mát',
      'Sợi kẽm dập cứng nguội dẻo dai giúp lồng chịu lực tốt, không móp méo khi gà đạp tải',
      'Dễ dọn dẹp vệ sinh, giảm thiểu bệnh cầu trùng, sán dây so với nuôi thả nền chuồng ẩm'
    ],
    inStock: true
  },
  {
    id: 'ga-02',
    code: 'HSG-MAG-01',
    name: 'Máng tập ăn chống bới cho gà con (50cm)',
    category: 'poultry',
    subCategory: 'Máng ăn gà',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&q=80&w=600', // gà con ăn máng vàng đỏ
    description: 'Máng tập ăn đáy dài bằng chất liệu nhựa dẻo PP màu sắc đỏ vàng bắt mắt, kích thích gà con tìm đến ăn nhanh hơn. Mặt máng có nắp lưới hình rãnh chia ngăn giúp ngăn chặn gà nhảy vào bới thóc làm rơi vãi cám.',
    specifications: {
      'Chất liệu': 'Nhựa nguyên sinh PP dẻo, bền nắng mưa, bo góc an toàn',
      'Kích thước': 'Dài 50cm x Rộng 12cm x Cao 8cm',
      'Màu sắc': 'Phần thân đỏ + Nắp lưới chia ngăn màu vàng',
      'Đối tượng': 'Gà, vịt con từ 1 đến 21 ngày tuổi'
    },
    features: [
      'Nhựa có độ đàn hồi cực tốt, giẫm lên không vỡ, không biến dạng dưới nhiệt độ đèn úm chăn nuôi',
      'Nắp đậy khớp nối chắc chắn có 16 rãnh chia ô ăn, chống hiện tượng gà tranh nhau chen lấn đè chết nhau',
      'Bề mặt trơn láng, không dính két cám ẩm, cọ rửa chỉ mất vài giây'
    ],
    inStock: true
  },
  {
    id: 'ga-03',
    code: 'HSG-MUG-01',
    name: 'Máng nước tự động dạng chuông Pelican cho gà thịt',
    category: 'poultry',
    subCategory: 'Máng uống gà',
    price: 180000,
    image: 'https://images.unsplash.com/photo-1569254994521-dd45f5a2a221?auto=format&fit=crop&q=80&w=600', // gà uống nước chuông treo đỏ
    description: 'Hệ thống máng uống nước tự động hình chuông Pelican chuyên dụng treo trần nhà dành cho trang trại nuôi gà thịt, gà thả vườn quy mô lớn. Tự động điều tiết giữ mực nước cố định trong rãnh chuông nhờ phao cân bằng trọng lực.',
    specifications: {
      'Chất liệu': 'Nhựa HDPE dẻo dày chịu va đập cực tốt',
      'Đường kính chuông': '38 cm',
      'Phát huy tối ưu': '1 máng đáp ứng đủ cho 80 - 100 con gà trưởng thành',
      'Trọn bộ gồm': 'Chuông uống + Van phao lò xo + Dây dẫn nước + Móc treo tăng giảm độ cao'
    },
    features: [
      'Gà uống nước sạch liên tục 24/24 mà không cần người chăn nuôi thay nước hoặc tiếp nước hàng ngày',
      'Van xả lò xo thông minh kiểm soát nước cực nhạy, chỉ xả khi khay vơi, không lo rò rỉ làm ướt đệm lót chuồng chăn nuôi',
      'Treo cao điều chỉnh theo cổ gà giúp gà uống tư thế thoải mái nhất và giữ nước luôn sạch khỏi phân rác'
    ],
    inStock: true
  },

  // --- HỆ THỐNG SƯỞI VÀ CHIẾU SÁNG ---
  {
    id: 'suoi-01',
    code: 'HSG-DHG-01',
    name: 'Bóng đèn hồng ngoại sưởi ấm chuyên dụng 175W',
    category: 'heating',
    subCategory: 'Đèn hồng ngoại',
    price: 85000,
    image: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&q=80&w=600', // ánh sáng sưởi hồng ngoại ấm áp
    description: 'Bóng đèn sưởi hồng ngoại Interheat (hoặc nhãn hiệu tương đương phân phối bởi Hoàng Sài Gòn) công suất 175W chống nổ cháy cực tốt ngay cả khi dính nước lạnh trực tiếp. Chuyên dùng để úm heo con mới sinh, úm tôm, gà con vượt đông.',
    specifications: {
      'Công suất': '175 Watt (Hỗ trợ núm xoay điều chỉnh nhiệt độ nếu dùng ballast)',
      'Đuôi đèn': 'Đuôi đồng ren xoáy E27 tiêu chuẩn',
      'Tuổi thọ chiếu sáng': 'Lên tới 6000 giờ thắp liên tục',
      'Đặc tính vật lý': 'Thủy tinh cứng chịu nhiệt, phủ lớp niken tăng tia hồng ngoại'
    },
    features: [
      'Tập trung nhiệt bức xạ hồng ngoại gấp đôi bóng úm thường, giúp giữ ấm sâu mô tế bào heo con, lưu thông máu tốt',
      'Khả năng chống va đập và chống nổ do nước bắn (vấn đề thường gặp khi vệ sinh chuồng có bóng đang bật) an toàn tuyệt đối',
      'Kích thích gà heo ăn nhiều, ngủ ngoan, giảm tỷ lệ tiêu chảy do lạnh bụng đáng kể ở vật nuôi sơ sinh'
    ],
    inStock: true
  },
  {
    id: 'suoi-02',
    code: 'HSG-CS-02',
    name: 'Chụp sưởi úm ga tự động cho gia súc gia cầm lớn',
    category: 'heating',
    subCategory: 'Chụp sưởi',
    price: 1850000,
    image: 'https://images.unsplash.com/photo-1473163928189-364b2c4e1135?auto=format&fit=crop&q=80&w=600', // sưởi gas công nghiệp hoặc thiết bị nhiệt farm
    description: 'Chụp sưởi ấm sử dụng nhiên liệu Gas hóa lỏng hóa nhiệt tự động thông minh. Thiết bị tỏa nhiệt hồng ngoại bán kính rộng lớn, hiệu suất nhiệt lượng cực cao dành cho các trang trại nuôi gia cầm tập trung diện tích rộng, tiết kiệm điện năng tối đa.',
    specifications: {
      'Chất liệu': 'Thép không gỉ + Tấm tản nhiệt gốm ceramic chịu nhiệt cao',
      'Công suất nhiệt': 'Lên đến 12.000 BTU',
      'Phạm vi sưởi ấm': 'Bán kính tản nhiệt 3.5 - 4.5 mét (Ủ ấm 800 - 1500 gà úm)',
      'Hệ thống an toàn': 'Tự ngắt kết nối gas an toàn khi tắt lửa đột ngột'
    },
    features: [
      'Đốt cháy hoàn toàn không sinh khí độc hại CO bảo vệ đường hô hấp còn non nớt của gà con, heo con',
      'Sử dụng gốm tản nhiệt hồng ngoại có bước sóng tối ưu giúp duy trì nhiệt độ ổn định sâu rộng, tiết kiệm tới 30% lượng gas so với đầu sưởi gas thường',
      'Bộ điều chỉnh nhiệt độ linh hoạt dễ vận hành thắp lò sưởi'
    ],
    inStock: false // Liên hệ dặt hàng trước
  },

  // --- DỤNG CỤ THÚ Y ---
  {
    id: 'vet-01',
    code: 'HSG-XL-01',
    name: 'Xi lanh tự động tiêm vắc xin cho gia súc Ardes 2ml',
    category: 'vet',
    subCategory: 'Xi lanh & Kim tiêm',
    price: 480000,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600', // dụng cụ y tế thú y tiêm ngừa syringe
    description: 'Xi lanh tự động nạp thuốc nhập khẩu từ hãng Ardes chuyên dùng chích ngừa liều liên tục từ 0.1ml đến 2.0ml. Thiết kế thân máy bằng nhựa chịu lực polyme dẻo dai cao cấp không nứt rạn khi rơi tì sáp, pittong thép không rỉ chia vạch vô cùng chính xác.',
    specifications: {
      'Chất liệu': 'Thân nhựa dẻo chịu nhiệt cao + Các chi tiết thép không rỉ',
      'Phạm vi chia liều': 'Điều chỉnh liều tiêm cực mịn từ 0.1ml - 2.0ml (Sai số < 1%)',
      'Phụ kiện tặng kèm': 'Dây dẫn thuốc + Kim lấy thuốc kim dài + Gioăng dự phòng + Dầu bôi trơn',
      'Trọng lượng máy': '250 gram nhẹ tay đỡ mỏi'
    },
    features: [
      'Tự động hút thuốc vào xi lanh sau mỗi lần bóp tay tiêm, tối đa tốc độ tiêm chủng hàng ngàn con gà heo trong buổi sáng',
      'Ống đong thuốc trong suốt dễ quan sát bọt khí để xả đảm bảo tiêm đúng liều đủ lượng',
      'Có núm vặn khóa liều chống xê dịch liều lượng khi thao tác đè vật nuôi'
    ],
    inStock: true
  },
  {
    id: 'vet-02',
    code: 'HSG-PT-01',
    name: 'Que phối tinh heo nái đầu bọt biển xốp xịn',
    category: 'vet',
    subCategory: 'Dụng cụ phối giống',
    price: 12000,
    image: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&q=80&w=600', // chuồng trại khoa học phối giống
    description: 'Sản phẩm que phối tinh nhân tạo cho heo nái hậu bị, nái rạ đầu bọt biển tạo bọt êm ái chống xước niêm mạc tử cung heo nái. Có khóa nắp bịt đuôi tránh trào chảy tinh dịch ra ngoài trong suốt ca phối giống.',
    specifications: {
      'Chất liệu': 'Thân que nhựa PP y tế dẻo đàn hồi + Đầu bọt bọc mút xốp mịn sinh học',
      'Kích thước': 'Dài 48cm',
      'Quy cách đóng gói': 'Mỗi que ép túi vô trùng hút chân không riêng biệt siêu sạch',
      'Ứng dụng': 'Phối giống thụ tinh nhân tạo heo nái'
    },
    features: [
      'Đầu mút xốp bọt biển thiết kế phình rộng khớp cổ tử cung heo nái giúp bám giữ tự nhiên, bơm tinh êm và hạn chế trào ngược',
      'Chất liệu nhựa dẻo y tế không kích ứng không chứa chất độc hại gây chết tinh trùng heo',
      'Đuôi que thiết kế chuẩn cắm túi tinh hoặc xy lanh phối tinh chắc khít'
    ],
    inStock: true
  }
];

export const INTRO_TXT = {
  title: 'Thiết Bị Chăn Nuôi Hoàng Sài Gòn - Chuyên Nghiệp & Uy Tín Hàng Đầu',
  subtitle: 'Đồng hành cùng nhà nông Việt Nam phát triển trang trại thông minh bứt phá doanh số',
  content1: 'Được thành lập từ năm 2012 tại trung tâm nông nghiệp miền Nam, Cơ sở Thiết bị Chăn nuôi Hoàng Sài Gòn tự hào là đơn vị tiên phong chuyên sản xuất, nhập khẩu và phân phối trực tiếp các hệ thống trang thiết bị chăn nuôi chuồng cọp tiêu chuẩn công nghiệp cho heo, bò, gà, vịt tại khắp các tỉnh thành trên toàn quốc.',
  content2: 'Với phương châm "Chất lượng là vàng - Khách hàng là ân nhân", tất cả các dòng sản phẩm máng ăn tự động inox, núm uống nước chống rỉ, lồng chuồng nuôi gà đẻ mạ kẽm hay thiết bị sưởi ấm hồng ngoại của Hoàng Sài Gòn đều trải qua quy trình kiểm tra chất lượng thực tế khắt khe chính xác tại các nông trại hợp tác thử nghiệm của chúng tôi trước khi bàn giao tới tay quý bà con.',
  stats: [
    { value: '12+', name: "Năm kinh nghiệm" },
    { value: '10,000+', name: "Bà con nông dân tin dùng" },
    { value: '200+', name: "Đại lý phân phối toàn quốc" },
    { value: '100%', name: "Sản phẩm bảo hành uy tín" }
  ]
};
