import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Persona } from './persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {
  private personas: Persona[] = [];
  private personasSubject: BehaviorSubject<Persona[]> = new BehaviorSubject<Persona[]>(this.personas);

  constructor() { }

  getPersonas(): Observable<Persona[]> {
    return this.personasSubject.asObservable();
  }

  addPersona(persona: Persona): void {
    persona.id = this.personas.length + 1;  
    this.personas.push(persona);
    this.personasSubject.next(this.personas);
  }

  updatePersona(persona: Persona): void {
    const index = this.personas.findIndex(p => p.id === persona.id);
    if (index !== -1) {
      this.personas[index] = persona;
      this.personasSubject.next(this.personas);
    }
  }

  deletePersona(id: number): void {
    this.personas = this.personas.filter(p => p.id !== id);
    this.personasSubject.next(this.personas);
  }
}
