const Category = require('../models').Category;
const Yule = require('../models').Yule;

exports.list_category = (req, res, next) => {
    // next c'est l'etat
    // cherche dans la bdd toutes les entrées du model Category /asynchrone
    // SELECT * from Categorys
    Category.findAll({
        
    })//{}^ramètre vide
    .then( data =>{
        // je macth le resultat
        res.status(200).json(data);
    })
    // sinon error
    .catch(err => console.log(err))
    
}
exports.list_yule_by_category = (req, res, next) =>{
    Yule.findAll({
          includes:[
              {
                  model: Category,
                  attributes: ['id', 'name', 'description'],
                  where:{
                      id: req.params.id
                  }
              }
        ],
    })    
     .then(category => res.status(200).json(category))
    .catch(err => console.log(err))
    
  }

exports.add_category = (req, res, next) => {
    Category.create(req.body)
    .then( data =>{
        res.status(201).json({
            message: 'Category added',
            data: data   
    })
})
    .catch(err => console.log(err))

}
exports.detail_category =(req, res, next)=>{
    const id = req.params.id;
    Category.findByPk(id)
    .then(category => res.status(200).json(category))
    .catch(err => console.log(err))
}
exports.edit_category = (req, res, next) => {
    const id = req.params.id;
    const category = req.body;
    Category.update(category, {
      where: {
        id: id
      }
    })
      .then(() => {
        res.status(200).json({ message: 'Category updated' })
      })
      .catch(err => console.log(err))
  }
  exports.delete_category = (req, res, next) => {
    const id = req.params.id;
    Category.destroy({
      where: {
        id: id
      }
    })
      .then(category => res.status(200).json({ message: 'Category deleted' }))
      .catch(err => console.log(err))
  }