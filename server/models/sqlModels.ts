const pg = require('pg');
var path = require('path');

require('dotenv').config(path.resolve(__dirname, './../../.env'));

const connectionString = process.env.PostGreSQL
const idleTimeoutMillis = 2000;
const pool = new pg.Pool(
    {
       connectionString, idleTimeoutMillis 
    }
)

module.exports = {
    connect: async () =>{
      return await pool.connect();
    },
    query: async (text:string, params:any, callback:()=>{}) => {
      console.log('executed query', text);
      
      return await pool.query(text, params, callback);
    },
    end: async () =>{
        return await pool.end();
    }
  };