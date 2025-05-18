import { Component } from '@angular/core';
import { ReviewRateComponent } from "./review-rate/review-rate.component";
import { ActivatedRoute } from '@angular/router';
import { ReviewService } from '../../../services/review/review.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-review-form',
  imports: [ReviewRateComponent, FormsModule],
  templateUrl: './review-form.component.html',
  styleUrl: './review-form.component.scss'
})
export class ReviewFormComponent {
  type: string = '';
  reference: string = '';
  reviewData: {
    title: string;
    description: string;
    rating: number;
    when: {
      month: string,
      year: string
    };
    who: string;
    images: File[];
  } = {
      title: '',
      description: '',
      rating: 0,
      when: {
        month: '',
        year: ''
      },
      who: '',
      images: []
    };


  monthsAndYears: { month: string, year: number }[] = [];
  groupOptions: String[] = [];


  constructor(private route: ActivatedRoute, private reviewService: ReviewService) {
    this.monthsAndYears = this.getMonthsAndYears();
    this.groupOptions = ['Business', 'Couples', 'Family', 'Friends', 'Solo', 'Other'];
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.type = params['type'];
      this.reference = params['reference']
    })
  }
  onSubmit() {

    const formData = new FormData();
    formData.append('title', this.reviewData.title);
    formData.append('description', this.reviewData.description);
    formData.append('rating', (this.reviewData.rating).toString());
    formData.append('when', `${this.reviewData.when.month} ${this.reviewData.when.year}`);
    formData.append('who', this.reviewData.who);

    if (this.reviewData.images) {
      this.reviewData.images.forEach((file, index) => {
        formData.append(`photos`, file);
      });
    }

    this.reviewService.addReview(this.type, this.reference, formData).subscribe(res => {
      console.log(res);

    });
    this.reviewData = {
      title: '',
      description: '',
      rating: 0,
      when: { month: '', year: '' },
      who: '',
      images: []
    };
  }

  getImages(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files) {
      this.reviewData.images = Array.from(target.files);
      const previewDiv = document.getElementById('image-preview');
      if (previewDiv) {
        previewDiv.innerHTML = '';
        this.reviewData.images.forEach((file) => {
          const reader = new FileReader();
          reader.onload = (e: ProgressEvent<FileReader>) => {
            if (e.target && typeof e.target.result === 'string') {
              const img = document.createElement('img');
              img.src = e.target.result;
              img.alt = 'Preview';
              img.classList.add('col-2', 'img-fluid', 'rounded');
              previewDiv.appendChild(img);
            }
          };
          reader.readAsDataURL(file);
        });
      }
    }
  }
  onRatingChange(e: number) {
    console.log(e);
    this.reviewData.rating = e;
  }

  getMonthsAndYears(): { month: string, year: number }[] {
    const monthsAndYears = [];
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    for (let i = 0; i < 12; i++) {
      const date = new Date(currentYear, currentMonth - i, 1);
      monthsAndYears.push({
        month: date.toLocaleString('default', { month: 'long' }),
        year: date.getFullYear()


      });
    }

    return monthsAndYears;
  }
}
