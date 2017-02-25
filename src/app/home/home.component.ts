import { Component, OnInit } from '@angular/core';
import { EntitylistService } from '../entitylist/entitylist.service';
import { Entity } from '../entitylist/entity';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [EntitylistService]
})
export class HomeComponent implements OnInit {
  entity: Entity[] = [];
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(private entitylistService : EntitylistService) {}

  ngOnInit() {
    this.entitylistService
      .getAboutMe()
      .subscribe(
        e => this.entity = e,
        err => this.errorMessage = err,
        () => this.isLoading = false);
  }

}
