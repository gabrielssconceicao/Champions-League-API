import express, { Request, Response } from 'express'

export function createApp() {

  const app = express()
  
  app.use(express.json())
  
  app.get('/',(req:Request,res:Response)=>{
    res.status(200).send({player: "backham"})
  })

  return app
}