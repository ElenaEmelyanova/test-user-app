import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../../services/collection.service';
import { User } from "../../models/user.model";
import { untilDestroyed } from "@ngneat/until-destroy";
import { IDatasource } from "ngx-ui-scroll";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users:User[] = [];
  public datasource: IDatasource = {
    get: (index, count, success) => {
      const data = this.users;
      success(data);
    },
    settings: {
      minIndex: 0,
      maxIndex: this.users.length -1
    }
  };

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
