import express from 'express'
import cors from 'cors'
import router from './routes'

export function createApp() {

  const app = express()
  
  app.use(express.json())
  app.use(cors({
    origin: ['http://localhost:3000']
    ,methods: ['GET']
  }))
  app.use('/api',router)

  return app
}