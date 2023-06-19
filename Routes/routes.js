
//instance de express
const express = require("express");
const router = express.Router();
const controller =require ("../Controllers/index")

router.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

//retourne la liste de tout les joueurs
router.get('/allPlayers', controller.findAllPlayers);

// cherche un joueur selon un param équipe
router.get('/findTeam/:team', controller.findTeam);

//retourne un joueur au hasard
router.get('/randomPlayer',controller.randomPlayer );



module.exports = router