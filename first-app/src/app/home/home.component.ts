import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  housingLocationList: Housinglocation[] = [
      {
      id: 0,
      name: 'Acme Fresh Start Housing',
      city: 'Chicago',
      state: 'IL',
      photo: 'https://www.beholdphilippines.com/wp-content/uploads/2019/09/Featured-Photo-1.jpg',
      availableUnits: 4,
      wifi: true,
      laundry: true
    },
    {
      id: 1,
      name: 'A113 Transitional Housing',
      city: 'Santa Monica',
      state: 'CA',
      photo: 'https://www.beholdphilippines.com/wp-content/uploads/2019/09/06-Vic-Sotto-realliving.com-1.jpg',
      availableUnits: 0,
      wifi: false,
      laundry: true
    },
    {
      id: 2,
      name: 'Warm Beds Housing Support',
      city: 'Juneau',
      state: 'AK',
      photo: 'https://assets.onepropertee.com/576x441/crop/listing_images/20220701-145113-scaled.QveEQAH74curBQo9y.jpg',
      availableUnits: 1,
      wifi: false,
      laundry: false
    },
    {
      id: 3,
      name: 'Homesteady Housing',
      city: 'Chicago',
      state: 'IL',
      photo: 'https://luxury-property.top/wp-content/uploads/2021/01/house-and-pool-at-night-1200x720.jpg?v=1611813375',
      availableUnits: 1,
      wifi: true,
      laundry: false
    },
    {
      id: 4,
      name: 'Happy Homes Group',
      city: 'Gary',
      state: 'IN',
      photo: 'https://i.pinimg.com/originals/42/65/b8/4265b85aa32fa2ed401668499a688990.jpg',
      availableUnits: 1,
      wifi: true,
      laundry: false
    },
    {
      id: 5,
      name: 'Hopeful Apartment Group',
      city: 'Oakland',
      state: 'CA',
      photo: 'https://assets.onepropertee.com/576x441/crop/listing_images/ma1.ZsLndd7peoSg3bPpj.jpg',
      availableUnits: 2,
      wifi: true,
      laundry: true
    },
    {
      id: 6,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: 'https://www.beholdphilippines.com/wp-content/uploads/2019/09/02-Willie-Revillame.jpg',
      availableUnits: 5,
      wifi: true,
      laundry: true
    },
    {
      id: 7,
      name: 'Hopeful Housing Solutions',
      city: 'Oakland',
      state: 'CA',
      photo: 'https://www.brittany.com.ph/wp-content/uploads/2021/03/orange-italian-classic-mansion-in-portofino.jpg',
      availableUnits: 2,
      wifi: true,
      laundry: true
    },
    {
      id: 8,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: 'https://1.bp.blogspot.com/-PX8ftUxn2ms/WwOjfF0yi2I/AAAAAAAAGQo/PEh40liLNlQyEYoomne4_YAqlxqRXlesACEwYBhgL/w640-h425/final%2B%252815%2529.jpeg',
      availableUnits: 10,
      wifi: false,
      laundry: false
    },
    {
      id: 9,
      name: 'Capital Safe Towns',
      city: 'Portland',
      state: 'OR',
      photo: 'https://photos1.blogger.com/blogger/4518/3664/1600/TH%20Existing%20House%203.jpg',
      availableUnits: 6,
      wifi: true,
      laundry: true
    }
   ]
}
