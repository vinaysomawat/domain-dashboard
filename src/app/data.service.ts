import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Toast } from './toaster/toaster.component';
import { domain } from './home/home.component';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  addNewSitePopup: Subject<boolean> = new Subject<boolean>();
  messageService: Subject<Toast> = new Subject<Toast>();
  refreshDomain: Subject<domain> = new Subject<domain>();

  constructor(private http: HttpClient) { }
  
  getDomains(): Observable<any> {
    return this.http.get('http://localhost:3000/domains');
  }

  addNewSite(showPopUp: boolean) {
    this.addNewSitePopup.next(showPopUp);
  }

  showMessage(messageObj: Toast) {
    this.messageService.next(messageObj);
  }
  
  refreshDomains(newDomain: domain) {
    this.refreshDomain.next(newDomain);
    console.log('post method', newDomain);
    return this.http.post('http://localhost:3000/domains', newDomain);
  }
}
