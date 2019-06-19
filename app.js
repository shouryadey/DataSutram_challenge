const express=require('express');
const bdp=require('body-parser');
const routes=require('./routes/post');
const app=express();
const exp_val=require('express-validator');
app.use(bdp.json());
app.use(exp_val());
app.use('/',routes);

const PORT=process.env.PORT ||3030

app.listen(PORT,err=>{
	if(err)
		console.log("ERROR AT CONNECTING...");
	console.log(`CONNECTED TO PORT NO=${PORT}`);
})
