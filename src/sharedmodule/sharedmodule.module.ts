import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from 'src/app/loader/loader.component';
import { NgxPaginationModule } from 'ngx-pagination';
const components = [LoaderComponent];
const modules = [CommonModule, NgxPaginationModule];
@NgModule({
  declarations: [...components],
  // entryComponents: [LoaderComponent],
  imports: [...modules],
  exports: [...modules, ...components],
})
export class SharedmoduleModule {}
