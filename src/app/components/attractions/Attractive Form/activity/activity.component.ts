// contact.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StepsComponent } from '../steps/steps.component';
import { Router } from '@angular/router';
import { BookingSummaryComponent } from "../contact/booking-summary/booking-summary.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css'],
})
export class ActivityComponent implements OnInit {

  ngOnInit(): void {
    
  }
    
  
 
}