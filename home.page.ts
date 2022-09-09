import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  listData = [];
  constructor(private datasetService: DataService) {
    this.loadData();
  }

  async loadData(){
    this.listData = await this.datasetService.getData();
  }

  async addData(){
    await this.datasetService.addData(`Temp ${Math.floor(Math.random() *100)}`);
    this.loadData();
  }

  async removeItem(index){
    this.datasetService.removeItem(index);
    this.listData.splice(index, 1);
  }
}
