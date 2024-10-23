import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CommonModule } from "@angular/common";
import { ConvertPipe } from './convert.pipe';

@NgModule({
  declarations: [AppComponent, ConvertPipe],
  imports: [BrowserModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
