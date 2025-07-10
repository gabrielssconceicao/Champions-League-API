import { ClubModel } from '../model/club-model';

const database: ClubModel[] = [
  {
    id: 1,
    name: "Paris Saint-Germain",
  },
  {
    id: 2,
    name: "Manchester United",
  }
];

export const getAllClubs = async (): Promise<ClubModel[]> => {
 return database 
}