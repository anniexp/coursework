import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Game } from '../../models/game.model';

@Component({
  selector: 'lq-game-create',
  templateUrl: './game-create.component.html',
  styleUrls: ['./game-create.component.scss']
})
export class GameCreateComponent implements OnInit {


  formGroup?: FormGroup;

  

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
    
  }
onSubmit(): void {

 
}

  private buildForm(): void{
this.formGroup = this.fb.group({
        title:[ null, Validators.required ] ,   
        posterImgUrl:null, 
       categoryId: 0,
        language:[ null, Validators.required ] ,
        price: [ 0, Validators.required ] ,
        discount:[0, [Validators.min(0),Validators.max(100)]],
        rating : 0 ,
        isOriginalityCertificateIncluded: false,
       
        //publishAt:  ,
        numberOfPlayers : null,
        timeOfAGameInMinutes : null,

        //is ir base, expansion or dlc
        typeOfGame : null 


})

  }
}
