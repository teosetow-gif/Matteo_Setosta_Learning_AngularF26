import {Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {EditGuardService} from '../services/edit-guard';
import {LoadingService} from '../services/loading';

@Component({
  imports: [RouterLink],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {
  editGuard = inject(EditGuardService);
  loading = inject(LoadingService);
}
