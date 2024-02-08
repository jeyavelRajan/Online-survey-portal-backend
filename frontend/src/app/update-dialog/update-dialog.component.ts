import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Users } from 'src/model/Users';


@Component({
    selector: 'app-update-dialog',
    templateUrl: './update-dialog.component.html',
})
export class UpdateDialogComponent {
    updatedUser: Users = { ...this.data.users }; // Create a copy of the user for editing

    constructor(
        public dialogRef: MatDialogRef<UpdateDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { users: Users }
    ) {}

    onNoClick(): void {
        this.dialogRef.close();
    }
}