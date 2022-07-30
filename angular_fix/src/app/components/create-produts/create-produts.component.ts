import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-create-produts',
  templateUrl: './create-produts.component.html',
  styleUrls: ['./create-produts.component.css']
})
export class CreateProdutsComponent implements OnInit {
  productForm: FormGroup;
  
  titulo:string= 'crear Producto';
  id:string | null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private prodServ: ProductService,
    private aRouter: ActivatedRoute
    )
    {
    this.productForm = this.fb.group({
      product: ['',Validators.required],
      category: ['', Validators.required],
      adress: ['', Validators.required],
      prize: ['', Validators.required],
    })

    this.id = this.aRouter.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.editing();
  }

  addProduct(){
    console.log(this.productForm)

    const PRODUCT: Product ={
      name: this.productForm.get('product')?.value,
      category: this.productForm.get('category')?.value,
      adress: this.productForm.get('adress')?.value,
      prize: this.productForm.get('prize')?.value,
    }

    if(this.id!==null){

      this.prodServ.updateProduct(this.id,PRODUCT).subscribe(data =>{
        this.toastr.info('product updated','recorded!')
        this.router.navigate(['/']);
        
      }, error =>{
        console.log(error);
        this.productForm.reset();
      })

    }else{

      console.log(PRODUCT)
      this.prodServ.saveProducts(PRODUCT).subscribe(data =>{
        this.toastr.success('product saved','recorded!')
        this.router.navigate(['/']);
        
      }, error =>{
        console.log(error);
        this.productForm.reset();
      })

    }
    
  
  
  }
  
  editing(){
    if(this.id!==null){
      this.titulo = 'Editar Producto';
      this.prodServ.getProductById(this.id).subscribe(data=>{
        this.productForm.setValue({
          product: data.name,
          category:data.category,
          adress:data.adress,
          prize:data.prize
        })
      })
    }
  }


}

//https://www.youtube.com/watch?v=aLbDBaFYoLY
