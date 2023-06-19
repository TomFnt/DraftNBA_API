
//instance de express
const express = require("express");
const router = express.Router();
const controller =require ("../Controllers/index")

//retourne la liste de tout les joueurs
router.get('/allPlayers', controller.findAllPlayers);

// cherche un joueur selon un param équipe
router.get('/findTeam/:team', controller.findTeam);

//retourne un joueur au hasard
router.get('/randomPlayer',controller.randomPlayer );



module.exports = router