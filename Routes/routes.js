
//instance de express
const express = require("express");
const router = express.Router();
const data = require("../DB/data")

//retourne la liste de tout les joueurs
router.get('/allPlayers', function(req, res) {
    res.json({data});
});

// cherche un joueur selon un param équipe
router.get('/findTeam/:team', function(req, res) {
   const team = req.params.team;

    const result = data.filter( player => player.equipe == team);

   // console.log(result);
    if (result.length == 0 ){
        res.json({message : "équipe introuvable "});

    }
    else{
        res.json({result});

    }
});

module.exports = router