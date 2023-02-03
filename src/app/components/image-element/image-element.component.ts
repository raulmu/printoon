import { Component, Input, OnInit } from '@angular/core';
import { Image } from '../../models/image';
import { AngularDeviceInformationService } from 'angular-device-information';

@Component({
  selector: 'app-image-element',
  templateUrl: './image-element.component.html',
  styleUrls: ['./image-element.component.scss'],
})
export class ImageElementComponent implements OnInit {
  @Input() item: Image = {
    title: 'Loading...',
    url: '',
    orientation: 'portrait',
  };
  deviceInfo = null;

  constructor(
    private deviceInformationService: AngularDeviceInformationService
  ) {}

  ngOnInit() {}

  selectItem(e: Event) {
    console.log({e});
    this.printIt();
  }

  private printIt() {
    let win = window.open();
    self.focus();
    if (win != null) {
      let doc = win.document.open();
      doc.write('<html>');
      doc.write(`<head>
      <title>PrintTool: ${this.item.title}</title>
      <style>
      html,body{
        margin:0;
        height:100%;
      }
      img{
        display:block;
        height:100%; 
        object-fit: cover;
      }
      .close-button {
        display: flex;
        justify-content: center;
      }
      .button {
        border: none;
        color: white;
        padding: 1em 2em;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 2em;
        margin: 0.5em 0.3em;
        transition-duration: 0.4s;
        cursor: pointer;
      }
      .button-primary {
        background: #c2185b;
        color: #fff;
        border-radius: 1em;
      }
      
      .button-primary:hover {
        background-color: #c2185b;
        color: #ddd;
      }
      @page {
        size: ${this.item.orientation};
      }
      @media print {
        .not-print {
          display: none;
        }
        @page {
            margin-bottom: 0;
        }
      }
      </style><head>`);
      doc.write('<body>');
      doc.write(
        '<div class="close-button not-print"><button class="button button-primary" onclick="window.close()">Close</button></div>'
      );
      doc.write(
        `<div style="margin: 0 auto; width: fit-content;"><img src="${this.item.url}" alt=""></div>`
      );
      doc.write('</body></html>');
      doc.close();
      win.onload = () => {
        if(win != null)
        {
          win.print();
          this.deviceInformationService.isDesktop() && win.close();
        }
      };
    }
  }
}

// https://www.vectorizer.io/
