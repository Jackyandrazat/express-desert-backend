const transaksiModels = require('../models/transaksi')

const createNewTransaksi = async (req, res) => {
    const {body} = req;
    
    try {
        await transaksiModels.createTransaksi(body);
        res.status(201).json({
            message: 'Create New Desert Success',
            data: body
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            error: error.message
        });
    }
}

module.exports = {
    createNewTransaksi
}