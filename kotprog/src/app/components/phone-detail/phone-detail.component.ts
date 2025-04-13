import { Component, Input } from '@angular/core';
import { CommonModule, NgIf, NgStyle } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { Phone } from '../../models/phone.interface';
import { PriceFormatPipe } from '../../pipes/price-format.pipe';

@Component({
  selector: 'app-phone-detail',
  templateUrl: './phone-detail.component.html',
  styleUrls: ['./phone-detail.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    NgIf,
    NgStyle,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    PriceFormatPipe
  ]
})
export class PhoneDetailComponent {
  @Input() phone: Phone | null = null;
}