import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../models/Contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {  
  //public contacts?: Contact[];
  constructor(private http: HttpClient) { }

  getAllContacts = (): Observable<Contact[]> => {
    let pageNumber = 1;
    let pageSize = 10;

    return this.http.get<Contact[]>(`/api/contact/${pageNumber}/${pageSize}`);

    //return this.http.get<Contact[]>('contact/1/10');
    //return this.http.get<Contact[]>('https://localhost:5001/api/contact/1/10');
  }

  getPersonContacts = (personId: number): Observable<Contact[]> => {
    return this.http.get<Contact[]>(`/api/contact/${personId}`);
  }

  getContactByContactId = (contactId: number): Observable<Contact> => {
    return this.http.get<Contact>(`/api/contact/${contactId}`);
  }

  createContact = (contact: Contact): Observable<Contact> => {
    return this.http.post<Contact>('/api/contact', contact);
  }
}
