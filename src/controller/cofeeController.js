
// import axios from "axios";
const getCofee =  async (req, res) =>{
    try {
        const data=req.params.id.toLowerCase()
        
        if(data == "hot" ){
            const response = await fetch(`https://api.sampleapis.com/coffee/${data}`)
            const datas = await response.json()
            res.json({
                message: `GET Cofee ${data}`,
                data:datas
            });
        }
        if (data == "iced" ) {
            const response = await fetch(`https://api.sampleapis.com/coffee/${data}`)
            const datas = await response.json()
            res.json({
                message: `GET Cofee ${data}`,
                data:datas
            });
        } 
        return res.json({
            message: `${data} Not Found`
        });


        
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            error: error.message
        });
    }
}
const getAllCofee =  async (req, res) =>{
    try {
        const responseHot = await fetch("https://api.sampleapis.com/coffee/hot")
        const cofeeHot = await responseHot.json()
        const responseIce = await fetch("https://api.sampleapis.com/coffee/iced")
        const cofeeIce = await responseIce.json()
        res.json({
            message: 'GET All Cofee',
            data:{
                Hot:cofeeHot,
                Ice:cofeeIce,
            },
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            error: error.message
        });
    }
}

module.exports = {
    getCofee,
    getAllCofee,
};