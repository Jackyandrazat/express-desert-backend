const dbPool = require ('../config/config')

const getAllDesert = async () => {
    const sqlQuery = 'SELECT * FROM deserts'
    return dbPool.execute(sqlQuery);
}
const createNewDesert = async (bodyPayload) => {
    const sqlQuery = `INSERT INTO deserts (nama_desert, stock, harga) 
                      VALUES (?, ?, ?)`;
    const values = [bodyPayload.nama_desert, bodyPayload.stock, bodyPayload.harga];
    
    return dbPool.execute(sqlQuery, values);
}




module.exports = {
    getAllDesert,
    createNewDesert,
}