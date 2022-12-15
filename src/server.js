const express = require('express')
const { engine } = require('express-handlebars')
const myConnection = require('express-myconnection')
const session = require('express-session')
const bodyParser = require('body-parser')
const connection = require("./connection/connection")
const app = express()
const routes = require("./routes/routes.js")


app.use(session({ 
	secret: 'secreto',
	resave: true,
	saveUninitialized: true
})) 


app.set("view engine", "ejs")
app.set("views", "src/views/pages")

app.use(bodyParser.urlencoded({
	extended: true,
}))
 

app.use(express.static("src/assets"))
app.use(routes)




/*



/*
app.use(myConnection(mysql,{
database: 'curriculo',
username: '655e9zh3znzjbenp7zws',
host: 'us-east.connect.psdb.cloud',
password: 'pscale_pw_nuEr88Tm77DmBroICmezVfhNd62T5qI9WMechY7WN1d',
dialectOptions: {
    ssl: {
      required: false,
    },
  }, 
}))
*/
 
 
app.listen(7000, (req, res)=>{
	console.log('server run in port 8000')
})