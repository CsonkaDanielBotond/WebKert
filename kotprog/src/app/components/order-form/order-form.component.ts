import { Component, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Phone } from '../../models/phone.interface';
import { Order, PaymentMethod } from '../../models/order.interface';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnChanges {
  @Input() phone: Phone | null = null;
  
  orderForm: FormGroup;
  paymentMethods = Object.values(PaymentMethod);
  submitted = false;
  order: Order | null = null;
  
  constructor(private fb: FormBuilder) {
    this.orderForm = this.fb.group({
      quantity: [1, [Validators.required, Validators.min(1)]],
      customerName: ['', [Validators.required, Validators.minLength(3)]],
      address: ['', [Validators.required, Validators.minLength(10)]],
      paymentMethod: ['', Validators.required]
    });
  }
  
  ngOnChanges() {
    this.submitted = false;
    this.order = null;
    if (this.orderForm) {
      this.orderForm.reset({
        quantity: 1,
        customerName: '',
        address: '',
        paymentMethod: ''
      });
    }
  }
  
  onSubmit() {
    if (!this.phone || this.orderForm.invalid) return;
    
    this.submitted = true;
    
    this.order = {
      id: Math.floor(Math.random() * 1000),
      phoneId: this.phone.id,
      quantity: this.orderForm.value.quantity,
      customerName: this.orderForm.value.customerName,
      address: this.orderForm.value.address,
      paymentMethod: this.orderForm.value.paymentMethod,
      orderDate: new Date()
    };
  }
  
  get totalPrice(): number {
    if (!this.phone) return 0;
    return this.phone.price * (this.orderForm.value.quantity || 0);
  }
}