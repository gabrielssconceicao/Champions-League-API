import { PlayerModel } from '../model/player-model';
import { database } from '../services/database';




export const findAllPlayers = async (): Promise<PlayerModel[]> => {
  return database;
}

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
  return database.find(player => player.id === id);
}