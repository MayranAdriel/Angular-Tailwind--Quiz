import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { QuestionComponent } from './question/question.component';
import { MainQuestionComponent } from './main-question/main-question.component';
import { ResultComponent } from './result/result.component';
import {ButtonComponent} from './button/button.component'
import data from '../../assets/data/quiz_questions.json';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    TitleComponent,
    QuestionComponent,
    MainQuestionComponent,
    CommonModule,
    ResultComponent,
    ButtonComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  listQuestion = data.questions;

  dataQuestions = {
    title: data.title,
    listQuestion: data.questions,
    results: {
      resultA: data.results.A,
      resultB: data.results.B,
    },
  };

  limitReached: boolean = false;

  responseResult: string = '';

  index: number = 0;

  maxQuestions = data.questions.length - 1;

  listOfAnswers: any[] = [];

  finalResult() {
    let finalResultA = 0;
    let finalResultB = 0;

    this.listOfAnswers.forEach((element) => {
      if (element === 'A') {
        finalResultA += 1;
      } else {
        finalResultB += 1;
      }
    });

    if (finalResultA > finalResultB) {
      this.responseResult = this.dataQuestions.results.resultA;
    } else {
      this.responseResult = this.dataQuestions.results.resultB;
    }
  }

  mechanism(response: string) {
    this.listOfAnswers[this.index] = response;

    if (this.index === this.maxQuestions) {
      this.limitReached = true;
      this.finalResult();
    } else {
      this.index += 1;
    }
  }

  refresh(){
    location.reload();
  }

  ngOnInit(): void {
    console.log(this.maxQuestions);
  }
}
