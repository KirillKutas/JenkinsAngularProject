import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {
  }

  getServerAppSettings(): Observable<string> {
    return this.http.get<string>('/TestAppSettings/GetAppSettingsValue');
  }
}
