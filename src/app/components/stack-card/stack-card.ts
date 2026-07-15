import { Component, input } from '@angular/core';
import { StackItem } from '../../models/portfolio.model';

@Component({
  selector: 'app-stack-card',
  templateUrl: './stack-card.html',
  styleUrl: './stack-card.scss',
})
export class StackCard {
  readonly item = input.required<StackItem>();
}
