import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../../shared/services/characters.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-character',
  templateUrl: './detail-character.component.html',
  styleUrls: ['./detail-character.component.scss']
})
export class DetailCharacterComponent implements OnInit {


  characterDetail: any = {};

  constructor(private charactersService: CharactersService, private route: ActivatedRoute) { }


  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.charactersService.getcharacterDetails(params.get('id')).subscribe((res:any) => {
        console.log(res);
        this.characterDetail = res;
      })
    })
  }
}