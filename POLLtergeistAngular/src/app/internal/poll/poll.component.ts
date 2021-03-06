import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.scss']
})
export class PollComponent implements OnInit {

  title: string = "Fake Title";
  question1: any = {questionTitle: "Fake?", answerChoices: ["a", "b"]};
  answerChoices: any = ["a", "b"];

  constructor(public data: DataService) { }

  ngOnInit(): void {
    this.title = this.data.getSurveyTitle();
    this.question1 = this.data.getQuestion1();
    this.answerChoices = this.question1.answerChoices;
  }

}
