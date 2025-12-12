import { 
   Component, input, ViewEncapsulation, contentChild,
   ElementRef, inject, afterRender, afterNextRender 
  } from '@angular/core';

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
  private el = inject(ElementRef);

  private control = 
    contentChild<ElementRef<HTMLElement | HTMLTextAreaElement>>('input');

  constructor() {
    afterRender(() => {
      console.log('afterRender');
    });
 

  afterNextRender(() => {
    console.log('afterNextRender');
  });
 }

  onClick() {
    console.log(this.el);
    console.log(this.control());
    console.log('clicou');
  }
  
}
