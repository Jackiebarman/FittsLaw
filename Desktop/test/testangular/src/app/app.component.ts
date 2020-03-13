import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
class Address {
  constructor(
    public firstname?: string,
    public lastname?: string,
    public address?: string,
    public city?: string,
    public state?: string,
    public postalcode?: string
  ) {}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  data
  title = 'testangular';
  address = new Address();
  constructor(private http: HttpClient) { }
  onSubmit() {
    alert('Thanks for submitting! Data: ' + JSON.stringify(this.address));
    this.http.post<any>('http://localhost:3000/example/', this.address).subscribe(data => {
    console.log(data);
});
    this.http.get('http://localhost:3000/home/').subscribe( data => {console.log(data)});

     // this.http.post<any>('http://localhost:3000/example/',{title:"shashikanht"}).subscribe(data=>{console.log(data)});
  }
}
