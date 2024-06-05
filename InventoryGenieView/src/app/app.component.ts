import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NewComponent],
  template: `
  <!-- router-outlet></router-outlet -->
  <h1>Gennie Inventory</h1>
  <app-new-component />
  `
})
export class AppComponent {
  title = 'InventoryGenieView';
}
