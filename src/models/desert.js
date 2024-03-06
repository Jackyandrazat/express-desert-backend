const dbPool = require ('../config/config')

const getAllDesert = async () => {
    const sqlQuery = 'SELECT * FROM deserts'
    return dbPool.execute(sqlQuery);
}
const createNewDesert = async (body) => {
    const sqlQuery = `INSERT INTO deserts (nama, stock, harga) 
                      VALUES (?,?,?)`;
    const values = [body.nama,body.stock,body.harga];
    
    return dbPool.execute(sqlQuery,values);
}





module.exports = {
    getAllDesert,
    createNewDesert,
}