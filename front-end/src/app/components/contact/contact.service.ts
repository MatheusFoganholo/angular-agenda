import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Contact } from './contact.model';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  baseUrl: string = "http://localhost:3001/contacts";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  // Showing status message
  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'Fechar', {
      duration: 4000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  // Create Contact Method
  create(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.baseUrl, contact).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  // Read Contacts Method
  read(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  // Read Contact By Id Method
  readById(id: string): Observable<Contact> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Contact>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  // Update Contact Method
  update(contact: Contact): Observable<Contact> {
    const url = `${this.baseUrl}/${contact.id}`;
    return this.http.put<Contact>(url, contact).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  // Delete Contact Method
  delete(id: string): Observable<Contact> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Contact>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  // Function to handle with error
  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro inesperado no back-end!', true);
    return EMPTY;
  }
}