import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})
export class TilesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}


export class TileService {
       tiles:Array<Tile> =[{
      "image":"tilegrey.jpg",
       "name":"johnson tiles",
       "price":4000,
       "type": "ceramic tiles",
       "color": "faded grey",
       "model": "s-676",
       "status": 0
       },
       {
         "image":"bblack.jpg",
         "name":"R.V tiles",
         "price":2500,
         "type": "floor tiles",
         "color": "blue black",
         "model": "zs-1404",
         "status": 1
         },]
}
