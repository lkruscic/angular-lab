import { Component } from '@angular/core';
import { FooComponent } from './foo/foo.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../styles.css'],
  standalone: true,
  imports: [FooComponent, RouterOutlet, RouterLink]
})
export class AppComponent {
}
