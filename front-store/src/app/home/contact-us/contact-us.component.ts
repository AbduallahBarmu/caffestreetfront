import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { HomeService } from '../home.service';
import { Router } from '@angular/router';
import { Contact } from '../contact';




@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})


export class ContactUsComponent implements OnInit {

  // model = new Contact() ; 
  // submitted:boolean = false; 
  // error = {}

  constructor(private router:Router , private service : HomeService){}

  ngOnInit() {}
  
  // onSubmit(){
  //   this.submitted = true
  //   return this.service.contactForm(this.model).subscribe(
  //     data => this.model = data, 
  //     error => this.error =error
  //   );
  // }

  // gotoHome() {
  //   this.router.navigate(['/']);
  // }


}
