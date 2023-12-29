import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AboutComponent } from "./about/about.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { PopularMenuComponent } from "./popular-menu/popular-menu.component";
import { DeliveryComponent } from "./delivery/delivery.component";
import { SharedModule } from "../shared/shared.module";
import { HeroComponent } from "./hero/hero.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AboutComponent,
    ContactUsComponent,
    PopularMenuComponent,
    DeliveryComponent,
    HeroComponent
  ],
  imports: [CommonModule, SharedModule, FormsModule, ReactiveFormsModule],
  exports: [
    AboutComponent,
    ContactUsComponent,
    PopularMenuComponent,
    DeliveryComponent,
    HeroComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule {}
