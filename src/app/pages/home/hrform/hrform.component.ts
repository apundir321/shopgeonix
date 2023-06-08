import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'molla-hrform',
  templateUrl: './hrform.component.html',
  styleUrls: ['./hrform.component.scss'],
  styles: [`
.active {
  color: orange;
}
`]
})
export class HrformComponent implements OnInit {

  @Input() maxRating: number = 5;
  @Input() selectedRating: number = 0;
  @Input() selectedRating1: number = 0;
  @Input() selectedRating2: number = 0;
  @Input() selectedRating3: number = 0;
  @Input() selectedRating4: number = 0;
  @Input() selectedRating5: number = 0;
  @Input() selectedRating6: number = 0;
  @Input() selectedRating7: number = 0;
  @Input() selectedRating8: number = 0;
  @Input() selectedRating9: number = 0;
  @Input() selectedRating10: number = 0;
  stars: number[] = [];

  ngOnInit() {
    this.stars = Array(this.maxRating).fill(0).map((_, i) => i + 1);
  }

  setRating(rating: number,selectedRatingValue:any) {
 
    if(selectedRatingValue === 'selectedRating'){
    this.selectedRating= rating;
  }else if(selectedRatingValue === 'selectedRating1'){
    this.selectedRating1= rating;
  }else if(selectedRatingValue === 'selectedRating2'){
    this.selectedRating2= rating;
  }else if(selectedRatingValue === 'selectedRating3'){
    this.selectedRating3= rating;
  }else if(selectedRatingValue === 'selectedRating4'){
    this.selectedRating4= rating;
  }else if(selectedRatingValue === 'selectedRating5'){
    this.selectedRating5= rating;
  }else if(selectedRatingValue === 'selectedRating6'){
    this.selectedRating6= rating;
  }else if(selectedRatingValue === 'selectedRating7'){
    this.selectedRating7= rating;
  }else if(selectedRatingValue === 'selectedRating8'){
    this.selectedRating8= rating;
  }else if(selectedRatingValue === 'selectedRating9'){
    this.selectedRating9= rating;
  }else if(selectedRatingValue === 'selectedRating10'){
    this.selectedRating10= rating;
  }
    
  }
}
