import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

interface FilterCriteria {
  brand: string;
  maxPrice: number;
  onlyInStock: boolean;
}

@Component({
  selector: 'app-phone-filter',
  templateUrl: './phone-filter.component.html',
  styleUrls: ['./phone-filter.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgFor,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSliderModule,
    MatCheckboxModule,
    MatButtonModule
  ]
})
export class PhoneFilterComponent implements OnInit {
  @Output() filterChange = new EventEmitter<FilterCriteria>();
  
  brands: string[] = ['Apple', 'Samsung', 'Google', 'OnePlus', 'Xiaomi'];
  selectedBrand: string = '';
  priceRange: number = 2000;
  onlyInStock: boolean = false;

  ngOnInit(): void {
    // Initialize with default filters
    this.applyFilters();
  }

  applyFilters(): void {
    const filters: FilterCriteria = {
      brand: this.selectedBrand,
      maxPrice: this.priceRange,
      onlyInStock: this.onlyInStock
    };
    this.filterChange.emit(filters);
  }

  resetFilters(): void {
    this.selectedBrand = '';
    this.priceRange = 2000;
    this.onlyInStock = false;
    this.applyFilters();
  }
}