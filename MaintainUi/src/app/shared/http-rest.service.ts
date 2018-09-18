import { Injectable } from '@angular/core';
//import 'rxjs/add/operator/toPromise';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HttpRestService {
    //    private c_Url = 'http://localhost:9004';  // URL to web API
    private c_Url = 'http://localhost:15664';  // URL to web API

    constructor(private http: HttpClient) { }

    getDataRecord(resourceName: string, id: number) {
        console.log("allan in get:" + `${this.c_Url}/${resourceName}/${id}`);
        return this.http.get(`${this.c_Url}/${resourceName}/${id}`)
            ;
    }

    getDataSet(resourceName: string) {
        console.log("allan in get:" + `${this.c_Url}/${resourceName}`);
        return this.http.get(`${this.c_Url}/${resourceName}`)
            ;
    }

    // send a PUT request to the API to Add/Update/Delete a data object
    AddUpdateDataRecord(resourceName: string, obj: any) {
        let body = JSON.stringify(obj);
        console.log("allan in put:" + `${this.c_Url}/${resourceName}`);
        console.log("body in put:" + `${body}`);
        return this.http.put(`${this.c_Url}/${resourceName}`, body, httpOptions);
    }

    // send a PUT request to the API to Add/Update/Delete a data object
    deleteDataRecord(resourceName: string, id: number) {
        console.log("allan in delete:" + `${this.c_Url}/${resourceName}/${id}`);
        return this.http.delete(`${this.c_Url}/${resourceName}/${id}`);
    }

}