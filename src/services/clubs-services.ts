import * as HttpResponseHelper from '../helper/http-response';
import * as ClubRepository from '../repositories/clubs-repository';
export const getClubsService = async ()=>{
  const data = await ClubRepository.getAllClubs();
  const response = await HttpResponseHelper.ok(data);
  return response 
}
