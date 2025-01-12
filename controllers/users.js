const User = require("../models/user");  //This line imports the User model from the models/users.js file.


module . exports.renderSignupForm =  (req, res) => {
    res.render("users/signup.ejs");
};

module . exports.signup = async (req, res) => {
    try{
        let { username, email, password } = req.body;
        const newUser = new User({ email, username });
        const registeredUser = await User.register(newUser, password);
        console.log(registeredUser); // For debugging: check if user is registered correctly
        req.login(registeredUser, (err) =>{
            if(err){
                return next(err);
            }
            req.flash("success", "Welcome to Wanderlust!");
            res.redirect("/listings"); // req.session.redirectUrl will delete so we have implement this

        });


    } catch(e){
        req.flash("error",e.message);
        res.redirect("/signup")
    }
   
};

module . exports.renderLoginForm =  (req,res)=>{
    res.render("users/login.ejs")
};


module . exports. login = async(req,res) =>{
    req.flash("success","welcome back to wanderlust ! You are logged in!");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);

};

module . exports.logout = (req,res,next)=>{
    req.logout((err) =>{
        if(err){
            return next(err);
        }
        req.flash("success", "you are logged out!");
        res.redirect("/listings");
    })

};