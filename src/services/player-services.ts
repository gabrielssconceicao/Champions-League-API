import { noContent, ok } from '../helper/http-response';
import { HttpResponse } from '../model/http-response-model';
import * as PlayerRepository from '../repositories/players-repository';

export const getPlayerService = async ()=>{
  const data =await PlayerRepository.findAllPlayers()
  let response:HttpResponse;
  if(data) {
    response = await ok(data);
  } else {
    response = await noContent();
  }
   
  return response
}