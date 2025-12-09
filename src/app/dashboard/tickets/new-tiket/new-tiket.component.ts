import { Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';

@Component({
  selector: 'app-new-tiket',
  standalone: true,
  imports: [
    ButtonComponent
  ],
  templateUrl: './new-tiket.component.html',
  styleUrl: './new-tiket.component.css'
})
export class NewTiketComponent {

}
