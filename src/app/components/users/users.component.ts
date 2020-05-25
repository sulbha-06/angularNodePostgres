import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Users } from './userModel';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  public userForm: FormGroup;
  public user: Users;
  public myUsers: Array<Users>;
  public dummy = ['ssddd', 'sss', 'sssssss'];

  constructor(private userService: UserService) {
    this.user = new Users(0, 'ghghghjh');
    this.userForm = new FormGroup({
      userid: new FormControl(this.user.userid),
      username: new FormControl(this.user.username),
    });
    this.fetchAllUsers();
  }
  ngOnInit() {}
  public fetchAllUsers() {
    this.userService.getUsers().subscribe((data: Array<Users>) => {
      this.myUsers = data;
      // console.log(data);
    });
  }

  onSubmit() {
    this.userService.createUsers(this.userForm.value).subscribe((response) => {
      if (response.status === 201) {
        alert('sumitted detail');
        this.myUsers.push(this.userForm.value);
      }
    });
  }
  // update user
  onUpdate() {
    this.userService.updateUsers(this.userForm.value).subscribe((res) => {
      alert('user updated');
    });
  }
  onDelete(id: number) {
    this.userService.deleteUser(id).subscribe((res) => {
      alert(`user deleted`);
      this.fetchAllUsers();
    });
  }
}
