import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '../Model/Product';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
})
export class ListProductsComponent implements OnInit {
  public products: Product[] = [];
  public url = ' http://localhost:3000/products';
  constructor(private httpClient: HttpClient) {}
  ngOnInit(): void {
    this.httpClient.get(this.url).subscribe(
      (response) => {
        this.products = response as Product[];
      },
      (error) => console.error('Error', error)
    );
  }
}
