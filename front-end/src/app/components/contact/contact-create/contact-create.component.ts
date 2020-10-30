import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from './../contact.model';
import { ContactService } from './../contact.service';


@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {

  contact: Contact = {
    name: '',
    ddd: null,
    number: null,
    address: ''
  }

  constructor(private contactService: ContactService, private router: Router) { }

  ngOnInit(): void {}

  saveContact(): void {
    this.contactService.create(this.contact).subscribe(() => {
      this.contactService.showMessage('Contato cadastrado com sucesso!');
      this.router.navigate(['/contacts']);

    });
  }

  cancel(): void {
    this.router.navigate(['/contacts']);
  }

}
