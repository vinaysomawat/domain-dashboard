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
    id: '999',
    domain: '',
    storage: '',
    usedStorage: '',
    monthlyVisitor: '',
    status: '',
    subDomain: [],
  };
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.addNewSitePopup.subscribe((data) => {
      if (data) {
        this.isModalVisible = true;
      }
    });
  }
  handleOutsideEvent() {
    this.isModalVisible = false;
    this.payload = {
      id: '999',
      domain: '',
      storage: '',
      usedStorage: '',
      monthlyVisitor: '',
      status: '',
      subDomain: [],
    };
  }
  saveDomain() {
    this.dataService.refreshDomains(this.payload);
    this.dataService.showMessage(
      new Toast('Success', 'Domain Added Successfully')
    );
    this.payload = {
      id: '999',
      domain: '',
      storage: '',
      usedStorage: '',
      monthlyVisitor: '',
      status: '',
      subDomain: [],
    };
    this.isModalVisible = false;
  }
}
