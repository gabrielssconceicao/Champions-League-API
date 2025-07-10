import * as HttpResponseHelper from '../helper/http-response';
import { HttpResponse } from '../model/http-response-model';
import { PlayerModel } from '../model/player-model';
import { StatisticModel } from '../model/statistic-model';
import * as PlayerRepository from '../repositories/players-repository';

export const getPlayerService = async ():Promise<HttpResponse>=>{
  const data =await PlayerRepository.findAllPlayers()
  let response:HttpResponse;
  if(data) {
    response = await HttpResponseHelper.ok(data);
  } else {
    response = await HttpResponseHelper.noContent();
  }
   
  return response
}

export const getPlayerByIdService = async (id:number):Promise<HttpResponse>=>{
  const data = await PlayerRepository.findPlayerById(id)
  let response:HttpResponse;
  if(data) {
    response = await HttpResponseHelper.ok(data);
  } else {
    response = await HttpResponseHelper.noContent();
  }
   
  return response
}

export const createPlayerService = async (player:PlayerModel):Promise<HttpResponse> =>{
  let response:HttpResponse;
  if (!Object.keys(player).length) { 
    response = await HttpResponseHelper.badRequest()
  }else {
    await PlayerRepository.insertPlayer(player);
    response = await HttpResponseHelper.created();
  };

  return response

}

export const deletePlayerService = async (id:number):Promise<HttpResponse>=>{
  let response = null;
  await PlayerRepository.deletePlayerById(id);
  response = await HttpResponseHelper.ok({message: 'Player deleted successfully'});
  return response
}

export const updatePlayerService = async (id: number, statistic: StatisticModel) => {
  const data = await PlayerRepository.updatePlayerById(id, statistic)
  let response:HttpResponse;
  if(Object.keys(data).length === 0) {
     response =await HttpResponseHelper.badRequest()
  } else {
    response = await HttpResponseHelper.ok(data)
  }
  return response
}