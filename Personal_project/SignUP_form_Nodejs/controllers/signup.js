
const jwt = require('jsonwebtoken');
exports.signupController = (req,res)=>{
const data ={
    fname:req.body.first_name,
    lname:req.body.last_name,
    email:req.body.email,
    password:req.body.pw,
    password:req.body.pw_confirm,
}
 
var token = jwt.sign({ data }, 'shhhhh');
console.log(token)

    res.send("Details added successFully")
}
exports.getSignPage=(req,res)=>{
    res.render("signup")
}
