import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServiceCard } from '../../components/service-card/service-card';

@Component({
  selector: 'app-home',
  imports: [RouterLink, ServiceCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
