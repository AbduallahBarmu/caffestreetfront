import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Product } from '../../products/models/productModels';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  products: Product[] = [];

  createProductServ(form: NgForm): Promise<Product[]> {
    return firstValueFrom(
      this.http.post<Product[]>(environment.baseApi + 'products', form)
    );
  }

  updateProductServ(id: string, product: any): Promise<Product[]> {
    return firstValueFrom(
      this.http.patch<Product[]>(
        environment.baseApi + 'products/' + id,
        product
      )
    );
  }

  deleteProductServ(id: string): Promise<void> {
    console.log('delete');
    debugger;
    return firstValueFrom(
      this.http.delete<void>(environment.baseApi + 'products/' + id)
    );
  }
}
