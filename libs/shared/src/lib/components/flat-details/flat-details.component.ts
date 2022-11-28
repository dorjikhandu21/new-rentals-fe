import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from 'ng-gallery';
import {MatDialog} from "@angular/material/dialog";
import {ApplyTenantModalComponent} from "../apply-tenant-modal/apply-tenant-modal.component";

@Component({
  selector: 'new-rentals-flat-details',
  templateUrl: './flat-details.component.html',
  styleUrls: ['./flat-details.component.scss']
})
export class FlatDetailsComponent implements OnInit {
  items: GalleryItem[];

  imageData = data;
  constructor(public matDialog: MatDialog, public gallery: Gallery) {}

  ngOnInit(): void {
    this.items = this.imageData.map(item => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl }));
  }
  openApplyTenantModal() : void {
    this.matDialog.open(ApplyTenantModalComponent, {
      panelClass: ['modal-sm', 'full-width-modal'],
    });
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
