import { Component, input, output, signal } from '@angular/core';
import { Tikets } from '../tikits.model';

@Component({
  selector: 'app-tiket',
  standalone: true,
  imports: [],
  templateUrl: './tiket.component.html',
  styleUrl: './tiket.component.css'
})
export class TiketComponent {

  data = input.required<Tikets>();
  close = output();
  detailsVisisble = signal(false);

  onToggleDetails() {
    this.detailsVisisble.update((wasVisible) => !wasVisible);
  }

  onMarkAsClosed() {
    this.close.emit();
  }
}
