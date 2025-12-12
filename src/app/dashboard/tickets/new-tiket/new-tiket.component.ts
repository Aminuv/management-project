import { 
  AfterViewInit, Component, ElementRef, OnInit, output, ViewChild, viewChild 
    } from '@angular/core'; 
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControleComponent } from "../../../shared/controle/controle.component";

@Component({
  selector: 'app-new-tiket',
  standalone: true,
  imports: [
    ButtonComponent,
    ControleComponent,
   FormsModule 
],
  templateUrl: './new-tiket.component.html',
  styleUrl: './new-tiket.component.css'
})
export class NewTiketComponent implements OnInit, AfterViewInit{
  @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  //private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  add = output<{ title: string; text: string }>();

  ngOnInit() {
    console.log('ONINIT');
    console.log(this.form?.nativeElement);
  }

  ngAfterViewInit(){
    console.log('AFTE VIEW INIT');
    console.log(this.form?.nativeElement);
  }

  onCreateTicket(title : string, tiketText : string) {
    this.add.emit({ title: title, text: tiketText });
    this.form?.nativeElement.reset();
  }
}