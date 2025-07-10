import { Request, Response } from 'express'
import * as PlayerService from '../services/player-services'
import { noContent } from '../helper/http-response'
import { StatisticModel } from '../model/statistic-model'

export const getPlayer = async (req:Request,res:Response)=>{
    const httpResponse = await PlayerService.getPlayerService()
    res.status(httpResponse.statusCode).json(httpResponse.body)
}


export const getPlayerById = async (req:Request,res:Response)=>{
  const id =parseInt(req.params.id);
  const httpResponse = await PlayerService.getPlayerByIdService(id)
  res.status(httpResponse.statusCode).json(httpResponse.body)
}


export const postPlayer = async (req:Request,res:Response)=>{
  const body = req.body; 
  const httpResponse = await PlayerService.createPlayerService(body) || await noContent();
  res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const deletePlayer = async (req:Request,res:Response)=>{
  const id =parseInt(req.params.id);
  const httpResponse = await PlayerService.deletePlayerService(id)
  res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const updatePlayer = async (req:Request,res:Response)=>{
  const id =parseInt(req.params.id);
  const body:StatisticModel = req.body; 
  const httpResponse = await PlayerService.updatePlayerService(id,body)
  res.status(httpResponse.statusCode).json(httpResponse.body)
}