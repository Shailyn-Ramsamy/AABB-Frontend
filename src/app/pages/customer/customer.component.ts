import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-customer',
  imports: [CommonModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
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
        "phone_number": "555-1234"
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

    
}
