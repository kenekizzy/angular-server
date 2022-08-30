const { Router } = require('express');

const router = Router();

const { Users } = require('../Models/User')


/* Creating a new user. */
router.route("/register")
.post((req, res) => {
    try{
        const newUser = new Users({
            Name : req.body.Name,
            email : req.body.email.toLowerCase(),
            gender : req.body.gender.toLowerCase(),
            number : parseInt(req.body.number)
        });
        Users.findOne({ email : newUser.email }, (err, foundUser) => {
            if(err) console.log(err);
            else {
                    if(!foundUser){
                        newUser.save();
                        res.json({
                            message : `Created User.`
                        })
                    }else if(foundUser.email === newUser.email){
                        res.json({
                            message : `This email already exists. Use another email.`
                        })
                    }
                }
        })   
    }catch(err){
        console.log(err);
    }

})

/* This is a route to get all the users. */
router.route("/users")
.get(async (req, res) => {
    try{
        const users = await Users.find();
        res.json(users)
    }catch(err) {
        console.log(err);
    }
})

module.exports = router;