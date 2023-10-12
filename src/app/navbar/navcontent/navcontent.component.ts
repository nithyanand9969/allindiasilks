import { Component, Input } from '@angular/core';
import { navigation } from './nav-contents';

@Component({
  selector: 'app-navcontent',
  templateUrl: './navcontent.component.html',
  styleUrls: ['./navcontent.component.scss']
})
export class NavcontentComponent {

category:any;
@Input() selectedSection:any;


ngOnInit() {
  this.category=navigation;
  console.log("selected section" , this.category);
 
  
}


}
