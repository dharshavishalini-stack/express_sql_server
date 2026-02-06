import db from "../Db/db.js";
const table = "users";
class UserModel{
   static async createUser({name,email,password}){
     const sql=`INSERT INTO  ${table} (name,email,password)values(?,?,?)`

     const [result]= await db.execute(sql, [name,email,password])

     return result.insertId;
   }

  static async getAllUsersModel() {
    const sql = `SELECT * FROM ${table}`;
    const [row] = await db.execute(sql);
    return row;
  }
  static async updateUserPasswordModel(id, { password } ) {
    const sql = `UPDATE ${table} SET password = ? WHERE id = ?`;
    const [update] = await db.execute(sql, [password, id]);
    return update.affectedRows;
  }
  static async deleteUserModel(id) {
    const sql = `DELETE FROM ${table} WHERE id = ?`
    const [delte] = await db.execute(sql, [id])
    return delte.affectedRows;
  }
}
export default UserModel