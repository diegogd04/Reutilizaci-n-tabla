import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {
  @Input() titulo: String = ""
  @Input() cabeceras: any[] = []
  @Input() datos: any[] = []
}
