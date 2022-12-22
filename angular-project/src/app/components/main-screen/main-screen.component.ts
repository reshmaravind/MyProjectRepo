import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss']
})
export class MainScreenComponent {
  userName:string='';
  constructor(private route: ActivatedRoute){}

  ngOnInit():void{
    this.userName = this.route.snapshot.params['username'];
  }

}
