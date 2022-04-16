var express=require('express');
var router=express.Router();
var Contact=require('../models/model');

router.get('/contacts',(req,res)=>{
Contact.find(function(err,contacts){
    res.json(contacts);
})
})

router.post('/contact',(req,res,next)=>
{
        let newContact=new Contact({
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            phone:req.body.phone,
            salary:req.body.salary,
            doj:req.body.doj
        })
        newContact.save((err,result)=>
        {
            if(err){
                res.json({msg:"Failed adding record"});
            }
            else
            {
                res.json({msg:"record added successfully"});
            }
        })
})


router.delete('/contact/:id',(req,res)=>{
    Contact.remove({_id:req.params.id},function(err,result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    })

});


router.post('/updateContact',(req,res,next)=>
{
    console.log(req);
    try{       
        Contact.findByIdAndUpdate({_id:req.body._id},{$set:{        
                                            first_name:req.body.first_name,
                                            last_name:req.body.last_name,
                                            phone:req.body.phone
                                            }},function(err,result){
                                                 if(err){

                                                res.json(err);
                                            }
                                            else{
                                                res.json({msg:"Update successfully"});
                                            }
                                            }
                                            );       
        }
        catch(err){
console.log(err);
        }     
    });    

    router.get('/SearchData/:name',(req,res)=>{
        Contact.findOne({first_name:req.params.name},function(err,result){
            if(err){
                res.json({msg:"Error in finding record"})
            }
            else if(result==null){
                res.json({msg:"No such record found"})
            }
            else{
            res.json(result);
        }
        });
   
    });

router.post('/searchSalaryWise',(req,res,next)=>{
    console.log(req.body);
})
module.exports=router;