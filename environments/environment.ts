import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {AppSettings} from '../src/interfaces/app.settings';

const SETTINGS_LOCATION = 'assets/appsettings.json';

@Injectable({
  providedIn: 'root'
})
export class Environment {
  constructor(private http: HttpClient) {
  }

  getSettings(): Observable<AppSettings> {
    return this.http.get<AppSettings>(SETTINGS_LOCATION);
  }

}
