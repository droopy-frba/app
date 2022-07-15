import { post } from './api';

export async function loginUser(email: string, password: string) {
  console.log('POST: /auth/login: ', email, ', ', password);
  return 'token';
  // return post('auth/login', {
  //   email,
  //   password,
  // });
}
