import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.product);
  }
  @Input() product!: Product;
}
