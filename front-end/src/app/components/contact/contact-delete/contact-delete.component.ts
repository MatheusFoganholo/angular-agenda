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

  contact: Contact;

  constructor(private contactService: ContactService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.contactService.readById(id).subscribe(contact => {
      this.contact = contact;
    });
  }

  deleteContact(): void {
    this.contactService.delete(this.contact.id.toString()).subscribe(() => {
      this.contactService.showMessage('Contato excluído com sucesso!');
      this.router.navigate(['/contacts']);
    });
  }

  cancel(): void {
    this.router.navigate(['/contacts']);
  }

}
