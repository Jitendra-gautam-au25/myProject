const rexpress = require('express')
const {signupController,getSignPage} = require('../controllers/signup')
const {check,validationResult} = require('express-validator')

const router = rexpress.Router()

router.get("/",getSignPage)
router.post('/',[
    check('first_name')
        .isLength({min:5})
        .withMessage("name length should not be less thean 5"),
        check('last_name')
        .isLength({min:5})
        .withMessage("name length should not be less thean 5"),
     check("email")   
        .isEmail()
        .withMessage("Email is not incorect format"),
     check("pw")
        .isLength({min :8})
        .withMessage("your password should  not be less than 8 chars")
        .matches(/\d/)
        .withMessage("password should have atleast one number")
        .matches(/[@#]/)
        .withMessage("it should conatin one special charcter"),
     check("pw_confirm").custom((value,{req})=>{
         if(value !==req.body.password){
             throw new Error("Password does not match")
         }
         return true

     })   


]), (req,res ,next)=>{
    const error =validationResult(req).formatWith(({msg})=>msg)
    const hasError  = !error.isEmpty();

    if(hasError){
        res.json({
            error:error.array()
        })
    }
    else{
        next()
    }
    
}, signupController
module.exports=router


