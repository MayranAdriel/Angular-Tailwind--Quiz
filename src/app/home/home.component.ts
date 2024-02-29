import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { QuestionComponent } from './question/question.component';
import { MainQuestionComponent } from './main-question/main-question.component';
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
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {

  listQuestion = data.questions

  dataQuestions = {
    title: data.title,
    listQuestion: data.questions
  }

  index: number = 0;

  maxQuestions = data.questions.length

  listOfAnswers: any[] = []

  mechanism(response: string){
    this.listOfAnswers[this.index] = response


    this.index += 1;
    console.log(this.listOfAnswers)
  }

  ngOnInit(): void {

  }

  }

