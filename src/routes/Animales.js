const { Router } = require('express');
const router = Router();
const _ = require('underscore');

const Animales = require('../datas.json');

//GET
router.get('/', (req, res) => {
    res.send(Animales);
});

router.get('/:Par', (req, res) => {
    const { Par } = req.params;
    _.each(Animales,  (Animal, i) => {
        switch(Par){
            case Animal.Id:
                res.json(Animal);
                break;
            case Animal.Name: 
                res.json(Animal);
                break;
            case Animal.NameCien: 
                res.json(Animal);
                break;
            case Animal.Familia: 
                res.json(Animal);
                break;
            case Animal.Habitat: 
                res.json(Animal);
        }
    });
});


//POST
router.post('/', (req, res) => {
    const {Name, NameCien, Familia, Habitat} = req.body;
    if (Name && NameCien && Familia && Habitat){
        const id = Animales.length + 1;
        const newAnimal = {id, ...req.body};
        Animales.push(newAnimal);
        res.json(Animales);
    }else{
        res.send("Error: Debes ingresar todos los parametros");
    }
});

//PUT
router.put('/', (req, res) => {
    res.send("Error: No hay ningún parametro");
});

router.put('/:Par', (req, res) => {
    const { Par } = req.params;
    const {Name, NameCien, Familia, Habitat} = req.body;
    _.each(Animales,  (Animal, i) => {
        switch(Par){
            case Animal.Id:
                if(Name && NameCien && Familia && Habitat){
                    Animal.Name = Name;
                    Animal.NameCien = NameCien;
                    Animal.Familia = Familia;
                    Animal.Habitat = Habitat;
                }else{
                    res.send("Error: No se pudo modificar ningun dato");
                    res.json(Animales);
                }
                break;
            case Animal.Name: 
            case Animal.NameCien: 
            case Animal.Familia: 
            case Animal.Habitat: 
                res.send("Error: Debe ingresar un Id");
                res.json(Animales);
                break;
        }
    });
    res.json(Animales);
});

//DELETE
router.delete('/', (req, res) => {
    res.send("Error: No hay ningún parametro");
});

router.delete('/:Id', (req, res) => {
    const { Id } = req.params;
    _.each(Animales, (Animal, i) => {
        if(Animal.Id == Id){
            Animales.splice(i, 1);
        }
    });
    res.send(Animales);
});

module.exports = router;