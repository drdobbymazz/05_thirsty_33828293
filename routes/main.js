// Create a new router
const express = require("express");
const router = express.Router();
var shopData = {
    shopName: "Splash Out",
    productCategories: ["Beer", "Wine", "Soft Drinks", "Hot Drinks"],
    shopLocations: [
        {
            name: "City Center Branch",
            manager: "John Smith",
            address: "123 High Street, Leeds, LS1 1AB"
        },
        {
            name: "University Branch",
            manager: "Sarah Johnson",
            address: "45 University Road, Leeds, LS2 9JT"
        },
        {
            name: "Shopping Mall Branch",
            manager: "Mike Wilson",
            address: "Unit 15, Leeds Mall, Crown Point, LS10 1ET"
        },
        {
            name: "Railway Station Branch",
            manager: "Emma Brown",
            address: "Platform 1, Leeds Station, New Station St, LS1 4DY"
        }
    ]
};

// Handle the main routes
router.get('/',function(req,res){
    res.render('index.ejs', shopData)
 });


router.get('/about',function(req,res){
    res.render('about.ejs', shopData)
 });

   //search routes
router.get('/search',function(req,res){
    res.render('search.ejs', shopData)
 });
 
 router.get('/search_result', function (req, res) {
    res.send("You searched for " + req.query.search_text + " in " + req.query.category);
 });
  
    //register routes
 router.get("/register", (req,res) => {
    res.render("register.ejs",  shopData); 
}); 
 
router.post("/registered", (req,res) => { 
  res.send(' Hello '+ req.body.first + ' '+ req.body.last +' you are now registered!. We will send an email to you at '+req.body.email);    
}); 

// Survey routes
router.get("/survey", (req,res) => {
    res.render("survey.ejs", shopData);
});

router.post("/survey_result", (req,res) => {
    const surveyData = {
        ...shopData,
        survey: req.body
    };
    res.render("survey_result.ejs", surveyData);
});

// Export the router object so index.js can access it
module.exports = router;
