import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from './../../components/template/header/header.service';

@Component({
  selector: 'app-contact-crud',
  templateUrl: './contact-crud.component.html',
  styleUrls: ['./contact-crud.component.css']
})
export class ContactCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Contatos',
      icon: 'contact_page',
      routeUrl: '/contacts'
    }
  }

  ngOnInit(): void {
  }

  navigateToContactCreate(): void {
    this.router.navigate(['/contacts/create']);
  }

}
