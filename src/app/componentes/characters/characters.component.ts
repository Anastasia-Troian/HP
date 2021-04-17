import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiCollection } from 'src/app/models/apiCollection';
import { CharactersDto } from 'src/app/models/charactersDto';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: Array<CharactersDto> = new Array;

  constructor(private charactersService: CharactersService,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.loadCharacters();
    setTimeout( () => {
      this.spinner.hide();
    }, 2000)
  }

  loadCharacters()
  {
    this.charactersService.getCharacters().subscribe( (res: Array<CharactersDto>) => {
      console.log(res);
      if(res!=null){
        this.characters = res;
        console.log(res);
      }
    });
  }


}
