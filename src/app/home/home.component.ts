import { Component } from '@angular/core';
import { menJeans } from 'src/Data/Men/men_jeans';
import { lengha_page1 } from 'src/Data/Women/lenghaCholi';
import { gounsPage1 } from 'src/Data/Gouns/gouns';
import { mens_kurta } from 'src/Data/Men/mens_kurta';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  menJeans: any;
  WomanGouns: any;
  Lengha: any;
  MensKurt: any;
  MensShoes: any;
  lehngacholi: any;

  ngOnInit() {
    this.menJeans = menJeans.slice(0, 5);
    this.WomanGouns = gounsPage1.slice(0, 5);
    this.lehngacholi = lengha_page1.slice(0, 5);
    this.MensKurt=mens_kurta.slice(0,5);
    this.Lengha=this.lehngacholi.slice(0,5);
  }
}
