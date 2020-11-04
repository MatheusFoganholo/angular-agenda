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
  ngOnInit(): void { }

  // Saving contact at the back-end (method)
  saveContact(): void {
    if (this.contact.name === '' || this.contact.ddd === null || this.contact.number === null || this.contact.address === '') {
      this.contactService.showMessage('Preencha todos os campos!', true)
    } else {
      this.contactService.create(this.contact).subscribe(() => {
        this.contactService.showMessage('Contato cadastrado com sucesso!');
        this.router.navigate(['/contacts']);
      });
    }
  }

  // Cancel and back to the contacts page
  cancel(): void {
    this.router.navigate(['/contacts']);
  }
}
