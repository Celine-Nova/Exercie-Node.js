const express = require('express');
const app = express();
const router = express.Router();

const yuleRouter = require('./route/yule.route');
const categoryRouter = require('./route/category.route');
const ingredientRouter = require('./route/ingredient.route');

// dans express comprendre le JSON
app.use(express.json())
app.use('/yules', yuleRouter);
app.use('/categories', categoryRouter);
app.use('/ingredients', ingredientRouter);

// app.get('/',(req, res)=>{
//     res.send('Yo Tout le monde')
// })

app.listen(3000, ()=> {
    console.log('Server running');
})
module.exports = app;