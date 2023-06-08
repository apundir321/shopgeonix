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
  stars: number[] = [];

  ngOnInit() {
    this.stars = Array(this.maxRating).fill(0).map((_, i) => i + 1);
  }

  setRating(rating: number) {
    this.selectedRating = rating;
  }
}
