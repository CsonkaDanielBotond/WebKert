import { Component, OnInit } from '@angular/core';
import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';

import { Phone } from '../../models/phone.interface';
import { PhoneFilterComponent } from '../phone-filter/phone-filter.component';
import { PhoneDetailComponent } from '../phone-detail/phone-detail.component';
import { OrderFormComponent } from '../order-form/order-form.component';
import { ReviewComponent } from '../review/review.component';
import { PriceFormatPipe } from '../../pipes/price-format.pipe';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatChipsModule,
    MatButtonModule,
    PhoneFilterComponent,
    PhoneDetailComponent,
    OrderFormComponent,
    ReviewComponent,
    NgClass,
    NgFor,
    NgIf,
    PriceFormatPipe
  ]
})
export class PhoneListComponent implements OnInit {
  phones: Phone[] = [
    {
      id: 1,
      brand: 'Apple',
      model: 'iPhone 15 Pro',
      price: 999,
      releaseYear: 2023,
      inStock: true,
      color: 'Titanium',
      specs: {
        screenSize: 6.1,
        resolution: '2556 × 1179',
        processor: 'A17 Pro',
        ram: 8,
        storage: 128,
        camera: '48MP Triple Camera',
        battery: 3274
      }
    },
    {
      id: 2,
      brand: 'Samsung',
      model: 'Galaxy S24 Ultra',
      price: 1199,
      releaseYear: 2024,
      inStock: true,
      color: 'Titanium Black',
      specs: {
        screenSize: 6.8,
        resolution: '3120 × 1440',
        processor: 'Snapdragon 8 Gen 3',
        ram: 12,
        storage: 256,
        camera: '200MP Quad Camera',
        battery: 5000
      }
    },
    {
      id: 3,
      brand: 'Google',
      model: 'Pixel 8 Pro',
      price: 899,
      releaseYear: 2023,
      inStock: false,
      color: 'Obsidian',
      specs: {
        screenSize: 6.7,
        resolution: '2992 × 1344',
        processor: 'Google Tensor G3',
        ram: 12,
        storage: 128,
        camera: '50MP Triple Camera',
        battery: 5050
      }
    },
    {
      id: 4,
      brand: 'Xiaomi',
      model: 'Xiaomi 14 Ultra',
      price: 1299,
      releaseYear: 2024,
      inStock: true,
      color: 'Black',
      specs: {
        screenSize: 6.73,
        resolution: '3200 × 1440',
        processor: 'Snapdragon 8 Gen 3',
        ram: 16,
        storage: 512,
        camera: '50MP Quad Camera',
        battery: 5000
      }
    },
    {
      id: 5,
      brand: 'OnePlus',
      model: '12',
      price: 899,
      releaseYear: 2024,
      inStock: true,
      color: 'Silky Black',
      specs: {
        screenSize: 6.82,
        resolution: '3168 × 1440',
        processor: 'Snapdragon 8 Gen 3',
        ram: 12,
        storage: 256,
        camera: '50MP Triple Camera',
        battery: 5400
      }
    }
  ];

  filteredPhones: Phone[] = [];
  selectedPhone: Phone | null = null;

  constructor() { }

  ngOnInit(): void {
    // Initialize filteredPhones with all phones
    this.filteredPhones = [...this.phones];
  }

  selectPhone(phone: Phone): void {
    this.selectedPhone = phone;
  }

  applyFilters(filterCriteria: any): void {
    this.filteredPhones = this.phones.filter(phone => {
      // Apply brand filter if selected
      if (filterCriteria.brand && phone.brand !== filterCriteria.brand) {
        return false;
      }
      
      // Apply price filter
      if (phone.price > filterCriteria.maxPrice) {
        return false;
      }
      
      // Apply in-stock filter
      if (filterCriteria.onlyInStock && !phone.inStock) {
        return false;
      }
      
      return true;
    });
  }
}