import { JwtService } from './jwt.service';
/**
 * Created by yitala on 2016/12/6.
 */
import {Injectable} from '@angular/core';

import { ReplaySubject } from 'rxjs/ReplaySubject';
import { User } from '../../user/user';
@Injectable()
export class UserService {

    private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
    public isAuthenticated = this.isAuthenticatedSubject.asObservable();

    constructor(

        private jwtService: JwtService
    ) {}

    populate() {
        if (this.jwtService.getToken()) {
            this.setAuth({userName: 'linweiwei', token: 'token-1', password: '123'} as User);
        }else {
            this.clearAuth();
        }
    }

    setAuth(user: User) {
        // Save JWT sent from server in localstorage
        this.jwtService.saveToken(user.token);

        // Set isAuthenticated to true
        this.isAuthenticatedSubject.next(true);
    }

    clearAuth() {
        // Remove JWT from localstorage
        this.jwtService.destroyToken();

        // Set auth status to false
        this.isAuthenticatedSubject.next(false);
    }

    getAuth(user: User): boolean {
        if (user.userName === 'yldengw' && user.password === '123') {

            user.token = 'token-' + new Date();
            this.setAuth(user);
            return true;
        }
        return  false;
    }

}