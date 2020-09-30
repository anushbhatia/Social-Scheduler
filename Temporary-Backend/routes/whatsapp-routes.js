const express = require('express');
const whatsAppControllers = require('../controllers/whatsAppControllers');
const router = express.Router();

router.post('/whatsapp',whatsAppControllers.sendWhatsappMessage );


module.exports = router;