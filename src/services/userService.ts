import httpClient from 'httpClient';

import User from 'types/user.entity';

class UserService {
  static login(user: User) {
    return httpClient.post('/auth/signin', user);
  }

  static logout() {
    return httpClient.delete('/auth/signout');
  }

  static signUp(user: User) {
    return httpClient.post('/auth/signup', user);
  }
}

export default UserService;
