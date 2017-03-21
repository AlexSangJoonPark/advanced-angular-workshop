import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-submit',
  template: `
    Title: <input [(ngModel)]="submission.title">
    Description: <input [(ngModel)]="submission.description">
    <button type="button" (click)="submit()">Submit</button>

<div *ngFor="let item of queue | async" class="activity">
  <h2>{{ item.title }}</h2>
  <p>{{ item.description }}</p>
</div>
  `,
  styles: []
})
export class SubmitComponent implements OnInit {

  submission: { title?: string, description?: string } = {};
  queue: any = {};
  constructor(public af: AngularFire) { 
    this.queue = this.af.database.list('queue');
  }
  submit() {
    this.queue.push(this.submission);
    this.submission = {};
  }

  ngOnInit() {
  }

}
