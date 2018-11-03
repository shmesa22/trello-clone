import { client } from './BoardsApi';

const ListsApi = {};

ListsApi.getLists = boardId => client.get(`/boards/${boardId}/lists`);
ListsApi.getList = (boardId, id) =>
  client.get(`/boards/${boardId}/lists/${id}`);
ListsApi.createList = (boardId, payload) =>
  client.post(`/boards/${boardId}/lists`, { list: payload });
ListsApi.editList = (boardId, id, payload) =>
  client.put(`/boards/${boardId}/lists/${id}`, { list: payload });
ListsApi.deleteList = (boardId, id) =>
  client.delete(`/boards/${boardId}/lists/${id}`);

export default ListsApi;
