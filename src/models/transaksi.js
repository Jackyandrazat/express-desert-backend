const dbPool = require("../config/config");

const createTransaksi = async (body) => {
  let connection;
  try {
    connection = await dbPool.getConnection();
    await connection.beginTransaction();

    const [desertRows] = await connection.execute(
      "SELECT stock FROM deserts WHERE id = ?",
      [body.id_desert]
    );

    const availableStock = desertRows[0].stock;
    const requestedQty = body.qty;
    if (availableStock < requestedQty) {
      throw new Error("Stok tidak mencukupi untuk melakukan transaksi.");
    }

    const sqlQuery = `
            INSERT INTO transaksis (id_desert, qty, total) 
            SELECT ?, ?, d.harga * ? AS total
            FROM deserts d
            WHERE d.id = ?
        `;
    const values = [body.id_desert, body.qty, body.qty, body.id_desert];
    await connection.execute(sqlQuery, values);

    await connection.execute(
      "UPDATE deserts SET stock = stock - ? WHERE id = ?",
      [requestedQty, body.id_desert]
    );

    await connection.commit();

    return "Transaksi berhasil";
  } catch (error) {
    if (connection) {
      await connection.rollback();
    }
    throw error;
  } finally {
    if (connection) {
      connection.release();
    }
  }
};

module.exports = {
  createTransaksi,
};
