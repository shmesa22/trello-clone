import { client } from './BoardsApi';

const TasksApi = {};

TasksApi.getTasks = (boardId, listId) =>
  client.get(`/boards/${boardId}/lists/${listId}/tasks`);
TasksApi.getTask = (boardId, listId, id) =>
  client.get(`/boards/${boardId}/lists/${listId}/tasks/${id}`);
TasksApi.createTask = (boardId, listId, payload) =>
  client.post(`/boards/${boardId}/lists/${listId}/tasks`, { task: payload });
TasksApi.editTask = (boardId, listId, id, payload) =>
  client.put(`/boards/${boardId}/lists/${listId}/tasks/${id}`, {
    task: payload,
  });
TasksApi.deleteTask = (boardId, listId, id) =>
  client.delete(`/boards/${boardId}/lists/${listId}/tasks/${id}`);

export default TasksApi;
