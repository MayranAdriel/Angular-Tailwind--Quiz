import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { QuestionComponent } from './question/question.component';
import { MainQuestionComponent } from './main-question/main-question.component';
import { ResultComponent } from './result/result.component';
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
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  listQuestion = data.questions;

  dataQuestions = {
    title: data.title,
    listQuestion: data.questions,
  };

  limitReached: boolean = false;

  index: number = 0;

  maxQuestions = data.questions.length - 1;

  listOfAnswers: any[] = [];

  mechanism(response: string) {
    this.listOfAnswers[this.index] = response;

    if (this.index === this.maxQuestions) {
      this.limitReached = true;
    } else {
      this.index += 1;
    }
  }

  ngOnInit(): void {
    console.log(this.maxQuestions);
  }
}
