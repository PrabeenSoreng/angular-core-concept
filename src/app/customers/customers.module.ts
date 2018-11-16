import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { FilterTextboxComponent } from './filter-textbox/filter-textbox.component';
import { SharedModule } from '../shared/shared.module';
import { CustomersRoutingModule } from './customers-routing.module';


@NgModule({
    imports: [CommonModule, SharedModule, FormsModule, CustomersRoutingModule],
    declarations: [CustomersComponent, CustomersListComponent, FilterTextboxComponent]
})
export class CustomersModule {}