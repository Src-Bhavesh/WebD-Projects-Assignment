const mobile = require("../models/model");

const mobileController ={
  home:(req,res)=>{
    res.render('home')
  },
  insert :(req,res)=>{
    res.render('form')
  },
  create :async (req,res)=>{
    await mobile.create(req.body);
    res.redirect('/display');
  },
  display:async(req,res)=>{
    const data = await mobile.find();
    res.render('show',{data})
  },
  delete:async(req,res)=>{
    await mobile.findByIdAndDelete(req.params.id);
    res.redirect('/display');
  },
  edit:async(req,res)=>{
    const data = await mobile.findById(req.params.id);
    res.render('edit',{data});
  },
  update:async(req,res)=>{
    await mobile.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.redirect('/display')
  },
  search:async(req,res)=>{
    const data = await mobile.find();
    const ans = await req.body.query;
    // res.render('result',{srh:ans , mobiles:data})
    res.render('result', { srh: ans, mobiles: data });
  }
}

module.exports = mobileController;