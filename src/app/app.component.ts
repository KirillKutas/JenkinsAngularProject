import {Component} from '@angular/core';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  text: string;

  constructor(private apiService: ApiService) {
    //this.loadServerAppSettings();
  }

  loadServerAppSettings(): void {
    this.apiService.getServerAppSettings().subscribe(data => {
      this.text = data;
    });
  }

}
