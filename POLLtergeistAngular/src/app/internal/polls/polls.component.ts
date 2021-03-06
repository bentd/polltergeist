import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';
import { InternalheaderService } from 'src/app/services/internalheader.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-polls',
  templateUrl: '../sharedinternal/sharedinternal.component.html',
  styleUrls: ['./polls.component.scss','../sharedinternal/sharedinternal.component.scss']
})
export class PollsComponent implements OnInit {

  titlePage: string = "Polls";
  type: string = "Poll";

  //sample data
  samples= [{sampleName: "poll1"}, {sampleName: "poll2"}, {sampleName: "poll3"}, {sampleName: "poll4"}, {sampleName: "poll5"},
  //{sampleName: "poll6"}, {sampleName: "poll7"}, {sampleName: "poll8"}, {sampleName: "poll9"}, {sampleName: "poll10"},
  //{sampleName: "poll11"}, {sampleName: "poll12"}
  ];

  constructor(private router: Router, public internalNav: InternalheaderService, public nav: HeaderService) { }

  ngOnInit(): void {
    this.nav.hide(); //hides homepage navbar
    this.internalNav.show(); //shows internal elements navbar
  }

  onNew(){
    this.router.navigate(['pollspage']);
  }

  onExisting(){
    this.router.navigate(['drafts']);
  }

  //on click poll square changes color
  onSample(event) {
    var target = event.target || event.srcElement || event.currentTarget;
    target.style.backgroundColor= '#023E7D';
    target.style.color = '#FFFFFF'
   // alert("route to poll");
    //will pass in link to poll and redirect to the poll
    this.router.navigate(['poll']);
  }

}
