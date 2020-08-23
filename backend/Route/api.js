const router=require('express').Router();
const user=require('../DB/schema');

//data add in db
router.post('/add-issue',(req,res)=>{
    const {title,description}=req.body;
    const newUser=new user({
        title, 
        description,
    });
    //this coming from react newUser
  newUser.save()
  .then(res=>res)
  .catch(err=>err);
});

//data read from db
router.get('/issues',(req,res)=>{
    user.find()
    .then(result=>res.json(result))
    .catch(err=>err);
});
module.exports=router;