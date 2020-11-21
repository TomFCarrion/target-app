import httpClient from 'httpClient';

import User from 'types/user.entity';

class UserService {
  static login(user: User) {
    return httpClient.post('/users/sign_in', user);
  }

  static logout() {
    return httpClient.delete('/users/sign_out');
  }

  static signUp(user: User) {
    return httpClient.post('/users', user);
  }
}

export default UserService;
