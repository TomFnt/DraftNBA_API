const data = require("../DB/data");

const controller = {
    findAllPlayers : (req, res)=> {
        res.json({data});
    },

    findTeam: (req, res)=> {
        const team = req.params.team;

        const result = data.filter( player => player.equipe == team);

        // console.log(result);
        if (result.length == 0 ){
            res.json({message : "équipe introuvable "});

        }
        else{
            res.json({result});

        }
    },
    randomPlayer : (req, res) =>{
        const numMax =data.length;

        const number = getRandomInt(numMax);

        const result = data[number];
        res.json({result});

    }


}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
module.exports =  controller

