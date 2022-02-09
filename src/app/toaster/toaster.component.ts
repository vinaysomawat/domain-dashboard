import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
export class Toast {
  // messageType:string;
  messageTitle: string;
  messageBody: string;
  constructor(messageTitle: string, messageBody: string) {
    this.messageTitle = messageTitle;
    this.messageBody = messageBody;
  }
}
@Component({
  selector: 'toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css']
})
export class ToasterComponent implements OnInit {
  showMessage: boolean = false;
  timer: any;
  toast: Toast;
  constructor(private dataShare: DataService) { }

  ngOnInit(): void {
    this.dataShare.messageService.subscribe((data: Toast) => {
      console.log('toastdata', data);
      if (this.timer) {
        clearTimeout(this.timer);
        this.showMessage = false;
      }
      this.showMessage = true;
      this.toast = data;
      this.timer = setTimeout(() => {
        this.showMessage = false;
      }, 7000);
    });
  }
  close() {
    this.showMessage = false;
  }

}
