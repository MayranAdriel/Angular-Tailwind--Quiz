import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-question',
  standalone: true,
  imports: [],
  templateUrl: './main-question.component.html',
  styleUrl: './main-question.component.css'
})
export class MainQuestionComponent {

  @Input()
  questionMain: string = ''

}
