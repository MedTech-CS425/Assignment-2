import { ApiService } from './../../service/api.service';
import { Router } from '@angular/router';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  submitted = false;
  productForm: FormGroup;
  CategoryProfile: any = ['Fashion', 'Men', 'Girls', 'Women', 'Accessories']
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) {
    this.mainForm();
  }


  ngOnInit() {
  }

  mainForm() {
    this.productForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      category: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    });
  }

  updateProfile(e){
    this.productForm.get('category').setValue(e, {
      onlySelf: true
    });
  }

  onSubmit() {
    this.submitted = true;
    if (!this.productForm.valid) {
      return false;
    } else {
      this.apiService.createProduct(this.productForm.value).subscribe(
        (res) => {
          console.log('Employee successfully created!');
          this.ngZone.run(() => this.router.navigateByUrl('/customer/product-list'));
        }, (error) => {
          console.log(error);
        });
    }
  }

  get myForm() {
    return this.productForm.controls;
  }

}
