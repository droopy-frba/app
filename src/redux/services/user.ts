import { post } from './api';

export async function loginUser(email: string, password: string) {
  await new Promise((r) => setTimeout(r, 3000));
  return {
    user: {
      email: 'leo.guerberg@gmail.com',
    },
    token: 'token',
  };
  // return post('auth/login', {
  //   email,
  //   password,
  // });
}
