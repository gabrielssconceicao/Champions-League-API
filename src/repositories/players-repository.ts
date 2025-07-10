import { PlayerModel } from '../model/player-model';
import { database } from '../services/database';




export const findAllPlayers = async (): Promise<PlayerModel[]> => {
  return database;
}

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
  return database.find(player => player.id === id);
}

export const insertPlayer = async (player: Omit<PlayerModel, 'id'>): Promise<void> => {
  const prev = [...database]
  database.push({ id: prev.length+1, ...player});
}