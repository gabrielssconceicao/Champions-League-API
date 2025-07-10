import { ClubModel } from '../model/club-model';
import fs from 'fs';

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
  const data =await fs.readFileSync('./src/data/clubs.json', "utf-8");
  const clubs: ClubModel[] = JSON.parse(data);
 return clubs
}