import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Contact } from './contact.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  baseUrl: string = "http://localhost:3001/contacts";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'Fechar', {
      duration: 4000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  // Create Contact Method
  create(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.baseUrl, contact);
  }

  // Read Contacts Method
  read(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.baseUrl);
  }

  // Read Contact By Id Method
  readById(id: string): Observable<Contact> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Contact>(url);
  }

  // Update Contact Method
  update(contact: Contact): Observable<Contact> {
    const url = `${this.baseUrl}/${contact.id}`
    return this.http.put<Contact>(url, contact);
  }
}
