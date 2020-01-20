import { Component, OnInit } from "@angular/core";
import { ResultListServiceService } from "./shared/services/result-list-service.service";
import { resultModel } from "./shared/models/result.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  host: {
    "(window:resize)": "onResize($event)"
  }
})
export class AppComponent implements OnInit {
  public title: string;
  public resultList: resultModel[];
  public isMobile: boolean;
  public isTablet: boolean;
  public activeFilter: string;

  constructor(public resultListService: ResultListServiceService) {
    this.isMobile = /android|webos|iphone|ipod|blackberry|windows phone/.test(
      navigator.userAgent.toLowerCase()
    );
    this.isTablet = /ipad/.test(navigator.userAgent.toLowerCase());
  }

  public async ngOnInit(): Promise<void> {
    this.activeFilter = "";
    this.fetchResults();
  }

  public onResize(event): void {
    this.isMobile = /android|webos|iphone|ipod|blackberry|windows phone/.test(
      navigator.userAgent.toLowerCase()
    );
    this.isTablet = /ipad/.test(navigator.userAgent.toLowerCase());
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

  public sortBy(criteria: string): void {
    this.activeFilter = criteria;
    switch (criteria) {
      case "upload":
        this.resultList.sort((a, b) =>
          a.contractTerm.uploadSpeed.amount > b.contractTerm.uploadSpeed.amount
            ? 1
            : -1
        );
        break;
      case "download":
        this.resultList.sort((a, b) =>
          a.contractTerm.downloadSpeed.amount >
          b.contractTerm.downloadSpeed.amount
            ? 1
            : -1
        );
        break;
      case "price":
        this.resultList.sort((a, b) =>
          a.cost.effectiveCost.amount > b.cost.effectiveCost.amount ? 1 : -1
        );
        break;
      default:
        this.fetchResults();
        break;
    }
  }

  private async fetchResults(): Promise<void> {
    this.resultList = await this.resultListService.getDataList();
  }
}
