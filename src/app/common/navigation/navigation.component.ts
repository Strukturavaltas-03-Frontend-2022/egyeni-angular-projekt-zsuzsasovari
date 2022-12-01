import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  phrase: FormControl = new FormControl('');

  constructor( private service: ProductService,) { }

  ngOnInit(): void {
    this.phrase.valueChanges.subscribe(
      actualValue => this.service.searchPhrase$.next(actualValue)
    );
  }
 
}
