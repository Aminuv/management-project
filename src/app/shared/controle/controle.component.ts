import { Component, input,  } from '@angular/core';

@Component({
  selector: 'app-controle',
  standalone: true,
  imports: [],
  templateUrl: './controle.component.html',
  styleUrl: './controle.component.css'
})
export class ControleComponent {
  label = input.required<string>();
}
