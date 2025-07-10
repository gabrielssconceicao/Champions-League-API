import * as HttpResponseHelper from '../helper/http-response';
import { HttpResponse } from '../model/http-response-model';
import { PlayerModel } from '../model/player-model';
import * as PlayerRepository from '../repositories/players-repository';

export const getPlayerService = async ()=>{
  const data =await PlayerRepository.findAllPlayers()
  let response:HttpResponse;
  if(data) {
    response = await HttpResponseHelper.ok(data);
  } else {
    response = await HttpResponseHelper.noContent();
  }
   
  return response
}

export const getPlayerByIdService = async (id:number)=>{
  const data = await PlayerRepository.findPlayerById(id)
  let response:HttpResponse;
  if(data) {
    response = await HttpResponseHelper.ok(data);
  } else {
    response = await HttpResponseHelper.noContent();
  }
   
  return response
}

export const createPlayerService = async (player:PlayerModel) =>{
  let response:HttpResponse;
  if (!Object.keys(player).length) { 
    response = await HttpResponseHelper.badRequest()
  }else {
    await PlayerRepository.insertPlayer(player);
    response = await HttpResponseHelper.created();
  };

  return response


}