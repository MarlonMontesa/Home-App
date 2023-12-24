import { Component, Input } from '@angular/core';
import { Housinglocation } from '../housinglocation';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [HomeComponent],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
    @Input() housingLocation! : Housinglocation

}
