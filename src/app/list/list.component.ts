import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
public restaurantList: any;
alert: boolean = false;
  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.commonService.getRestaurantList().subscribe((response) => {
      this.restaurantList = response;      
    });
  }
  deleteRestaurant(id) {
    this.commonService.deleteRestaurant(id).subscribe((response) => {
      this.alert = true;
      console.log("Deleted Successfully");
    });
 }
 closeAlert(){
   this.alert = false;
   this.commonService.getRestaurantList().subscribe((response) => {
    this.restaurantList = response;      
  });
 }
}
