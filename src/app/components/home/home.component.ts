import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { Art1Component } from "../art1/art1.component";
import { Art2Component } from "../art2/art2.component";
import { FootComponent } from "../foot/foot.component";

@Component({
  selector: 'app-home',
  imports: [NavComponent, Art1Component, Art2Component, FootComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
