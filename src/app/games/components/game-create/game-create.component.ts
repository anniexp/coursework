import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { Game } from '../../models/game.model';
import { GamesServise } from '../../services/games.services';

@Component({
  selector: 'lq-game-create',
  templateUrl: './game-create.component.html',
  styleUrls: ['./game-create.component.scss']
})
export class GameCreateComponent implements OnInit {


  formGroup: FormGroup | undefined;
  id: number;
  game: unknown;




  

  constructor(
   private gamesService: GamesServise,
              private router: Router,
              private route: ActivatedRoute,
              private fb: FormBuilder) {
    const serializableState: string | any = this.route.snapshot.paramMap.get('id');
    this.id = serializableState;
    console.log(this.id)
    //return serializableState !==null ||serializableState === undefined ? this.route.snapshot.paramMap.get('id'):undefined;
              
              }
    
    
          
    
/*
  ngOnInit(): void {
    this.buildForm();
    if(this.id){
console.log("edit mode")
this.gamesService.getById$(this.id).pipe(


)
    }
else
{
  console.log("create mode")


    }
  
  }*/
  
  ngOnInit(): void {
   if (this.id) {
      this.gamesService.getById$(this.id).pipe(
        take(1)
      ).subscribe((response) => {
        this.game = response;
        this.buildForm(response);
      });
    } else {
      this.buildForm();
    }
    //this.buildForm();
  }

onSubmit(): void {

 
}

  private buildForm(game?:Game): void{
if(!game){
game = new Game();

}

this.formGroup = this.fb.group({
        title:[ game.title, Validators.required ] ,   
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


