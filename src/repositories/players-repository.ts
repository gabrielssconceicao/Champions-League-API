import { PlayerModel } from '../model/player-model';
import { StatisticModel } from '../model/statistic-model';
import { database } from './database';




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

export const deletePlayerById = async (id: number): Promise<void> => {
  const index= database.findIndex(player => player.id === id)

  if(index === -1) return
  database.splice(index, 1)
}

export const updatePlayerById = async (id: number, statistic: StatisticModel): Promise<PlayerModel> => {
  const playerIndex = database.findIndex(player => player.id === id)

  if(playerIndex !== -1) {
    database[playerIndex].statistics = statistic
  }
  return database[playerIndex] 
}