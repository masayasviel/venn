import {Component, computed, input, output} from '@angular/core';

@Component({
  selector: 'app-venn',
  standalone: true,
  imports: [],
  templateUrl: './venn.component.html',
  styleUrl: './venn.component.scss'
})
export class VennComponent {
  protected readonly WIDTH = 400;
  protected readonly HEIGHT = 210;
  private readonly RADIUS = 100;
  private readonly CENTER_X = this.WIDTH / 2;
  private readonly CENTER_Y = this.HEIGHT / 2;

  percent = input.required<number>();
  emitCenter = output<void>();
  emitLeft = output<void>();
  emitRight = output<void>();

  leftSidePath = computed(() => {
    const centerHeight = this.pythagoreanTheorem(this.percent());
    return `M${this.CENTER_X},${this.CENTER_Y-centerHeight}
    A${this.RADIUS},${this.RADIUS} 0 1 0 ${this.CENTER_X},${this.CENTER_Y+centerHeight}`
  });

  rightSidePath = computed(() => {
    const centerHeight = this.pythagoreanTheorem(this.percent());
    return `M${this.CENTER_X},${this.CENTER_Y-centerHeight}
    A${this.RADIUS},${this.RADIUS} 0 1 1 ${this.CENTER_X},${this.CENTER_Y+centerHeight}`
  });

  centerLeftSidePath = computed(() => {
    const centerHeight = this.pythagoreanTheorem(this.percent());
    return `M${this.CENTER_X},${this.CENTER_Y-centerHeight}
      A${this.RADIUS},${this.RADIUS} 0 0 0 ${this.CENTER_X},${this.CENTER_Y+centerHeight}`
  });

  centerRightSidePath = computed(() => {
    const centerHeight = this.pythagoreanTheorem(this.percent());
    return `
      M${this.CENTER_X},${this.CENTER_Y-centerHeight}
      A${this.RADIUS},${this.RADIUS} 0 0 1 ${this.CENTER_X},${this.CENTER_Y+centerHeight}
      `
  })

  private pythagoreanTheorem(percent: number): number {
    const centerHeight = this.RADIUS - percent;
    return Math.sqrt(this.RADIUS * this.RADIUS - centerHeight * centerHeight);
  }
}
