import React, { useState } from 'react'

// HoaVietTravel - Single-file React component (TailwindCSS required)

const TOURS = [
    {
        id: 'phuoctich',
        name: 'Làng cổ Phước Tích',
        shortPrice: '2.590.000 VND',
        prices: { group10_15: 1650000, group5_10: 1815000, group1_5: 1980000 },
        hero: '/mnt/data/làng cổ Phước Tích.jpg',  // ảnh bạn yêu cầu
        summary:
            'Phước Tích là làng cổ bên sông Hương với nhà cổ hàng trăm năm và các giá trị văn hoá được gìn giữ.',
        story:
            'Phước Tích là làng cổ nằm bên bờ sông Hương, nổi tiếng với kiến trúc nhà cổ hàng trăm năm tuổi và những giá trị văn hóa truyền thống còn lưu giữ. Dạo quanh làng, bạn sẽ thấy những ngôi nhà mái ngói rêu phong, con đường lát gạch đỏ, và nghe những câu chuyện lịch sử được người dân truyền lại qua nhiều thế hệ. Tour Phước Tích giúp du khách trải nghiệm nghề thủ công truyền thống, thưởng thức ẩm thực Huế đậm đà, và cảm nhận nhịp sống chậm rãi, thanh bình của làng quê xưa.',
        duration: '1 ngày 1 đêm',
        scheduleShort: [
            '7:00 – 7:30: Đón khách tại Vincom Huế',
            '8:30 – 11:30: Tham quan làng cổ và nhà cổ',
            '13:00 – 16:00: Workshop làm gốm',
        ],
    },
    {
        id: 'baola',
        name: 'Làng mây tre đan Bao La',
        shortPrice: '1.040.000 VND',
        prices: { group10_15: 430000, group5_10: 473000, group1_5: 516000 },
        hero: '/mnt/data/làng đan mây Bao La.jpg', // ảnh bạn yêu cầu
        summary:
            'Làng Bao La nổi tiếng với mây tre đan tinh xảo — tương tác với nghệ nhân, tự tay làm sản phẩm.',
        story:
            'Làng Bao La là điểm đến của những sản phẩm mây tre đan tinh xảo, từ giỏ, nón, đến đồ trang trí. Nghề mây tre đan đã được truyền lại từ nhiều thế hệ, nơi bàn tay khéo léo của người thợ biến những vật liệu giản dị thành tác phẩm nghệ thuật. Khi tham gia tour, du khách sẽ được trải nghiệm tự tay đan các sản phẩm, tìm hiểu kỹ thuật tạo hình, và cảm nhận sự kiên nhẫn, tỉ mỉ trong từng đường nét.',
        duration: '1 ngày',
        scheduleShort: [
            '7:00 – 7:30: Đón khách tại Vincom Huế',
            '8:30 – 11:30: Tham quan & workshop',
            '13:00 – 14:30: Workshop mây tre đan',
        ],
    },
    {
        id: 'lanhsinh',
        name: 'Làng Sình',
        shortPrice: '720.000 VND',
        prices: { group10_15: 410000, group5_10: 451000, group1_5: 492000 },
        hero: 'https://images.unsplash.com/photo-1601121149609-9f39af51edcd?auto=format&fit=crop&w=1200&q=80',
        summary:
            'Làng Sình nổi tiếng với tranh truyền thống; trải nghiệm vẽ tranh cùng nghệ nhân.',
        story:
            'Làng Sình nổi tiếng với nghề làm tranh truyền thống với kỹ thuật vẽ tinh xảo bằng các chất liệu tự nhiên. Du khách có thể trải nghiệm vẽ tranh và tìm hiểu quy trình chế tác.',
        duration: '1 ngày',
        scheduleShort: [
            '7:00 – 7:30: Đón khách tại Vincom Huế',
            '8:30 – 11:30: Xem quy trình làm tranh',
            '13:00 – 14:30: Workshop làm tranh',
        ],
    },
    {
        id: 'thanhtien',
        name: 'Làng hoa giấy Thanh Tiên',
        shortPrice: '840.000 VND',
        prices: { group10_15: 530000, group5_10: 583000, group1_5: 636000 },
        hero: '/mnt/data/lang-hoa-giay-thanh-tien-01.jpg', // vẫn giữ
        summary: 'Làng Thanh Tiên nổi tiếng với hoa giấy nhiều màu sắc.',
        story:
            'Làng hoa giấy Thanh Tiên nổi tiếng với nghệ thuật làm hoa giấy sống động như thật. Du khách được học cách làm hoa và tìm hiểu nét đẹp truyền thống.',
        duration: '1 ngày',
        scheduleShort: [
            '7:00 – 7:30: Đón khách tại Vincom Huế',
            '8:30 – 11:30: Tham quan & xem quy trình',
            '13:00 – 14:30: Workshop làm hoa giấy',
        ],
    },
]

const Palette = {
    brown: 'bg-[#6b4a2a]',
    brownText: 'text-[#4b2f1f]',
    lightYellow: 'bg-[#f8e9c9]',
    accentYellow: 'text-[#d7b96b]',
}

