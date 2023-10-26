import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Observable, Subject, fromEvent, takeUntil } from 'rxjs';
import { Product } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.scss'],
})
export class QuickViewComponent implements AfterViewInit, OnDestroy, OnInit {
  @ViewChild('canvas') canvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('wrapper') wrapper!: ElementRef<HTMLDivElement>;
  @Output() closeView: EventEmitter<boolean> = new EventEmitter();
  @Input() product!: Product;
  destroySubject: Subject<boolean> = new Subject();

  constructor(private host: ElementRef) {
    console.log(host);
  }
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    let ctx = this.canvas.nativeElement.getContext('2d');
    let canvasRect = this.canvas.nativeElement.getBoundingClientRect();
    this.canvas.nativeElement.width = Math.floor(canvasRect.width);
    this.canvas.nativeElement.height = Math.floor(canvasRect.height);
    let moveX: number = 0;
    let moveY: number = 0;
    let image = new Image();

    image.src = 'assets/goose/1.png';

    image.onload = () => {
      ctx?.drawImage(image, 0, 0, canvasRect.width, canvasRect.height);
    };

    fromEvent(this.canvas.nativeElement, 'mouseleave')
      .pipe(takeUntil(this.destroySubject))
      .subscribe(() => {
        ctx?.drawImage(image, 0, 0, canvasRect.width, canvasRect.height);
      });

    fromEvent(this.canvas.nativeElement, 'mousemove')
      .pipe(takeUntil(this.destroySubject))
      .subscribe((event) => {
        let mouseEvent = event as MouseEvent;

        let canvasX = mouseEvent.clientX - Math.floor(canvasRect.x);
        let canvasY = mouseEvent.clientY - Math.floor(canvasRect.y);
        let scaleX = image.width / this.canvas.nativeElement.width;
        let scaleY = image.height / this.canvas.nativeElement.height;

        if (canvasX * scaleX < image.width - canvasRect.width) {
          moveX = canvasX * scaleX;
        }
        if (canvasY * scaleY < image.height - canvasRect.height) {
          moveY = canvasY * scaleY;
        }

        ctx?.drawImage(
          image,
          moveX,

          moveY,
          canvasRect.width,
          canvasRect.height,
          0,
          0,
          canvasRect.width,
          canvasRect.height
        );
      });

    setTimeout(() => {
      fromEvent(document, 'click')
        .pipe(takeUntil(this.destroySubject))
        .subscribe((event) => {
          if (
            !this.wrapper.nativeElement.contains(event.target as HTMLElement)
          ) {
            this.closeView.emit(false);
          }
        });
    });
    setTimeout(() => {
      fromEvent(document, 'keydown')
        .pipe(takeUntil(this.destroySubject))
        .subscribe((event) => {
          if ((event as KeyboardEvent).code === 'Escape') {
            this.closeView.emit(false);
          }
        });
    });
  }

  ngOnDestroy(): void {
    this.destroySubject.complete();
  }
}
