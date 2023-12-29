import { Injectable } from '@angular/core';
import { HttpClient , HttpErrorResponse , HttpHeaders} from '@angular/common/http';
// ;import { environment } from 'src/environments/environment';
// import { catchError } from 'rxjs';
// import { Contact } from './contact'

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor( private http :HttpClient) { }
 
}
