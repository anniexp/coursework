import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { take } from 'rxjs/operators';
import { Game } from '../../models/game.model';
import { GamesServise } from '../../services/games.services';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'lq-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {
  games: Game[] = [];
  selectedGame!: Game;
  modalRef!: BsModalRef;
  listType = 'table';


  constructor(private gameService: GamesServise,
    private bsModalService: BsModalService,
    private toastrService: ToastrService
  ) {

    //this.games = this.gameService.getAll();
    this.gameService.getAll$().subscribe((response => {

      this.games = response;
    }))

  }

  ngOnInit(): void {

    this.getAlls();

  }
  private getAlls(): void {
    this.gameService.getAll$().pipe(
      take(1)
    ).subscribe((response) => {
      this.games = response;
    });
  }

  openDeleteDialog(template: TemplateRef<any>, game: Game): void {
    this.selectedGame = game;
    this.modalRef = this.bsModalService.show(template);
  }

  deleteGame(): void {
    this.gameService.delete$(this.selectedGame.id).pipe(
      take(1)
    ).subscribe(() => {
      this.getAlls();
      this.toastrService.success('Game was successfully deleted.', 'Success');
      this.modalRef.hide();
    }, (response: HttpErrorResponse) => {
      this.toastrService.error(response.message, 'Error', {
        disableTimeOut: true,
        closeButton: true
      });
    });
  }

 

}

