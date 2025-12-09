import { Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControleComponent } from "../../../shared/controle/controle.component";

@Component({
  selector: 'app-new-tiket',
  standalone: true,
  imports: [
    ButtonComponent,
    ControleComponent
],
  templateUrl: './new-tiket.component.html',
  styleUrl: './new-tiket.component.css'
})
export class NewTiketComponent {

}
