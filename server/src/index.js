
//importing express
const express=require('express')
//importing cors
const cors=require('cors')
//using express
const app = express()
//using cors
app.use(cors());
//using body-parser
app.use(express.json())
//importing connect from db
const connect=require('./db/connection')
connect()
//importing dotenv
require('dotenv').config()
//importing routes
const usersRouter=require('./routes/usersRoute')
//using routes
app.use(usersRouter)
//listening port
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
  })

