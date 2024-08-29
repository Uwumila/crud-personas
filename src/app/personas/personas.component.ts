import { Component, OnInit } from '@angular/core';
import { PersonasService } from './personas.service';
import { Persona } from './persona.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class PersonasComponent implements OnInit {
  personas: Persona[] = [];
  selectedPersona: Persona | null = null;
  newPersona: Persona = { nombre: '', apellido: '', rut: '', telefono: '', correo: '' };

  constructor(private personasService: PersonasService) { }

  ngOnInit(): void {
    this.personasService.getPersonas().subscribe(personas => {
      this.personas = personas;
    });
  }

  selectPersona(persona: Persona): void {
    this.selectedPersona = { ...persona };
  }

  addPersona(): void {
    this.personasService.addPersona(this.newPersona);
    this.newPersona = { nombre: '', apellido: '', rut: '', telefono: '', correo: '' };
  }

  updatePersona(): void {
    if (this.selectedPersona && this.selectedPersona.id) {
      this.personasService.updatePersona(this.selectedPersona);
      this.selectedPersona = null;
    }
  }

  deletePersona(id: number): void {
    this.personasService.deletePersona(id);
    this.selectedPersona = null;
  }

}
