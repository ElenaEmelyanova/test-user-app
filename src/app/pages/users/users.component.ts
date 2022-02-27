import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../../services/collection.service';
import { User } from "../../models/user.model";
import { untilDestroyed } from "@ngneat/until-destroy";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users:User[] = [];

  constructor(private collectionService: CollectionService) {
    this.collectionService.getUsersCollection()
      .pipe(
        untilDestroyed(this)
      )
      .subscribe(data => {
        this.users = data;
      });
  }

  ngOnInit() {
  }

}
