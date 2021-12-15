const Ingredient = require('../models').Ingredient;
const Category = require('../models').Category;
const Yule = require('../models').Yule;

exports.list_ingredient = (req, res, next) => {
    // next c'est l'etat
    // cherche dans la bdd toutes les entrées du model ingredient /asynchrone
    // SELECT * from ingredients
    Ingredient.findAll({
      attributes: ['id','name'],
      include:[
        {
          model: Yule,
          attributes: ['id','name'],
          through: { attributes: []}
        },]
    })//{}^ramètre vide
  
    .then( data =>{
        // je macth le resultat
        res.status(200).json(data);
    })
    // sinon error
    .catch(err => console.log(err))
    
}

exports.add_ingredient = (req, res, next) => {
      Ingredient.create(req.body)
      .then( (ingredient =>{
        if(req.body.yules && req.body.yules.length > 0){
              //setYules est une methode generee par sequelize set+Nom modele (pluriel)
          ingredient.setYules(req.body.yules)
          .then( ()=> {
            res.status(201).json({
                message: 'Ingredient added',
                data: ingredient 
            })
          })
          .catch(err => console.log(err))
          // No Yule to add
        }else{
          res.status(201).json({
            message: 'Ingredient created',
            data: ingredient
          })
        } 
      }))
    .catch(err => console.log(err))

}
exports.detail_ingredient = (req, res, next) => {
  Ingredient.findByPk(req.params.id,{
    // attributes: ['id','name'],
  })
  .then( data => {
    res.status(200).json({
      message: 'Ingredient detail',
      data: data
    })
  })
  .catch(err => console.log(err))
}


exports.edit_ingredient = (req, res, next) => {
    const id = req.params.id;
    const ingredient = req.body;
    Ingredient.update(ingredient, {
      where: {
        id: id
      }
    })
      .then(() => {
        res.status(200).json({ message: 'Ingredient updated' })
      })
      .catch(err => console.log(err))
  }
  exports.delete_ingredient = (req, res, next) => {
    const id = req.params.id;
    Ingredient.destroy({
      where: {
        id: id
      }
    })
      .then(ingredient => res.status(200).json({ message: 'Ingredient deleted' }))
      .catch(err => console.log(err))
  }