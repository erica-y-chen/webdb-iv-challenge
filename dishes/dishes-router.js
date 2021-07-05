

const router = require('express').Router();
const Dishes = require('./dishes-model.js');


router.get('/', (req, res)=> {
    Dishes.find()
        .then(dishes => {
            res.status(200).json(dishes)
        })
        .catch(error => {
            res.status(500).json({message: 'error retrieving dishes'});
        });
});


router.get('/:id', (req, res)=> {
    dishId = req.params.id; 
    Dishes.findById(dishId)
        .then(dishes => {
            res.status(200).json(dishes)
        })
        .catch(error => {
            res.status(500).json({message: 'error retrieving dishes'});
        });
});


router.post('/dishes', async (req, res) => {
    const dish = req.body; 
    if(dish.name) {
        try {
            const inserted = await Dishes.addDish(dish);
            res.status(201).json(inserted);
        } catch(error) {
            res.status(500).json({ message: 'error adding dish to db'})
        }
    }
    else {
        res.status(500).json({message: 'please provide a name of the dish'})
    }
})

router.get('/recipes', (req, res)=> {
    db('recipes')
    .then(results=>{
        res.status(200).json(results);
    })
    .catch(err=>{
        res.status(500)
    })
})



module.exports = router; 