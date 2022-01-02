import { Router, Request, Response } from 'express';
let router:Router = Router();

import userController from "../controllers/userController";

router.post('/register', userController.register, (req, res)=>{
    res.send('Registered!')
})

export default router;

// import { Router, Request, Response } from 'express';
// const router: Router = Router();
// export const userRouter:Router = router;