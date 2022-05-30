import httpClient from 'httpClient';

import User from 'types/user.entity';

class UserService {
  static login(user: User) {
    return httpClient.post('https://target-mvd-api.herokuapp.com/api/v1/users/sign_in', {"user":{...user}});
  }

  static logout() {
    return httpClient.delete(''); //WIP
  }

  static signUp(user: User) {
    return httpClient.post('https://target-mvd-api.herokuapp.com/api/v1/users', {"user":{...user}});
  }
}

export default UserService;
