import { Component, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, DatePipe, NgFor, NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { CustomerReview } from '../../models/customer-review.interface';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    NgIf,
    NgFor,
    DatePipe
  ]
})
export class ReviewComponent implements OnChanges {
  @Input() phoneId: number = 0;
  
  reviewForm: FormGroup;
  reviews: CustomerReview[] = [
    {
      id: 1,
      phoneId: 1,
      customerName: 'John Doe',
      rating: 4,
      comment: 'Great phone with excellent camera quality. Battery life could be better.',
      reviewDate: new Date('2024-01-15')
    },
    {
      id: 2,
      phoneId: 1,
      customerName: 'Jane Smith',
      rating: 5,
      comment: 'Absolutely love this phone! Fast, sleek design, and amazing features.',
      reviewDate: new Date('2024-02-20')
    },
    {
      id: 3,
      phoneId: 2,
      customerName: 'Mike Johnson',
      rating: 5,
      comment: 'The best Android phone on the market. The screen is phenomenal.',
      reviewDate: new Date('2024-03-05')
    },
    {
      id: 4,
      phoneId: 3,
      customerName: 'Sarah Wilson',
      rating: 3,
      comment: 'Good phone but expected more from the camera system.',
      reviewDate: new Date('2024-02-10')
    }
  ];
  
  displayedReviews: CustomerReview[] = [];
  
  constructor(private fb: FormBuilder) {
    this.reviewForm = this.fb.group({
      customerName: ['', [Validators.required, Validators.minLength(3)]],
      rating: [5, [Validators.required, Validators.min(1), Validators.max(5)]],
      comment: ['', [Validators.required, Validators.minLength(10)]]
    });
  }
  
  ngOnChanges() {
    this.filterReviews();
    this.reviewForm.reset({
      customerName: '',
      rating: 5,
      comment: ''
    });
  }
  
  filterReviews() {
    this.displayedReviews = this.reviews.filter(review => review.phoneId === this.phoneId);
  }
  
  submitReview() {
    if (this.reviewForm.invalid) return;
    
    const newReview: CustomerReview = {
      id: Math.floor(Math.random() * 1000),
      phoneId: this.phoneId,
      customerName: this.reviewForm.value.customerName,
      rating: this.reviewForm.value.rating,
      comment: this.reviewForm.value.comment,
      reviewDate: new Date()
    };
    
    this.reviews.push(newReview);
    this.filterReviews();
    
    this.reviewForm.reset({
      customerName: '',
      rating: 5,
      comment: ''
    });
  }
  
  getStars(rating: number): string[] {
    return Array(rating).fill('star');
  }
  
  getEmptyStars(rating: number): string[] {
    return Array(5 - rating).fill('star_border');
  }
}