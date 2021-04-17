import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CharactersDto } from 'src/app/models/charactersDto';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-hufflepuff',
  templateUrl: './hufflepuff.component.html',
  styleUrls: ['./hufflepuff.component.css']
})
export class HufflepuffComponent implements OnInit {

  
  students: Array<CharactersDto> = new Array;

  constructor(private charactersService: StudentsService,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.loadStudents();
    setTimeout( () => {
      this.spinner.hide();
    }, 2000)
  }

  loadStudents()
  {
    this.charactersService.getStudentsHouse("hufflepuff").subscribe( (res: Array<CharactersDto>) => {
      console.log(res);
      if(res!=null){
        this.students = res;
        console.log(res);
      }
    });
  }
}
