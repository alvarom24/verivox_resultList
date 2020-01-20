import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ResultListServiceService } from "./shared/services/result-list-service.service";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [ResultListServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
