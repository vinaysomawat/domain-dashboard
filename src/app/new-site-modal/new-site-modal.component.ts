import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { domain } from '../home/home.component';
import { Toast } from '../toaster/toaster.component';

@Component({
  selector: 'new-site-modal',
  templateUrl: './new-site-modal.component.html',
  styleUrls: ['./new-site-modal.component.css'],
})
export class NewSiteModalComponent implements OnInit {
  isModalVisible: boolean = false;
  payload: domain = {
    id: localStorage.getItem('id'),
    domain: '',
    storage: '',
    usedStorage: '',
    montlyVisitor: '',
    monthlyVisitorCapacity: '',
    availableDomains: '',
    usedDomains: '',
    status: '',
    subdomain: [],
  };
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.addNewSitePopup.subscribe((data) => {
      if (data) {
        this.isModalVisible = true;
      }
    });
  }

  closeModal() {
    this.isModalVisible = false;
    this.resetPayload();
  }

  resetPayload() {
    this.payload = {
      id: localStorage.getItem('id'),
      domain: '',
      storage: '',
      usedStorage: '',
      montlyVisitor: '',
      monthlyVisitorCapacity: '',
      availableDomains: '',
      usedDomains: '',
      status: '',
      subdomain: [],
    };
  }
  saveDomain() {
    this.dataService.refreshDomains(this.payload).subscribe((res) => {
      localStorage.setItem('id', (parseInt(localStorage.getItem('id')) + 1).toString());
    });
    this.dataService.showMessage(
      new Toast('Success', 'Domain Added Successfully')
    );
    this.resetPayload();
    this.isModalVisible = false;
  }
}
