import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'The title of App Component';
  today = new Date();
  imageUrl = 'https://upload.wikimedia.org/wikipedia/en/2/26/Fall_ver2.jpg'
  price = 10;
  sellingPrice = 15.50;
}
