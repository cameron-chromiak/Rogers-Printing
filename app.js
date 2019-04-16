const express = require('express');
const bodyParser = require('body-parser');
const exhbs = require('express-handlebars')
const path = require('path');

const app = express()

app.engine('handlebars', exhbs({
  defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')


//Body Parser Middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//Static folder
app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) =>{
  res.render('index')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`App runnign on ${PORT} `))
