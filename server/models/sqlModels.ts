import pg from 'pg'
var path = require('path');
require('dotenv').config();
const types = pg.types
const connectionString = process.env.SQL
interface Callback{
  (err: null | Error, res?:pg.QueryResult):void|Error|pg.QueryResult
}

export default class PGPool{
  pool: pg.Pool;

  constructor(URI: pg.PoolConfig){
    this.pool = new pg.Pool(URI);

    this.pool.on('error', (err:Error, client:any)=>{
      console.log(`Idle-Client Error: \n${err.message} \n${err.stack}`)
    })
  }

  query(text:string, params:any[] = [], callback:Callback){
    return this.pool.query(text, params, callback)
  }
  

};



// const connectionString = process.env.PostGreSQL
// const idleTimeoutMillis = 2000;
// const pool = new pg.Pool({
//   connectionString,idleTimeoutMillis
// });



// module.exports = {
//     connect: async () =>{
//       return await pool.connect();
//     },
//     query: async (text:string, params:any, callback:()=>{}) => {
//       console.log('executed query', text);
      
//       return await pool.query(text, params, callback);
//     },
//     end: async () =>{
//         return await pool.end();
//     }
// };