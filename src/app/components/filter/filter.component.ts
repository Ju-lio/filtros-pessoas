import { Component, Output, EventEmitter } from '@angular/core';
import { IFilterOptions } from '../../interfaces/filter-options.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})

export class FilterComponent {

  @Output() selectedFilters = new EventEmitter<IFilterOptions>();

  filterOptions: IFilterOptions = {
    name: '',
    startDate: '',
    endDate: '',
    status: '',
  };

  onSelectedFilters() {
    this.selectedFilters.emit(this.filterOptions);
  }
};
