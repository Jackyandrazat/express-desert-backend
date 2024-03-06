const desertModels = require('../models/desert')


const getAllDeserts =  async (req, res) =>{
    try {
        const [data] = await desertModels.getAllDesert();
        res.json({
            message: 'GET All Desert Success',
            data: data
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            error: error.message
        });
    }
}

const createNewDeserts = async (req, res) => {
    const bodyPayload = req.body;
    
    try {
        await desertModels.createNewDesert(bodyPayload);
        res.status(201).json({
            message: 'Create New Desert Success',
            data: bodyPayload
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            error: error.message
        });
    }
}

module.exports = {
    getAllDeserts,
    createNewDeserts,

};