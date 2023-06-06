import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarComponent } from '../bar/bar.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-foo',
  standalone: true,
  imports: [CommonModule, BarComponent, RouterOutlet, RouterLink],
  templateUrl: './foo.component.html',
  styleUrls: []
})
export class FooComponent {

}
