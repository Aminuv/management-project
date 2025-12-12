import { Component } from '@angular/core';
import { NewTiketComponent } from './new-tiket/new-tiket.component';
import { TiketComponent } from './tiket/tiket.component';
import { Tikets } from './tikits.model';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [
    NewTiketComponent,
    TiketComponent
  ],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
  tickets: Tikets[] = [];

  onAddTicket(tiketData: { title: string; text: string }) {
    const tiket: Tikets = {
      title: tiketData.title,
      request: tiketData.text,
      id: Math.random().toString(),
      status: 'open'
    };

    this.tickets.push(tiket);
    console.log(this.tickets);
  }

}
