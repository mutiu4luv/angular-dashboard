import { ServiceService } from './../../../dashboard/service.service';
import { Component, OnInit } from '@angular/core';
import { LoaderComponent } from 'src/app/loader/loader.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  allUsers: any[] = [];
  loading: boolean = true;
  loaded: boolean = false;
  currentPage: number = 1;
  itemsPerPage: number = 4;
  items: any[] = []; // your data array

  constructor(
    private serviceService: ServiceService,
    spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.fetchAllUsers();
  }

  onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
  }

  fetchAllUsers() {
    this.loading = true;
    // this.loaded = false;
    this.serviceService.getAllUsers().subscribe((data: any) => {
      this.allUsers = data.users;
      console.log(data.users);
      // this.loaded = true;

      this.loading = false;
    });
  }
}
