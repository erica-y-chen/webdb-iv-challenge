const router = require('express').Router();
const Recipes = require('./recipes-model.js')

router.get('/', (req, res)=> {
    Recipes.find()
        .then(dishes => {
            res.status(200).json(dishes)
        })
        .catch(error => {
            res.status(500).json({message: 'error retrieving dishes'});
        });
});

module.exports = router; 