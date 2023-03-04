import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    constructor(private http: HttpClient) {}

    uploadPDF(file: File) {
        console.log('uploadPDF inside of api.service.ts')
        console.log(File)

        

        //send post request to backend of the file
        // const formData = new FormData();
        // formData.append('pdf', file);
        // return this.http.post(`${environment.backendUrl}/uploadPDF`, formData);
    }

    getAuth() {
        //send get request to users/profile
        return this.http.get(`${environment.backendUrl}/users/profile`).pipe(
            catchError((error: any) => {
                window.location.href = 'http://localhost:8080/login';
                return error;
            })
        );
    }

    getUserPDFsSummary() {

    }

    getUserPDFParams() {

    }    
}
