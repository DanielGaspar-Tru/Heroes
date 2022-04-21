import axios from 'axios';

export const heroesApi = axios.create({
  baseURL: 'https://my-json-server.typicode.com/Isaacmeedinaa/dc-superheroes/',
});
