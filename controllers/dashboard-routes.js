const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Project, Issue, Comment } = require('../models');
const { authUser } = require('../utils/auth');

///
router.get('/',  (req, res) => {
//     console.log(req.session);
//     console.log('==============');
//     Project.findAll({
//         where: {
//             user_id: req.session.user_id
//         },
//         //double check we have attributes right
//         attributes: [
//             'id',
//             'title',
//             'user_id',
//             'users_with_access',
//             'created_at'
//         ]

//     })
//     .then(dbUserData => res.json(dbUserData))
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });

    res.render('dashboard');
});

router.get("/login", (req, res) => {
    if (req.session.loggedIn) {
        res.redirect("/");
        return;
    }
  
    res.render("login");
});

router.get("/signup", (req, res) => {
    if (req.session.loggedIn) {
        res.redirect("/");
        return;
    }
  
    res.render("signup");
});

module.exports = router;
