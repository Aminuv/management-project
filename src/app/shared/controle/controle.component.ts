import { Component, input, ViewEncapsulation,  } from '@angular/core';

@Component({
  selector: 'app-controle',
  standalone: true,
  imports: [],
  templateUrl: './controle.component.html',
  styleUrl: './controle.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control'
  },
})
export class ControleComponent {
  label = input.required<string>();
}
