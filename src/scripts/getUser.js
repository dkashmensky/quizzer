import { User } from './User';
import { HttpClient } from './httpRequests';
import { throwError } from './throwError';

export function getUser(id) {
  let user;

  function createUser(data) {
    user = new User(data);
  }

  const http = new HttpClient('GET');
  const response = http.makeRequest(`http://localhost:3000/users/${id}`);

  try {
    createUser(response);
  } catch (error) {
    throwError(error);
  }

  return user;
}