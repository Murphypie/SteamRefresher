var db = require('../../models/sqlModels');

import {IRequest, IResponse, INext} from '../interface/vendors'


//https://github.com/GeekyAnts/express-typescript/blob/master/src/controllers/Auth/Register.ts

// class userController{
//     public static async register(req:IRequest, res: IResponse, next: INext):Promise<any>{
//         try{
//         const {email} = req.body.data;
//         let {password} = req.body.data; // to overwrite with hashed pw
//         const queryText = `INSERT INTO users (email, password) VALUES ($1, $2)`;
//         await db.query(queryText, [email, password])
//         return next();
//         }catch(err){
//             return next(err)
//         }
//     }
// }

const userController = {} as any;
// interface IUserController{
//     register?: Function
// }
//const userController:IUserController = {}

userController.register = async (req:IRequest, res: IResponse, next: INext):Promise<any>=>{
    try{
    const {email} = req.body.data;
    let {password} = req.body.data; // to overwrite with hashed pw
    const queryText = `INSERT INTO users (email, password) VALUES ($1, $2)`;
    await db.query(queryText, [email, password])
    return next();
    }catch(err){
        return next(err)
    }
}



export default userController;