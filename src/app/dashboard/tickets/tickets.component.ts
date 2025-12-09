import { Component } from '@angular/core';
import { NewTiketComponent } from './new-tiket/new-tiket.component';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [
    NewTiketComponent
  ],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {

}
