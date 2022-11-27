import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';

@Component({
  selector: 'new-rentals-flat-details',
  templateUrl: './flat-details.component.html',
  styleUrls: ['./flat-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class FlatDetailsComponent implements OnInit {
  items: GalleryItem[];

  imageData = data;
  constructor(public gallery: Gallery, public lightbox: Lightbox) {}

  ngOnInit(): void {
    this.items = this.imageData.map(item => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl }));
  }

}
const data = [
  {
    srcUrl: 'https://preview.ibb.co/jrsA6R/img12.jpg',
    previewUrl: 'https://preview.ibb.co/jrsA6R/img12.jpg'
  },
  {
    srcUrl: 'https://preview.ibb.co/kPE1D6/clouds.jpg',
    previewUrl: 'https://preview.ibb.co/kPE1D6/clouds.jpg'
  },
  {
    srcUrl: 'https://preview.ibb.co/mwsA6R/img7.jpg',
    previewUrl: 'https://preview.ibb.co/mwsA6R/img7.jpg'
  },
  {
    srcUrl: 'https://preview.ibb.co/kZGsLm/img8.jpg',
    previewUrl: 'https://preview.ibb.co/kZGsLm/img8.jpg'
  },
];
