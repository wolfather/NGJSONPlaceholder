import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { map } from 'rxjs';
import { GetDataService } from './services/get-data.service';
import { ApiUserResponse } from './entities/apiResponses';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  providers: [
    GetDataService,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  data$: ApiUserResponse[] = [];
  #getDataService = new GetDataService();

  ngOnInit() {
    this.#getDataService
      .getData<ApiUserResponse[]>('users')
      .pipe(
        map((data) =>
          data.map((item) => ({
            ...item,
            email: item.email.toLowerCase(),
          }))
        )
      )
      .subscribe({
        next: (res) => {
          this.data$ = res
        }
      });
  }

  ngOnDestroy() {
    this.data$ = [];
  }
}
