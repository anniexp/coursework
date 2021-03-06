import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { Game } from '../../models/game.model';
import { GamesServise } from '../../services/games.services';
import { GcategoriesServise } from '../../../gcategories/services/gcategories.services';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'lq-game-create',
  templateUrl: './game-create.component.html',
  styleUrls: ['./game-create.component.scss']
})
export class GameCreateComponent implements OnInit {

  formGroup!: FormGroup;
  id!: number;
  game: Game = new Game;
  categories!: import("c:/Users/Lenovo/Desktop/Angular coursework/coursework/src/app/gcategories/models/gcategory.model").Gcategory[];
  


  constructor(
   private gamesService: GamesServise,
   private categoriesService: GcategoriesServise,
   private toastrService: ToastrService,
              private router: Router,
              private route: ActivatedRoute,
              private fb: FormBuilder) {
    /*const serializableState: string | any = this.route.snapshot.paramMap.get('id');
    this.id = serializableState;
    console.log(this.id)*/


    //assisstants solution
    if(this.route.snapshot.paramMap.get('id'))
    {
      this.id = +this.route.snapshot.params.id;
      console.log(this.id);
      console.log(typeof this.id);
    }
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

    this.categoriesService.getAll().pipe(
      take(1)
    ).subscribe((response) => {
      this.categories = response;
    });
    //this.buildForm();
  }

 
 

onSubmit(): void {
  if (this.formGroup.invalid) {
    this.formGroup.markAllAsTouched();

    return;
  }

  const body: Game = {
    ...this.game,
    ...this.formGroup.value
  };

  delete body.category;

  this.gamesService.save$(body).pipe(
    take(1)
  ).subscribe(() => {
    this.toastrService.success('Game was successfully saved.', 'Success');
    this.router.navigate(['games']);
  });
}


  private buildForm(game?:Game): void{
if(!game){
game = new Game();

}
console.log(game);

let publishAt;
    if (game.publishAt) {
      publishAt = new Date(game.publishAt);
    } else {
      publishAt = new Date();
    }

this.formGroup = this.fb.group({
        title:[ game.title, Validators.required ] ,   
        posterImgUrl:game.posterImgUrl, 
        categoryId: [game.categoryId, Validators.required],
        language:[ game.language, Validators.required ] ,
        price: [ game.price, Validators.required ] ,
        discount:[game.discount, [Validators.min(0),Validators.max(100)]],
        rating : game.discount ,
        isOriginalityCertificateIncluded: game.isOriginalityCertificateIncluded,
       
        //publishAt:  ,
        numberOfPlayers : game.numberOfPlayers,
        timeOfAGameInMinutes : game.timeOfAGameInMinutes,
        publishAt: [game.publishAt, Validators.required],

        //is ir base, expansion or dlc
        typeOfGame : game.typeOfGame 


})

  }
}


