import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {
  addRestaurant = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')
  
  });
  alert: boolean = false;
  constructor(private commonService: CommonService) { }

  ngOnInit() {
  }
  createRestaurant(){
    this.commonService.addRestaurant(this.addRestaurant.value).subscribe((res) => {
      this.alert = true;
      this.addRestaurant.reset();
    });
  }
  closeAlert(){
    this.alert = false;
  }

}
