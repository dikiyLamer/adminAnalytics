import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interfaces';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-wildberries',
  templateUrl: './wildberries.component.html',
  styleUrls: ['./wildberries.component.scss'],
})
export class WildberriesComponent implements OnInit, AfterViewInit {
  products: Product[] = [];
  countOfItems: number = 10;
  resumeExpanded: boolean = false;
  constructor(private data: DataService) {}
  ngAfterViewInit(): void {}
  ngOnInit(): void {
    this.products = this.data.getProducts(this.countOfItems);
  }
  expandResume() {
    this.resumeExpanded = true;
  }
  collapseResume() {
    this.resumeExpanded = false;
  }
}
