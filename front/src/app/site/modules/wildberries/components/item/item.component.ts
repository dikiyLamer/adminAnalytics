import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Subject, firstValueFrom, fromEvent, takeUntil } from 'rxjs';
import { Product } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit, OnDestroy {
  destroySubject: Subject<boolean> = new Subject();

  quickViewCalled: boolean = false;

  ngOnInit(): void {}
  @Input() product!: Product;

  callQuickView() {
    this.quickViewCalled = !this.quickViewCalled;
  }

  ngOnDestroy(): void {
    this.destroySubject.complete();
  }

  onCloseView(state: boolean) {
    this.quickViewCalled = state;
  }
}
