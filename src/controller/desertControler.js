const desertModels = require('../models/desert')


const getAllMenu =  async (req, res) =>{
    try {
        const responseHot = await fetch("https://api.sampleapis.com/coffee/hot")
        const cofeeHot = await responseHot.json()
        const responseIce = await fetch("https://api.sampleapis.com/coffee/iced")
        const cofeeIce = await responseIce.json()
        const [data] = await desertModels.getAllDesert();
        res.json({
            message: 'GET All Menu',
            data: {
                dessert:data,
                cofee_hot:cofeeHot,
                cofee_ice:cofeeIce,
            }
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            error: error.message
        });
    }
}
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

const updateDesert = async (req, res) => {
    const {id} = req.params;
    const {body} = req;

    try {
        await desertModels.updateDesert(body, id);
        res.json({
            message: 'Update Pokemon Success',
            data:{
                id: id,
                ...body //spread operator
            }
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            error: error.message
        });
    }    

}

const deleteDesert = async (req, res) => {
    const { id } = req.params;
    try {
        await desertModels.d(id);
        res.json({
            message: 'Delete Pokemon Success',
            data: data
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            error: error.message
        });
    }
}

module.exports = {
    getAllMenu,
    getAllDeserts,
    createNewDesert,
    updateDesert,

};