import { Request, Response } from 'express'
import { getPlayerService } from '../services/player-services'
import { ok } from '../utils/status-code';

export const getPlayer = async (req:Request,res:Response)=>{
    const httpResponse = await getPlayerService()

   

    res.status(httpResponse.statusCode).json(httpResponse.body)
  }