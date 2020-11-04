import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from './../contact.service';
import { Contact } from './../contact.model';

@Component({
  selector: 'app-contact-update',
  templateUrl: './contact-update.component.html',
  styleUrls: ['./contact-update.component.css']
})

export class ContactUpdateComponent implements OnInit {

  contact: Contact = {
    name: '',
    ddd: null,
    number: null,
    address: ''
  }

  constructor(private contactService: ContactService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id: string = this.route.snapshot.paramMap.get('id');
    this.contactService.readById(id).subscribe(contact => {
      this.contact = contact;
    });
  }

  // Method to update the contact
  updateContact(): void {
    if (this.contact.name === '' || this.contact.ddd === null || this.contact.number === null || this.contact.address === '') {
      this.contactService.showMessage('Preencha todos os campos!', true);
    } else {
      this.contactService.update(this.contact).subscribe(() => {
        this.contactService.showMessage('Contato atualizado com sucesso!');
        this.router.navigate(['/contacts']);
      });
    }
  }

  // Cancel and go back to the contact's list
  cancel(): void {
    this.router.navigate(['/contacts']);
  }
}
