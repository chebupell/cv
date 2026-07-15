import { Component, computed, signal } from '@angular/core';
import { PORTFOLIO } from '../../data/portfolio.data';
import { StackCategory } from '../../models/portfolio.model';
import { StackCard } from '../../components/stack-card/stack-card';

@Component({
  selector: 'app-stack',
  imports: [StackCard],
  templateUrl: './stack.html',
  styleUrl: './stack.scss',
})
export class StackPage {
  protected readonly profile = PORTFOLIO;
  protected readonly activeFilter = signal<'All' | StackCategory>('All');

  protected readonly filters = ['All', 'Frontend', 'Backend', 'Data', 'Tooling'] as const;

  protected readonly filteredStack = computed(() => {
    const filter = this.activeFilter();
    if (filter === 'All') {
      return this.profile.stack;
    }
    return this.profile.stack.filter((item) => item.category === filter);
  });

  protected setFilter(filter: 'All' | StackCategory): void {
    this.activeFilter.set(filter);
  }
}
