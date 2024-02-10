


// import { Component, AfterViewInit } from '@angular/core';
// import { Users } from 'src/model/Users';
// import { UserService } from '../user.service';
// import { MatDialog } from '@angular/material/dialog';
// import { UpdateDialogComponent } from '../update-dialog/update-dialog.component'; 

// @Component({
//     selector: 'app-userview',
//     templateUrl: './userview.component.html',
//     styleUrls: ['./userview.component.css']
// })
// export class UserviewComponent implements AfterViewInit {
//     users: Users;
//     result: string = " ";
//     userlist: Users[] = [];
//     editedUser: Users = new Users();
//     isUpdateFormVisible: boolean = false;

//     displayedColumns: string[] = ['userId', 'firstName', 'lastName', 'emailId', 'phoneNo', 'userName', 'userType', 'password', 'actions'];

//     constructor(private service: UserService, private dialog: MatDialog) {
//         this.users = new Users();
//         this.getAlluserDetails();
//     }

//     ngAfterViewInit() {
  
//     }

//     getAlluserDetails() {
//         this.service.getAllUserDetails().subscribe(users => this.userlist = users);
//     }

//     deleteUser(user: Users) {
//         this.service.deleteUser(user).subscribe(() => {
//             this.getAlluserDetails();
//             alert('User deleted successfully');
//         });
//     }

//     openUpdateDialog(user: Users): void {
//         const dialogRef = this.dialog.open(UpdateDialogComponent, {
//             width: '400px',
//             data: { user: user },
//         });

//         dialogRef.afterClosed().subscribe((result: Users) => {
//             if (result) {
//                 this.service.updateUser(result).subscribe(
//                     () => {
//                         this.getAlluserDetails();
//                         alert('User updated successfully');
//                     },
//                     (error) => {
//                         console.error('Error updating user:', error);
//                         alert('Failed to update user. Please try again.');
//                     }
//                 );
//             }
//         });
//     }
// }



import { Component } from '@angular/core';
import { Users } from 'src/model/Users';
import { UserService } from '../user.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdateDialogComponent } from '../update-dialog/update-dialog.component';

@Component({
    selector: 'app-userview',
    templateUrl: './userview.component.html',
    styleUrls: ['./userview.component.css']
})
export class UserviewComponent {
    users: Users;
    result: string = " ";
    userlist: Users[] = [];
    editedUser: Users = new Users();
    isUpdateFormVisible: boolean = false;

    displayedColumns: string[] = ['userId', 'firstName', 'lastName', 'emailId', 'phoneNo', 'userName', 'userType', 'password', 'actions'];

    constructor(private service: UserService, private dialog: MatDialog) {
        this.users = new Users();
        this.getAlluserDetails();
    }

    getAlluserDetails() {
        this.service.getAllUserDetails().subscribe(users => this.userlist = users);
    }

    deleteUser(user: Users) {
        this.service.deleteUser(user).subscribe(() => {
            this.getAlluserDetails();
            alert('User deleted successfully');
        });
    }

    openUpdateDialog(user: Users): void {
        const dialogRef = this.dialog.open(UpdateDialogComponent, {
            width: '500px',
            height: '100%',
            data: { user: user },
        });

        dialogRef.afterClosed().subscribe((result: Users) => {
            if (result) {
                this.service.updateUser(result).subscribe(() => {
                        this.getAlluserDetails();
                        alert('User updated successfully');
                    },
                    (error) => {
                        console.error();
                        alert('User updated successfully');
                    }
                );
            }
        });
    }
}




    
