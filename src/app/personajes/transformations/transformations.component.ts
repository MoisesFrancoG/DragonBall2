import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from '../../services/characters.service';
import { Character, Transformation } from '../../models/transformations';

@Component({
  selector: 'app-transformations',
  templateUrl: './transformations.component.html',
  styleUrls: ['./transformations.component.css'],
})
export class TransformationsComponent implements OnInit {
  personaje: Character | null = null;
  mensaje: string = '';
  transformaciones: Transformation[] = []; // Transformaciones locales
  transformacionSeleccionada: Transformation | null = null; // Para el modal
  nuevoKi: number | null = null; // Nuevo valor de Ki

  constructor(
    private route: ActivatedRoute,
    private charService: CharactersService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.charService.getTrans(id).subscribe(
      (response) => {
        this.personaje = response;
        if (this.personaje) {
          this.transformaciones = this.personaje.transformations || [];
          if (this.transformaciones.length === 0) {
            this.mensaje =
              'Este personaje no tiene transformaciones disponibles.';
          }
        }
      },
      (error) => {
        console.error('Error al obtener el personaje:', error);
      }
    );
  }

  abrirModal(transformacion: Transformation): void {
    this.transformacionSeleccionada = { ...transformacion }; 
    this.nuevoKi = transformacion.ki; 
  }

  guardarCambios(): void {
    if (this.transformacionSeleccionada && this.nuevoKi !== null) {
      const index = this.transformaciones.findIndex(
        (t) => t.name === this.transformacionSeleccionada?.name
      );
      if (index !== -1) {
        this.transformaciones[index].ki = this.nuevoKi;
        this.cerrarModal();
      }
    }
  }

  cerrarModal(): void {
    this.transformacionSeleccionada = null;
    this.nuevoKi = null;
  }
}
