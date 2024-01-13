import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  empleados: Empleado[] = [
    new Empleado('Francisco', 'Zapata', 'Presidente', 7500),
    new Empleado('Ana Karyna', 'Herrera', 'Directora', 5500),
    new Empleado('Julio', 'Juha', 'Administrativo', 2500),
  ];

  tablaNombre: string = '';
  tablaApellido: string = '';
  tablaCargo: string = '';
  tablaSalario: number = 0;

  agregarEmpleado() {
    let nuevoEmpleado = new Empleado(
      this.tablaNombre,
      this.tablaApellido,
      this.tablaCargo,
      this.tablaSalario
    );
    this.empleados.push(nuevoEmpleado);
    this.tablaNombre = '';
    this.tablaApellido = '';
    this.tablaCargo = '';
    this.tablaSalario = 0;
  }
}
