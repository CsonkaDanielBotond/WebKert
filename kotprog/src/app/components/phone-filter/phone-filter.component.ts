import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Phone } from '../../models/phone.interface';

@Component({
  selector: 'app-phone-filter',
  templateUrl: './phone-filter.component.html',
  styleUrls: ['./phone-filter.component.css']
})
export class PhoneFilterComponent implements OnChanges {
  @Input() allPhones: Phone[] = [];
  @Output() filterApplied = new EventEmitter<Phone[]>();
  
  brands: string[] = [];
  selectedBrand: string = '';
  priceRange: number = 2000;
  onlyInStock: boolean = false;
  
  ngOnChanges() {
    // Extract unique brands
    this.brands = [...new Set(this.allPhones.map(phone => phone.brand))];
  }
  
  applyFilters() {
    let filteredPhones = [...this.allPhones];
    
    // Filter by brand
    if (this.selectedBrand) {
      filteredPhones = filteredPhones.filter(phone => phone.brand === this.selectedBrand);
    }
    
    // Filter by price
    filteredPhones = filteredPhones.filter(phone => phone.price <= this.priceRange);
    
    // Filter by stock
    if (this.onlyInStock) {
      filteredPhones = filteredPhones.filter(phone => phone.inStock);
    }
    
    this.filterApplied.emit(filteredPhones);
  }
  
  resetFilters() {
    this.selectedBrand = '';
    this.priceRange = 2000;
    this.onlyInStock = false;
    this.filterApplied.emit([...this.allPhones]);
  }
}