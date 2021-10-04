import {Injectable} from '@angular/core';
import {Environment} from '../../environments/environment';
import {AppSettings} from '../interfaces/app.settings';

@Injectable({
  providedIn: 'root'
})
export class AppConfigInterceptor {
  constructor(private environment: Environment) {
  }

  private appSettings: AppSettings;

  loadAppSettings(): Promise<void> {
    return this.environment.getSettings().toPromise().then(data => {
      console.log(data);
      this.appSettings = data;
    });
  }

  get apiUrl(): string {
    return this.appSettings.endpoint;
  }
}
