import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductsService } from "../../services/products.service";
import { Product } from "../../models/productModels";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-products-details",
  templateUrl: "./products-details.component.html",
  styleUrls: ["./products-details.component.scss"]
})
export class ProductsDetailsComponent implements OnInit {
  id: string | null;
  data: any = {};
  loading: boolean = false;
  baseApi: string = "";

  // addButton: boolean = false;
  // amount: number = 1;
  // @Input() data!: Product;
  // @Output() productData = new EventEmitter<any>(); 


  constructor(
    private route: ActivatedRoute,
    private service: ProductsService,
  ) {
    // we catch the ID of the product item
    this.id = this.route.snapshot.paramMap.get("id");
    console.log(this.id), (this.baseApi = environment.baseApi);
  }

  ngOnInit(): void {
    this.getProductById();
  }

  // send Id to the URL
  async getProductById() {
    this.loading = true;
    this.data = await this.service.getProductByIdServ(this.id);
    this.loading = false;
  }

  // async handleBuyNowClick() {
  //   this.productData.emit({item:this.data , quantity: this.amount })
  // }

  
}
