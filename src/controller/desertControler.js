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

const createNewDesert = async (req, res) => {
    const {body} = req;
    
    try {
        await desertModels.createNewDesert(body);
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
    getAllDeserts,
    createNewDesert,

};