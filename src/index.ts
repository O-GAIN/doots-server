import express from 'express'
const app = express()
require('dotenv').config()

const PORT = process.env.PORT_URL

app.get('/',(req,res)=>{
    res.send('working')
})
app.listen(PORT, ()=>{ console.log("app is working")})