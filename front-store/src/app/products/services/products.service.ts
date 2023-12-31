import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/productModels';
import { cartProduct } from '../models/cartModels';



@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  public search  = new BehaviorSubject<string>("") ;
  // ProductsLocalStorage: cartProduct[] = [] ; 
  
  constructor(private http: HttpClient) {}


  getAllProductsServ(): Promise<Product[]> {
    return firstValueFrom(
      this.http.get<Product[]>(environment.baseApi + 'products')
    );
  }

  getProductByIdServ(id: any): Promise<Product[]> {
    return firstValueFrom(
      this.http.get<Product[]>(environment.baseApi + 'products/' + id)
    );
  }






  // getAllCategories(): Promise<Product[]> {
  //   return firstValueFrom(
  //     this.http.get<Product[]>(environment.baseApi + 'products/categories')
  //   );
  // }

  // getProductsByCategory(keyword: string): Promise<Product[]> {
  //   return firstValueFrom(
  //     this.http.get<Product[]>(
  //       environment.baseApi + 'products/category/' + keyword
  //     )
  //   );
  // }

  // uploadImage(file:any):Observable<any>{
  //   const formData = new FormData()
  //   formData.append('file', file, file.name)
  //    // Make http post request over api
  //     // with formData as req
  //     return this.http.post(environment.baseApi , formData)
  // }





}
