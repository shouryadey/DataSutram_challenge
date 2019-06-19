const express=require('express');
const {home,requesttoken,requestid}=require('../controllers/post');
const {loginvalidator,signupvalidator}=require('../helper/index');
const router=express.Router();

router.get('/',home);

router.get('/user/login',loginvalidator,requesttoken);

router.get('/user/signup',signupvalidator,requestid);

module.exports=router;
