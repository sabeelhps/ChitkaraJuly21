const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');




// router.get('/fakeuser', async(req, res) => {
    
//     const user = new User({
//         username: 'sabeel',
//         email: 'sabeel@gmail.com'
//     });

//     const newUser = await User.register(user,'sabeel12')

//     res.send(newUser);
// })

// Get the signup form
router.get('/register', (req, res) => {
    res.render('auth/signup');
});


// register the new user in the db
router.post('/register', async(req, res) => {
    
    try {
        const { username, email, password } = req.body;

        const user = new User({
            username: username,
            email: email
        });
    
        await User.register(user, password);
    
        req.flash('success', `Welcome ${username},Please login to continue!`);
        res.redirect('/products');
    }
    catch (e) {
        req.flash('error', e.message);
        res.redirect('/register');
    }

});


// get the login page

router.get('/login', (req, res) => {
    res.render('auth/login');
});


router.post('/login',
    passport.authenticate('local',
        {
            failureRedirect: '/login',
            failureFlash: true
        }),
    (req, res) => {
        
        const { username } = req.user;
        req.flash('success', `Welcome Come Back ${username} Again!!`);
        res.redirect('/products');
    });


router.get('/logout', (req, res) => {
    
    req.logout();

    req.flash('success', 'Logout out Successfully!!!');
    res.redirect('/login');
})



module.exports = router;