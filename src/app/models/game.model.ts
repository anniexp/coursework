export class Game {
    
        id : number ;
        title: string;
       // categoryId: number;
        language: string;
        price: number;
        discount: number;
        rating : number | undefined;
        isOriginalityCertificateIncluded: boolean;
        posterImgUrl: string ;
        publishAt?: Date ;
        numberOfPlayers : string;
        timeOfAGameInMinutes : string;

        //is ir base, expansion or dlc
        typeOfGame : string ;
      
       // category: Category;
      
        constructor() {
          this.id = 0;
          this.title ='';
          this.language = '';
          this.price = 0;
          this.discount = 0;
          this.isOriginalityCertificateIncluded = true;
          this.publishAt ;
          this.posterImgUrl = '';
          this.numberOfPlayers = ''
          this.timeOfAGameInMinutes = ''
          this.typeOfGame = ''
        }
      }

