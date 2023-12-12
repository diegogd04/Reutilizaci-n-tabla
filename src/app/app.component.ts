import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'componenteTabla'
  tablas = [
    {
      miTitulo: "LIBROS",
      misCabeceras: ["Titulo", "Autor"],
      misDatos: [
        { "Titulo": "El quijote", "Autor": "Cervantes" },
        { "Titulo": "100 años de soledad", "Autor": "Gabriel García Márquez" },
        { "Titulo": "Los pilares de la Tierra", "Autor": "Jen Follet" }
      ]
    },
    {
      miTitulo: "REVISTAS",
      misCabeceras: ["Titulo", "Autor"],
      misDatos: [
        { "Titulo": "Jara y sedal", "Autor": "A.Lopez" },
        { "Titulo": "Pc Computer", "Autor": "MA Editorial" },
        { "Titulo": "Muy Interesante", "Autor": "SA Edition" }
      ]
    },
    {
      miTitulo: "MÚSICA",
      misCabeceras: ["Titulo", "Autor"],
      misDatos: [
        { "Titulo": "Repsody", "Autor": "Queen" },
        { "Titulo": "Motomamy", "Autor": "Rosalía" },
        { "Titulo": "Despechada", "Autor": "Shakira" }
      ],
    },
    {
      miTitulo: "CINE",
      misCabeceras: ["Titulo", "Autor"],
      misDatos: [
        { "Titulo": "Napoleón", "Autor": "Ridney Scott" },
        { "Titulo": "Frozen", "Autor": "Jennifer Lee" },
        { "Titulo": "Titanic", "Autor": "James Cameron" }
      ]
    }
  ]
}
