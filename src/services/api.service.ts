import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';

@Injectable()
export class ApiService {

  constructor(private http: Http) {

  }

  public request(path: string, method: string, data?: any) {

    return new Promise((resolve, reject) => {

      const headers = new Headers();

      const contentHeaders = new RequestOptions({headers});

      if (method.toLowerCase() === 'get') {

        this.getRequest(path, contentHeaders).subscribe(
          (response) => {
            resolve(response.json());
          },
          (error) => {
            this.handleError(error);
            reject(error);
          }
        );

      }
    });
  }

  private getRequest(path: string, contentHeaders: any) {

    return this.http.get(`${path}`, contentHeaders);
  }

  private handleError(error: Error) {

    console.log(error);
  }
}
