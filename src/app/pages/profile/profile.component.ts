import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  guideName: string='';
  showName: boolean = false;
  constructor(private activatedRoutes: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoutes.params.subscribe( params =>{
      this.guideName =  params['username']
    }
    )
  }

}
