import { Component, OnInit} from '@angular/core';
import { Gallery, GalleryItem, ImageItem } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';
import {SharedFacadeService} from "../../services/shared-facade.service";
import {SharedStoreStateEnum} from "../../models/shared.store";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {tap} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {Unit} from "../../models/graphql";
import {Loader} from "@googlemaps/js-api-loader";

@UntilDestroy()
@Component({
  selector: 'new-rentals-flat-details',
  templateUrl: './flat-details.component.html',
  styleUrls: ['./flat-details.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush

})
export class FlatDetailsComponent implements OnInit {
  items: GalleryItem[];
  imageData = data;
  unit?: Unit;
  private map: google.maps.Map;
  constructor(private activatedRoute: ActivatedRoute, private gallery: Gallery, private lightbox: Lightbox, private sharedFacadeService: SharedFacadeService) {}

  ngOnInit(): void {
    this.items = this.imageData.map(item => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl }));
    this.getUnitDetails();
    this.listenToUnitsChange();
  }

  getUnitDetails(): void {
    this.sharedFacadeService.getUnitDetails(this.activatedRoute.snapshot.params['id']).subscribe();
  }

  listenToUnitsChange(): void {
    this.sharedFacadeService.specificStateChange<Unit>(SharedStoreStateEnum.UNIT).pipe(untilDestroyed(this), tap(unit => {
      this.unit = unit;
    })).toPromise().then(() => {
      this.loadMap();
    });
  }

  loadMap(): void {
    const loader: Loader = new Loader({
      apiKey: 'AIzaSyDpNbirRykNtf26goqNIwT4diZcsIP-vy4',
    })
    loader.load().then(() => {
      const position: { lat: number; lng: number; } = {lat: Number(this.unit?.property.lat), lng: Number(this.unit?.property.lng)};
      this.map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
        center: position,
        scrollwheel: true,
        disableDoubleClickZoom: true,
        zoom: 15,
        disableDefaultUI: true,
      });
    }).catch(error => {
      console.log('Maps could not load')
    })
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
