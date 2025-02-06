import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';  // Import CommonModule
import { CustomerComponent } from './pages/customer/customer.component';
import { DrinksComponent } from './pages/drinks/drinks.component';
import { SwipeCarouselComponent } from './components/swipe-carousel/swipe-carousel.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SwipeCarouselComponent, CommonModule, CustomerComponent, DrinksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dop-detector-frontend';
  // State to track which component to display
  activeComponent: string = 'customer';

  // Method to switch between components
  switchComponent(component: string) {
    this.activeComponent = component;
  }
}
