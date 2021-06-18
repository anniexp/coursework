import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lq-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit {
//ActivatedRoute pazi informacia za koi component e zareden v momenta, skriti danni se podavat
  constructor(private route: ActivatedRoute) { 
//snapshotva tekushto id xd
    console.log(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
  }

}
