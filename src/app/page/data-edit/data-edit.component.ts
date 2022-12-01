import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-data-edit',
  templateUrl: './data-edit.component.html',
  styleUrls: ['./data-edit.component.scss']
})
export class DataEditComponent implements OnInit {

  product: Product = new Product();

  file: File | null = null;

  constructor( private service: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      if(param['id'] !== 'new')
       this.service.get(param['id']).subscribe((product) => this.product = product);
    })
  }

  imginputchange(event: any) {
    this.file = event.target.files[0];
  }

  onSave() {
    if (this.product.id === -1){
      this.service.create(this.product, this.file).subscribe((product) => this.router.navigateByUrl('/home'));
    } else {
      this.service.update(this.product, this.file).subscribe((product) => this.router.navigateByUrl('/home'));
    }
  }

  onDelete() {
    this.service.delete(this.product).subscribe((product) => this.router.navigateByUrl('/home'));
  }
}
