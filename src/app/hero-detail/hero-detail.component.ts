import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero;

  constructor(
    private route: ActivatedRoute, // holds info about route to this instance of HeroDetailComponent
    private heroService: HeroService, // Gets data from remote server. this. will use it to display
    private location: Location // Angular service for interacting with browser
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
    // the + operator converts string to number
    // route.snapshot: static image of route info
    // paramMap: dictionary of route parameter values extracted from the URL. The id key returns the id of the hero to fetch
  }

  goBack(): void {
    this.location.back();
  }

}
