import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../components/users/userModel';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public  baseUrl = 'http://localhost:3000';
  public userEndpoint = `${this.baseUrl}/users`;
  constructor(public httpClient: HttpClient) {}
  // get all user
  public getUsers() {
    return this.httpClient.get(this.userEndpoint);
  }
  // create user
  public createUsers(user: Users) {
    return this.httpClient.post(this.userEndpoint, user, { observe: 'response' });
  }
  // update user
  public updateUsers(user: Users) {
    return this.httpClient.put(this.userEndpoint, user, { observe: 'response' });
  }
  public deleteUser(id: number) {
    return this.httpClient.delete(`${this.userEndpoint}/${id}`, { observe: 'response' });
  }
}
