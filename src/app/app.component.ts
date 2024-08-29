import { Component } from '@angular/core';
import { PersonasComponent } from './personas/personas.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,  // Confirmar que es standalone
  imports: [CommonModule, PersonasComponent]  // Importar PersonasComponent aquí
})
export class AppComponent {
  title = 'crud-personas';
}
