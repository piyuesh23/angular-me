import { Component, OnInit } from '@angular/core';
import { EntitylistService } from '../entitylist/entitylist.service';
import { Entity } from '../entitylist/entity';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contributions',
  templateUrl: './contributions.component.html',
  styleUrls: ['./contributions.component.css'],
  providers: [EntitylistService]
})
export class ContributionsComponent implements OnInit {
  entity: Entity[] = [];
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(private entitylistService : EntitylistService, private router: Router) { }

  ngOnInit() {
    this.entitylistService
      .getAll(this.router.url)
      .subscribe(
        e => this.entity = e,
        err => this.errorMessage = err,
        () => this.isLoading = false);
  }
}
