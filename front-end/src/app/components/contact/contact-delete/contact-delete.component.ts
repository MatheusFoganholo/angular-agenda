import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Contact } from './../contact.model';
import { ContactService } from './../contact.service';

@Component({
  selector: 'app-contact-delete',
  templateUrl: './contact-delete.component.html',
  styleUrls: ['./contact-delete.component.css']
})
export class ContactDeleteComponent implements OnInit {

  contact: Contact = {
    name: '',
    ddd: null,
    number: null,
    address: ''
  }

  constructor(private contactService: ContactService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.contactService.readById(id).subscribe(contact => {
      this.contact = contact;
    });
  }

  // Method to delete the contact
  deleteContact(): void {
    this.contactService.delete(this.contact.id.toString()).subscribe(() => {
      this.contactService.showMessage('Contato excluído com sucesso!');
      this.router.navigate(['/contacts']);
    });
  }

  // Cancel and go back to the contact page
  cancel(): void {
    this.router.navigate(['/contacts']);
  }

}
