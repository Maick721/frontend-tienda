import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,              // si quieres que sea standalone
  imports: [],                   // puedes dejarlo vacío o agregar CommonModule si usas directivas
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']   // plural y array
})
export class NavComponent { }