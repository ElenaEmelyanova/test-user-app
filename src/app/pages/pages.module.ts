import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from "./pages-routing.module";
import { PagesComponent } from "./pages.component";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations:[
    PagesComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    PagesRoutingModule
  ]
})
export class PagesModule {
}