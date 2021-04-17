import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CharactersDto } from 'src/app/models/charactersDto';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-gryffindor',
  templateUrl: './gryffindor.component.html',
  styleUrls: ['./gryffindor.component.css']
})
export class GryffindorComponent implements OnInit {


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
    this.charactersService.getStudentsHouse("gryffindor").subscribe( (res: Array<CharactersDto>) => {
      console.log(res);
      if(res!=null){
        this.students = res;
        console.log(res);
      }
    });
  }
}
