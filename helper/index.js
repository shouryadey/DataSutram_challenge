const moment=require('moment');
exports.signupvalidator=(req,res,next)=>{
	//console.log('signup');
	req.check('username','Enter proper username').isString().notEmpty();
	req.check('password','Enter proper password').isString().notEmpty();
	req.check('dateofbirth','Enter proper date of birth').notEmpty();
	req.check('name','Enter proper name').isString().notEmpty();
	const errors=req.validationErrors();
	var date=JSON.stringify(req.body.dateofbirth);
	if(errors)
	{
		const firstError=errors.map((error)=>error.msg)[0];
		res.status(400).json({error:firstError});
	}
	else if(!moment(date,'DD-MM-YYYY').isValid())
	{
		res.status(400).json({error:'Enter proper Date'});
	}
	else
	{
		next();
	}
};

exports.loginvalidator=(req,res,next)=>{
	//console.log('login');
	req.check('username','Enter proper username').isString().notEmpty();
	req.check('password','Enter proper password').isString().notEmpty();
	const errors=req.validationErrors();
	if(errors)
	{
		const firstError=errors.map(error=>(error.msg))[0];
		res.status(400).json({error:firstError});
	}else
	{
		next();
	}

};

