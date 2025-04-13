import { Component, Input } from '@angular/core';
import { Phone } from '../../models/phone.interface';

@Component({
  selector: 'app-phone-detail',
  templateUrl: './phone-detail.component.html',
  styleUrls: ['./phone-detail.component.css']
})
export class PhoneDetailComponent {
  @Input() phone: Phone | null = null;
}