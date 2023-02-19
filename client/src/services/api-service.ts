import axios from 'axios';
import GamesModels from 'models/games-model';

const api = axios.create({
  baseURL: 'http://localhost:5007',
  timeout: 5000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

const fetchGames = async () => {
  const { data: fetchGame } = await api.get<GamesModels[]>('/games');

  return fetchGame;
};

const fetchGame = async (id : string | number) => {
  const { data } = await api.get<GamesModels>(`/games/${id}`);

  return data;
};

type CreateGameProps = Omit<GamesModels, 'id' | 'onDelete'>;

const createGame = async (gameData: CreateGameProps) => {
  const { data } = await api.post<GamesModels>('/games', gameData);

  return data;
};

const deleteGame = async (id: string | number) => {
  const { data } = await api.delete(`/games/${id}`);

  return data;
};

const updateGame = async (id:string | number, gameData: CreateGameProps) => {
  const { data } = await api.put<GamesModels[]>(`/games/${id}`, gameData);

  return data;
};

const ApiService = {
  fetchGames,
  fetchGame,
  createGame,
  deleteGame,
  updateGame,
};

export default ApiService;
