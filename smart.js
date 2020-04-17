const express=require("express");
const hbs=require('hbs');
 var app=express();
 
 app.use(express.static(__dirname+'/public'));
 app.set('view engines','hbs');
 const port=process.env.PORT||2000;
 hbs.registerPartials(__dirname+'/views/partials');
 
 
 hbs.registerHelper('getCurrentYear',()=>{
     return new Date().getFullYear()
 })
 app.get('/',(req,res)=>{
     res.render('Home_page.hbs',{
         pageTitle:'TECHIE'
         



     });


 });
 
 app.get('/About_Page',(req,res)=>
	{
		res.render("about_page.hbs",{
         
            pageTitle:'About Us'


		});
	});
app.get('/Contact_Us',(req,res)=>
{
    res.render("contact_us.hbs",{
    
        pageTitle:'Contact Us'
        

    });
});
app.get('/Reach_Us',(req,res)=>
{
    res.render("reach_us.hbs",{
        
        pageTitle:'Reach Us'
        
        

    });
});

app.listen(port,()=>{

    console.log(`sever running successfully in port no:-${port}`);
});