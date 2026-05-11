const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Middleware ayarları
app.use(cors());
app.use(express.json());

// Bellek üzerinde veritabanı (Tüm doktorlar için örnek randevular eklendi)
let appointments = [
    // Dr. Ahmet Yılmaz Verileri
    { doctorName: "Dr. Ahmet Yılmaz", appointmentDate: "2026-04-01", status: "active" },
    { doctorName: "Dr. Ahmet Yılmaz", appointmentDate: "2026-04-05", status: "completed" },

    // Dr. Ayşe Demir Verileri
    { doctorName: "Dr. Ayşe Demir", appointmentDate: "2026-04-02", status: "active" },
    { doctorName: "Dr. Ayşe Demir", appointmentDate: "2026-04-12", status: "active" },

    // Dr. Mehmet Can Verileri
    { doctorName: "Dr. Mehmet Can", appointmentDate: "2026-04-03", status: "active" },
    { doctorName: "Dr. Mehmet Can", appointmentDate: "2026-04-15", status: "completed" }
];

// 1. TÜM RANDEVULARI GETİR (Paneldeki listeleme için)
app.get('/api/appointments', (req, res) => {
    res.json(appointments);
});

// 2. YENİ RANDEVU OLUŞTUR (Hasta Paneli için)
app.post('/api/appointments', (req, res) => {
    const { doctorName, appointmentDate } = req.body;
    if (!doctorName || !appointmentDate) {
        return res.status(400).json({ message: "Eksik bilgi!" });
    }
    const newApp = { doctorName, appointmentDate, status: 'active' };
    appointments.push(newApp);
    res.status(201).json(newApp);
});

// 3. RANDEVUYU TAMAMLA (Doktor Paneli "Evet" Butonu için)
app.post('/api/appointments/complete', (req, res) => {
    const { doctorName, appointmentDate } = req.body;
    
    // Randevuyu bul ve durumunu değiştir
    const appointment = appointments.find(a => 
        a.doctorName === doctorName && 
        a.appointmentDate === appointmentDate &&
        a.status !== 'completed'
    );
    
    if (appointment) {
        appointment.status = 'completed'; // Durumu güncelle
        res.status(200).json({ message: "Randevu başarıyla tamamlandı!" });
    } else {
        res.status(404).json({ message: "Randevu bulunamadı!" });
    }
});

// Sunucuyu başlat
app.listen(port, () => {
    console.log(`-----------------------------------------`);
    console.log(`🚀 MHRS Backend Sunucusu Yayında!`);
    console.log(`📍 Port: ${port}`);
    console.log(`👨‍⚕️ Doktorlar: Ahmet, Ayşe, Mehmet aktif.`);
    console.log(`-----------------------------------------`);
});