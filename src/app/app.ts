import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected title = 'Assignment1Test'

fullName = 'Matteo Setosta';
  studentId = 'W0886068';
  city = 'Tecumseh';
}
