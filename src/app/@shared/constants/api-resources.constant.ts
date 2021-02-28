import { environment } from '../../../environments/environment';

const createUrl = (actionName: string): string =>
  `${environment.apiHost}users/${actionName}/`;

// const createAuthUrl = (actionName: string): string =>
//   `${environment.apiHost}auth/${actionName}`;

export const appApiResources = {
  baseUrl: environment.apiHost,
  login: createUrl('authenticate'), // http://localhost:4000/users/authenticate/
  register: createUrl('register'), // http://localhost:4000/users/register/
  user: createUrl(''), // http://localhost:4000/users/
};
