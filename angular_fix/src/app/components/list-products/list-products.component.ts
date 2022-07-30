import { Component, OnInit } from '@angular/core';
import { Toast, ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  products: Product[]=[];

  constructor(
    private productServ: ProductService,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.listProducts();
  }

  listProducts(){
    this.productServ.getProducts().subscribe(data=>{
      console.log(data);
      this.products=data;
    },error=>{
      console.log(error);
    }
    )
  }

  eraseProduct(id:any){
    this.productServ.eraseProducts(id).subscribe(data=>{
      console.log(data);
      this.toastr.error('product was erased successfully', 'deleted')
    },error=>{
      console.log(error);
    }
    )
  }

}
