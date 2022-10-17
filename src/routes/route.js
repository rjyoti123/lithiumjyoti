
const { Router } = require('express');
const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    console.log("The path params in the request are : ", req.params)
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})
// first part--------------------------------------------------------------------------------
router.get('/movie', function (req, res){
    console.log("list of movie", req.params );
    const listmovie = ['shiddat', 'khuda haffiz', 'student of the year', 'sita ramam']
    res.send(listmovie)
})


// second part -------------------------------------------------------------------------------

router.get("/movie/:index",function(req,res){
    console.log("list of movies", req.params);
    const listmovie = ['geetha govindam', 'arjun reddy', 'Lord of the rings', 'Batman begins'];
    const index =req.params.index;
    res.send(listmovie[index])
})


//third part -----------------------------------------------------------------------------------

router.get('/movies/:indexNumber',function(req,res){
    let movies=['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
           let myparam=req.params
        let index=myparam.indexNumber
        if(index>movies.length){
            res.send("please use a valid index")
        }else{
            res.send(movies[index])
        }
});


// fourth part ------------------------------------------------------------------------------------


router.get('/Films',function(req,res){
    let Films=[ {
        'id': 1,
        'name': 'The Shining'
       }, {
        'id': 2,
        'name': 'Incendies'
       }, {
        'id': 3,
        'name': 'Rang de Basanti'
       }, {
        'id': 4,
        'name': 'Finding Nemo'
       }]
       res.send(Films)
});


//fifth problem ------------------------------------------------------------

router.get('/Films/:filmid',function(req,res){
    let Films=[ {
        'id': 1,
        'name': 'The Shining'
       }, {
        'id': 2,
        'name': 'Incendies'
       }, {
        'id': 3,
        'name': 'Rang de Basanti'
       }, {
        'id': 4,
        'name': 'Finding Nemo'
       }]
       
    id=req.params.filmid
    if(id>Films.length){
        res.send("No such that film exist")
    }else{
      res.send(Films[id])
    }
  })
  module.exports = router; 