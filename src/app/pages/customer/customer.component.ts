import { Component, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-customer',
  imports: [CommonModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css',
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({ height: '0px', opacity: 0, padding: '0px' })),
      state('expanded', style({ height: '*', opacity: 1, padding: '10px' })),
      transition('collapsed <=> expanded', [
        animate('300ms ease-in-out')
      ])
    ])
  ]
})
export class CustomerComponent {

  showDiv = false;
  items: any[] = [
    {
    "customers": [
      {
        "customer_id": 1,
        "name": "John",
        "surname": "Doe",
        "tab_balance": 150.75,
        "phone_number": "084 638 6045"
      },
      {
        "customer_id": 2,
        "name": "Jane",
        "surname": "Smith",
        "tab_balance": 200.00,
        "phone_number": "555-5678"
      },
      {
        "customer_id": 3,
        "name": "Robert",
        "surname": "Smith",
        "tab_balance": 50.25,
        "phone_number": "555-8765"
      },
      {
        "customer_id": 4,
        "name": "Emily",
        "surname": "Smith",
        "tab_balance": 300.50,
        "phone_number": "555-4321"
      },
      {
        "customer_id": 4,
        "name": "Emily",
        "surname": "Smith",
        "tab_balance": 300.50,
        "phone_number": "555-4321"
      },
      {
        "customer_id": 4,
        "name": "Emily",
        "surname": "Smith",
        "tab_balance": 300.50,
        "phone_number": "555-4321"
      },
      {
        "customer_id": 4,
        "name": "Emily",
        "surname": "Smith",
        "tab_balance": 300.50,
        "phone_number": "555-4321"
      },
      {
        "customer_id": 4,
        "name": "Emily",
        "surname": "Smith",
        "tab_balance": 300.50,
        "phone_number": "555-4321"
      }
    ]
  }
  ];

  toggleCard(index: number) {
    const customer = this.items[0].customers[index];
    customer.isOpen = !customer.isOpen;
  
    // Find the corresponding line and toggle the appropriate animation class
    const cardLine = document.querySelectorAll('.card-line')[index] as HTMLElement;
    
    if (customer.isOpen) {
      // When opening, apply the "expand" animation
      cardLine.classList.remove('animate-shrink'); // Remove the shrink animation if any
      cardLine.classList.add('animate-expand');
    } else {
      // When closing, apply the "shrink" animation
      cardLine.classList.remove('animate-expand'); // Remove the expand animation if any
      cardLine.classList.add('animate-shrink');
    }
  }
    
}