export default function HoaVietTravel() {
    const [selectedTour, setSelectedTour] = useState(null)
    const [showBooking, setShowBooking] = useState(false)
    const [bookingData, setBookingData] = useState({
        name: '',
        phone: '',
        email: '',
        tourId: '',
        date: '',
        pax: 1,
        payment: 'bank',
    })
    const [message, setMessage] = useState('')

    function openTour(tour) {
        setSelectedTour(tour)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    function openBooking(tour) {
        setBookingData({ ...bookingData, tourId: tour.id })
        setShowBooking(true)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    function handleBookingChange(e) {
        const { name, value } = e.target
        setBookingData((s) => ({ ...s, [name]: value }))
    }

    function submitBooking(e) {
        e.preventDefault()
        setMessage(`Đặt tour thành công! Chúng tôi sẽ liên hệ ${bookingData.name} sớm nhất.`)
        setShowBooking(false)
        setTimeout(() => setMessage(''), 7000)
    }

    return (
        <div className={`min-h-screen ${Palette.lightYellow} ${Palette.brownText} font-sans`}>

            {/* Header */}
            <header className={`${Palette.brown} text-white`}>
                <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-md bg-white flex items-center justify-center">
                            <span className="text-lg font-bold text-[#6b4a2a]">HV</span>
                        </div>
                        <div>
                            <div className="font-bold">Hoa Việt Travel</div>
                            <div className="text-xs italic text-[#f3e6d9]">Về làng – “Chạm truyền thống, giữ nét làng”</div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Banner */}
            <section className="max-w-6xl mx-auto p-6">
                <div className="rounded-2xl overflow-hidden shadow-md grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 flex flex-col justify-center">
                        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
                            Về làng — Chạm truyền thống, giữ nét làng
                        </h1>
                        <p className="mt-4 text-lg">
                            Trải nghiệm văn hoá – làm cùng – ăn cùng – sống cùng người dân ở các làng nghề miền Trung.
                        </p>
                    </div>

                    <div className="relative">
                        <img
                            src="/mnt/data/lang-hoa-giay-thanh-tien-01.jpg"  // ẢNH BANNER BẠN YÊU CẦU
                            alt="Banner làng nghề"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Tours */}
            <section id="tours-section" className="max-w-6xl mx-auto p-6">
                <h2 className="text-2xl font-bold mb-4">Khám phá 4 làng nghề đặc sắc</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {TOURS.map((t) => (
                        <article key={t.id} className="bg-white rounded-xl overflow-hidden shadow hover:shadow-md">
                            <img src={t.hero} alt={t.name} className="w-full h-40 object-cover" />
                            <div className="p-4">
                                <h3 className="font-semibold">{t.name}</h3>
                                <p className="text-sm mt-2">{t.summary}</p>
                                <div className="mt-4 flex items-center justify-between">
                                    <div className="text-sm font-bold">{t.shortPrice}</div>
                                    <div className="flex gap-2">
                                        <button onClick={() => openTour(t)} className="text-sm px-3 py-1 rounded bg-[#f3e6d9] border">Chi tiết</button>
                                        <button onClick={() => openBooking(t)} className="text-sm px-3 py-1 rounded font-semibold" style={{ backgroundColor: '#d7b96b' }}>
                                            Đặt tour
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* Selected tour */}
            {selectedTour && (
                <section className="max-w-6xl mx-auto p-6">
                    <div className="bg-white rounded-xl p-6 shadow">
                        <img src={selectedTour.hero} className="w-full h-64 object-cover rounded" />
                        <h3 className="text-2xl font-bold mt-4">{selectedTour.name}</h3>
                        <p className="mt-3">{selectedTour.story}</p>
                    </div>
                </section>
            )}

            {/* Booking */}
            {showBooking && (
                <section className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
                    <div className="bg-white rounded-lg max-w-xl w-full p-6 shadow-lg">
                        <h3 className="text-xl font-bold">Đặt tour</h3>
                        <form onSubmit={submitBooking} className="mt-4 grid gap-3">
                            <label className="text-sm">
                                Họ và tên
                                <input name="name" required value={bookingData.name} onChange={handleBookingChange} className="w-full mt-1 p-2 border rounded" />
                            </label>

                            <label className="text-sm">
                                SĐT
                                <input name="phone" required value={bookingData.phone} onChange={handleBookingChange} className="w-full mt-1 p-2 border rounded" />
                            </label>

                            <label className="text-sm">
                                Email
                                <input name="email" type="email" required value={bookingData.email} onChange={handleBookingChange} className="w-full mt-1 p-2 border rounded" />
                            </label>

                            <button type="submit" className="px-4 py-2 rounded font-semibold" style={{ backgroundColor: '#d7b96b' }}>Xác nhận</button>
                        </form>
                    </div>
                </section>
            )}

            {/* Messages */}
            {message && <div className="fixed bottom-6 right-6 bg-white p-4 rounded shadow">{message}</div>}
        </div>
    )
}
