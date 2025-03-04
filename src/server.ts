import express, { Request, Response } from "express"

const app = express()

const port = process.env.PORT || 1234


app.get('/',(req:Request, res:Response)=>{
    res.json('hello')
})

app.listen(port, async ()=>{
    console.log(`server run on ${port}`)
})

