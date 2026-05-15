import { Component } from '@angular/core';
import { ServiceCard } from '../../components/service-card/service-card';

@Component({
  selector: 'app-servicios',
  imports: [ServiceCard],
  templateUrl: './servicios.html',
  styleUrl: './servicios.css',
})
export class Servicios {}
