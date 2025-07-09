import { HttpResponse } from '../helper/http-response';
import { noContent, ok } from '../utils/status-code';

export const getPlayerService = async ()=>{
  const data = {player: "cr7"}
  let response:HttpResponse;
  if(!data) {
    response = await ok(data);
  } else {
    response = await noContent();
  }
   
  return response
}