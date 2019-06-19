const jwt=require('jsonwebtoken');

exports.requesttoken=(req,res)=>{
	//console.log(req.body);
	const username=req.body.username;
	const password=req.body.password;
	token=jwt.sign({username,password},'secretkey');

	res.send({
		message:'token generated',
		"JWT token":token
	});
};
exports.requestid=(req,res)=>{
	//console.log(req.body);
	
	const username=req.body.username;
	const password=req.body.password;
	const dateofbirth=req.body.dateofbirth;
	const name=req.body.name;
	const uuidv1=require('uuid/v1')();
	//const uuidv1=Math.random().toString(36).substr(2, 9);
	res.send({
		message:'ID generated',
		ID:uuidv1
	});
	
};
exports.home=(req,res)=>{
	res.send('HOME');
}
