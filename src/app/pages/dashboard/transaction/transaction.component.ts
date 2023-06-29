import { Component } from '@angular/core';
import { ServiceService } from 'src/app/dashboard/service.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
})
export class TransactionComponent {
  allTransactions: any[] = [];
  loading: boolean = false;
  loaded: boolean = true;
  constructor(private serviceService: ServiceService) {}

  ngOnInit(): void {
    this.fetchAllTransaction();
  }

  fetchAllTransaction() {
    this.loading = true;
    this.loaded = false;
    this.serviceService.getAllTransactions().subscribe((data: any) => {
      this.allTransactions = data.bookings;
      console.log(data.bookings);
      this.loaded = true;

      this.loading = false;
    });
  }
}
