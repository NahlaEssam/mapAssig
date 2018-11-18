import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MapTypeStyle } from '@agm/core/services/google-maps-types';
import { poi } from '../../shared/data/data';
import { mapStyles } from '../../shared/data/mapStyle';
import { Place, PolyPoint, PlaceContent } from '../../shared/models/model';

@Component({
  selector: 'app-map-component',
  templateUrl: './map-component.component.html',
  styleUrls: ['./map-component.component.scss']
})
export class MapComponentComponent implements OnInit {


  sideMenu = false;
  zoom = 15;

  activeMarker: Place;
  poi: Place[] = poi;
  polyPoints: PolyPoint[] = [];

  mapCenter: Place = this.poi[0];
  // styles: MapTypeStyle[] = mapStyles;
  styles = mapStyles;

  constructor(private ref: ChangeDetectorRef) {
  }

  ngOnInit() {
  }

  openMarker(marker: Place) {
    marker.isOpen = true;
  }
  closeMarker(marker: Place) {
    marker.isOpen = false;
  }
  showSideMenu(marker: Place) {
    this.sideMenu = true;
    this.activeMarker = marker;
  }
  closeSideMenu(data: boolean) {
    this.sideMenu = data;
  }
  addNewContent(content: PlaceContent) {
    this.activeMarker.content.push(content);
    // draw path
    this.getPoints(content);
  }

  getPoints(content: PlaceContent) {
    this.polyPoints = [];
    const name = content.name;
    const pointId = content.pointId;
    // filter the poi to get the other point that hold the same name
    this.poi.forEach(res => {
        const foundPoint = res.content.find(cont => {
          return cont.name.toLowerCase() === name.toLowerCase();
        });

        if (foundPoint) {
          this.polyPoints.push({
            lat: res.lat,
            lng: res.lng
          });
        }
    });
    this.ref.detectChanges();
  }
}
