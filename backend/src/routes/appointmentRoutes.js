const express = require('express');
const router = express.Router();

let appointments = []; // Geçici bellek

router.post('/add', (req, res) => {
    appointments.push(req.body);
    res.json({ success: true });
});

router.get('/list', (req, res) => {
    res.json(appointments);
});

module.exports = router;