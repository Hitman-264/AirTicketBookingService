const express = require('express');

const {BoookingController, BookingController} = require('../../controllers/index');

const router = express.Router();

router.post('/bookings', BookingController.create);

module.exports=router;