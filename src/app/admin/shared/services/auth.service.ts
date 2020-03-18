import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

import {FbAuthResponse, User} from '../../../shared/interfaces';
import {environment} from '../../../../environments/environment';

@Injectable()
export class AuthService {
    get token(): string {
        return '';
    }
    constructor(private http: HttpClient) {
    }

    login(user: User): Observable<any> {
        console.log(environment.apiKey);
        return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=${environment.apiKey}`, user)
            .pipe(
                tap(this.setToken)
            );
    }
    logout() {}
    isAuthenticated(): boolean {
        return !!this.token;
    }
    private setToken(response: FbAuthResponse) {
        console.log(response);
    }
}
