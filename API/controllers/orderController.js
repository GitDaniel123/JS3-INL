const router = require('express').Router();
const orderModel = require('../models/orders/orderModel');

router.post('/', orderModel.createOrder);
router.get('/:email', orderModel.getOrders);

module.exports = router;