import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
export class domain {
  id: string;
  domain: string;
  storage: string;
  usedStorage: string;
  montlyVisitor: string;
  monthlyVisitorCapacity: string;
  availableDomains: string;
  usedDomains: string;
  status: string;
  subdomain: any[];
}
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('filterInput') filterInput: HTMLInputElement;
  public headers = [
    {
      field: 'domain',
      header: 'Domain & Plan Name',
    },
    {
      field: 'storage',
      header: 'Storage',
    },
    {
      field: 'monthlyVisitor',
      header: 'Monthly Visitor',
    },
    {
      field: 'domainTag',
      header: 'Domains',
    },
    {
      field: 'status',
      header: 'Status',
    },
  ];
  domains: domain[];
  searchTimeOut: any = null;
  constructor(private service: DataService) {}

  ngOnInit(): void {
    this.fetchDomains();

    this.service.refreshDomain.subscribe((data: domain) => {
      this.domains.push(data);
    });
  }

  fetchDomains() {
    this.service.getDomains().subscribe((data: domain[]) => {
      this.domains = data;
      console.table(this.domains);
      // maintaining a new id in localstorage for every new element added to db
      localStorage.setItem('id', (this.domains.length + 1).toString());
    });
  }

  setBar(data: domain) {
    let styles = {
      width: (parseInt(data.usedStorage) / parseInt(data.storage)) * 100 + '%',
    };
    return styles;
  }

  expandCollapse(data) {
    if (data.subdomain.length > 0) {
      data.isOpen = !data.isOpen;
    }
  }

  globalFilterHandler(event, waitTimeInMillis = 1000) {
    if (this.searchTimeOut) {
      clearTimeout(this.searchTimeOut);
      this.searchTimeOut = null;
    }
    this.searchTimeOut = setTimeout(() => {
      if (
        event == this.filterInput.value ||
        (event == '' && !this.filterInput.value)
      ) {
        return;
      }
      this.filterInput.value = event;
      
      let filteredData = this.domains.filter((data) => {
        let output = false;
        for (let obj of Object.entries(data)) {
          if (String(obj[1]).toLowerCase().includes(event.toLowerCase())) {
            output = true;
            break;
          }
        }
        return output;
      });
      this.domains = [...filteredData];
    }, waitTimeInMillis);
  }

  addNewSite() {
    this.service.addNewSite(true);
  }
}
