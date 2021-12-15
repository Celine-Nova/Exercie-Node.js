const Yule = require('../models').Yule;
const Category = require('../models').Category;
const Ingredient = require('../models').Ingredient;
const {Op} = require('sequelize');

exports.list_yule = (req, res, next) => {
    // next c'est l'etat
    // cherche dans la bdd toutes les entrées du model Yule /asynchrone
    // SELECT * from yules
    Yule.findAll({
      attributes: ['id','name','description'],
      include:[
        {
          model: Category,
          attributes: ['id','name']
        },
        {
          model: Ingredient,
          attributes: ['id','name'],
          through: { attributes: []} 
        }
      ]
    })//{}paramètre vide
    .then( data =>{
        // je macth le resultat
        res.status(200).json(data);
    })
    // sinon error
    .catch(err => console.log(err))
    
}
exports.add_yule = (req, res, next) => {
  Category.findByPk(req.body.CategoryId)
  .then( data => {
    if(data){
      Yule.create(req.body)
      .then( yule => {
        if(req.body.ingredients && req.body.ingredients.length > 0){
        //setIngredients est une methode generee par sequelize set+Nom modele (pluriel)
          yule.setIngredients(req.body.ingredients)
          .then( ()=> {
            res.status(201).json({
              message: 'Yule created',
              data: yule
            })
          })
          .catch(err => console.log(err))
        }
        // No ingredient to add
        else{
          res.status(201).json({
            message: 'Yule created',
            data: yule
          })
        }

        })
      .catch(err => console.log(err))
      // })
      // .catch( () => res.status(500).end)
    }
    else{
      res.status(404).json({message: 'Category not available'})
    }
  })
  .catch( () => res.status(500).end )
}

exports.detail_yule =(req, res, next)=>{
    const id = req.params.id;
    Yule.findByPk(id)
    .then(yule => res.status(200).json(yule))
    .catch(err => console.log(err))
}
exports.edit_yule = (req, res, next) => {
    const id = req.params.id;
    const yule = req.body;
    Yule.update(yule, {
      where: {
        id: id
      }
    })
      .then(() => {
        res.status(200).json({ message: 'yule updated' })
      })
      .catch(err => console.log(err))
  }
  exports.delete_yule = (req, res, next) => {
    const id = req.params.id;
    Yule.destroy({
      where: {
        id: id
      }
    })
      .then(yule => res.status(200).json({ message: 'yule deleted' }))
      .catch(err => console.log(err))
  }

  exports.search_yule = (req, res, next) => {
    const search = `%${req.params.search}%`
    Yule.findAll({
      attributes: ['id','name','description'],
      include:[
        {
          model: Category,
          attributes: ['id','name']
        }
      ],
      where:[
        {
        name:{
          [Op.like]: search
        }
      }
      ]
    })//{}paramètre vide
    .then( data =>{
        // je macth le resultat
        res.status(200).json(data);
    })
    // sinon error
    .catch(err => console.log(err))
    
}