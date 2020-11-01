import { Component, OnInit } from '@angular/core';
import { ContactService } from './../contact.service';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-contact-read',
  templateUrl: './contact-read.component.html',
  styleUrls: ['./contact-read.component.css']
})
export class ContactReadComponent implements OnInit {

  contacts: Contact[];
  displayedColumns: string[] = ['id', 'name', 'number', 'address', 'action']

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contactService.read().subscribe(contacts => {
      this.contacts = contacts;
    })
  }

}
