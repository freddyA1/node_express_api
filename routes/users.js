import express from 'express';

const router = express.Router();

const user=[
   { firestName:"john",
    lastName:"Doe",
    age:25}
]

router.get('/',(req,res)=>{
    console.log(user)
    res.send(`hello world`);

});

export default router;