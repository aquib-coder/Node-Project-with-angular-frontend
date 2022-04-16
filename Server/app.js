var mongoose=require('mongoose');
var cors=require('cors');
var bodyparser=require('body-parser');
var express=require('express');
var path=require('path');
var routes=require('./routes/route');
var app=express();


mongoose.connect('mongodb://localhost:27017/contactDetails');
mongoose.connection.on('connected',()=>{
    console.log('Server connected successfully');
});
mongoose.connection.on('error',(err)=>{
    console.log('Server failed due to '+err)
});

const port=3000;

app.use(cors());//cors
app.use(bodyparser.json());//body parser
app.use(express.static(path.join(__dirname,'public')));//configuring static files
app.use('/api',routes);

app.listen(port,()=>{ 
    console.log('Server running successfully');
})