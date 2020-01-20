import { Component, OnInit } from "@angular/core";
import { ResultListServiceService } from "./shared/services/result-list-service.service";
import { resultModel } from "./shared/models/result.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  public title: string;
  public resultList: resultModel[];
  public isMobile: boolean;
  public isTablet: boolean;

  constructor(public resultListService: ResultListServiceService) {
    this.isMobile = /android|webos|iphone|ipod|blackberry|windows phone/.test(
      navigator.userAgent.toLowerCase()
    );
    this.isTablet = /ipad/.test(navigator.userAgent.toLowerCase());
  }

  public async ngOnInit() {
    this.resultList = await this.resultListService.getDataList();
    console.log(this.resultList);
  }

  public getRedirectLink(item: resultModel): string {
    if (this.isMobile && item.signup.responsive) {
      return item.signup.responsive.url;
    }

    if (!this.isMobile && item.signup.desktop) {
      return item.signup.desktop.url;
    }

    return "";
  }
}
