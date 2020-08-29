import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
apiURl = "http://localhost:3000/restaurant";
  constructor(private http: HttpClient) { }
  getRestaurantList() {
    return this.http.get(this.apiURl);
  }
  addRestaurant(data) {
    return this.http.post(this.apiURl, data);
  }
  getCurrentRestaurant(id) {
    return this.http.get(`${this.apiURl}/${id}`);
  }

  updateRestaurant(id, data){
    return this.http.put(`${this.apiURl}/${id}`, data);
  }
  deleteRestaurant(id){
    return this.http.delete(`${this.apiURl}/${id}`);
    
  }
}
