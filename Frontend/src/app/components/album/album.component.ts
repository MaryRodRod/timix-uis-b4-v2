import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  faPlay = faPlay;
  faPlus = faPlus;
  constructor(private modalService:NgbModal) { }

  ngOnInit(): void {
  }

  guardarCancionPlaylist(){

  }

  agregarAPlaylist(modalGuardarEnPlaylist: any){
    this.modalService.open(modalGuardarEnPlaylist,
      {
        size:'xs',
        centered:true
      }
    );
  }
}
