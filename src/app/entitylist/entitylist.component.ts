import { Component, OnInit } from '@angular/core';
import { Entity } from './entity';
import { EntitylistService } from './entitylist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entitylist',
  templateUrl: './entitylist.component.html',
  styleUrls: ['./entitylist.component.css'],
  providers: [EntitylistService]
})

export class EntitylistComponent implements OnInit {
  entity: Entity[] = [];
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(private entitylistService : EntitylistService, private router: Router) {}

  ngOnInit() {
    this.entitylistService
      .getAll(this.router.url)
      .subscribe(
        e => this.entity = e,
        err => this.errorMessage = err,
        () => this.isLoading = false);
  }
}
