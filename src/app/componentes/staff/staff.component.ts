import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CharactersDto } from 'src/app/models/charactersDto';
import { CharactersService } from 'src/app/services/characters.service';
import { StaffService } from 'src/app/services/staff.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  students: Array<CharactersDto> = new Array;

  constructor(private charactersService: StaffService,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.loadStaff();
    setTimeout( () => {
      this.spinner.hide();
    }, 2000)
  }

  loadStaff()
  {
    this.charactersService.getStaff().subscribe( (res: Array<CharactersDto>) => {
      console.log(res);
      if(res!=null){
        this.students = res;
        console.log(res);
      }
    });
  }
}
