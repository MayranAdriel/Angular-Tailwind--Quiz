import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TitleComponent } from './title/title.component';
import { QuestionComponent } from './question/question.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, TitleComponent, QuestionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
