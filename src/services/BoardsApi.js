import ApiService from './ApiService';

export const client = new ApiService({
  baseURL: 'http://localhost:8080/api/v1/',
});

const BoardsApi = {};

BoardsApi.getBoards = () => client.get('/boards');
BoardsApi.getBoard = id => client.get(`/boards/${id}`);
BoardsApi.createBoard = payload => client.post('/boards', { board: payload });
BoardsApi.editBoard = (id, payload) =>
  client.put(`/boards/${id}`, { board: payload });
BoardsApi.deleteBoard = id => client.delete(`/boards/${id}`);

export default BoardsApi;
