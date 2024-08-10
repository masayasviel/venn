import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';

import { VennComponent } from './venn/venn.component';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ReactiveFormsModule,
    MatSliderModule,
    VennComponent,
    AsyncPipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  MIN = 1;
  MAX = 99;

  percentForm = new FormControl<number>(50, {
    nonNullable: true,
    validators: [Validators.min(this.MIN), Validators.max(this.MAX)]
  });

  percent$ = this.percentForm.valueChanges;

  onClickCenter(): void {
    console.log('click center');
  }

  onClickLeft(): void {
    console.log('click left');
  }

  onClickRight(): void {
    console.log('click right');
  }
}
