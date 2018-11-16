import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ICustomer, IOrder } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl: string = 'assets/';

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<ICustomer[]>{
    return this.http.get<ICustomer[]>(this.baseUrl+'customers.json')
              .pipe(
                map(customers => customers),
                catchError(this.handleError)
              );
  }

  getCustomer(id: number): Observable<ICustomer>{
    return this.http.get<ICustomer[]>(this.baseUrl+'customers.json')
              .pipe(
                map(customers => {
                  let customer = customers.filter((cust: ICustomer) => cust.id === id);
                  return (customer && customer.length) ? customer[0] : null;
                }),
                catchError(this.handleError)
              );
  }

  getOrders(id: number): Observable<IOrder[]>{
    return this.http.get<IOrder[]>(this.baseUrl + 'orders.json')
              .pipe(
                map(orders => {
                  let custOrder = orders.filter((order: IOrder) => order.customerId === id);
                  return custOrder;
                }),
                catchError(this.handleError)
              );
  }

  private handleError(err: any) {
    console.error('Server error:', err);
    if(err.error instanceof Error) {
      const errMessage = err.error.message;
      return throwError(errMessage);
    }
    return throwError(err || 'Node.js server error');
  }
}
