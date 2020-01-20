import { Injectable } from "@angular/core";
import { resultModel, resultList } from "../models/result.model";

@Injectable({
  providedIn: "root"
})
export class ResultListServiceService {
  constructor() {}

  public async getDataList(): Promise<resultModel[]> {
    const response = await fetch("assets/data/data.json");
    let data = await response.json();
    return <resultModel[]>data.offers;
  }
}
