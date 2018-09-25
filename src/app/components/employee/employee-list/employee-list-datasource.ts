import { EmployeeService } from './../../../services/employee/employee.service';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Employee } from '../../../Models/Employee';

/**
 * Data source for the EmployeeList view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class EmployeeListDataSource extends DataSource<Employee> {
  constructor(private paginator: MatPaginator, private sort: MatSort, private employeeService: EmployeeService, private employees: Employee[]) {
    
    super();
    console.log(this.paginator);
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Employee[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.employees),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginators length
    this.paginator.length = this.employees.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.employees]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Employee[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Employee[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'FirstName': return compare(a.FirstName, b.FirstName, isAsc);
        case 'LastName': return compare(a.LastName, b.LastName, isAsc);
        case 'Email': return compare(a.Email, b.Email, isAsc);

        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
