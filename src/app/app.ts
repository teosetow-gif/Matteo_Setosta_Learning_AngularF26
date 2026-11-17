import {Component, inject, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TvShow} from './shared/models/tvShow';
import {Navbar} from './navbar/navbar';
import {ErrorService} from './services/error';


@Component({
  imports: [RouterOutlet, Navbar],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})

export class App {
  protected title = 'Tv Show'
  errorService = inject(ErrorService);
  }
