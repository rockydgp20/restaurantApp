import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../common.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.css']
})
export class UpdateRestaurantComponent implements OnInit {
  alert: boolean = false;
  editRestaurant = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')
  });
  constructor(private commonservice: CommonService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.commonservice.getCurrentRestaurant(this.router.snapshot.params.id).subscribe((resp) => {
      console.log(resp);
      this.editRestaurant = new FormGroup({
        name: new FormControl(resp['name']),
        email: new FormControl(resp['email']),
        address: new FormControl(resp['address'])
      });
    } );
  }
  updateRestaurant(){
    this.commonservice.updateRestaurant(this.router.snapshot.params.id, this.editRestaurant.value).subscribe((resp) => {
      console.log("Data Updated Successfully");
      this.alert = true;
    });    
  }
  closeAlert(){
    this.alert = false;
  }
}
