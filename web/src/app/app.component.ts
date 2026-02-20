import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './core/services/api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'web';

  constructor(
    apiService: ApiService
  ) {
    apiService.health().subscribe({
      next: (response) => console.log('API Health:', response),
      error: (error) => console.error('API Health Check Failed:', error)
    });
  }
}
