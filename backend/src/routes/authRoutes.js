const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
    const { username, password, role } = req.body;
    if(username === 'admin' && password === '123') {
        res.json({ success: true, role });
    } else {
        res.status(401).json({ success: false, message: "Hatalı giriş" });
    }
});

module.exports = router;