import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';

const RLD_SERVER_HOSTNAME = window?.__env?.rldServerHostname != null ? `${window.__env.rldServerHostname}` : 'localhost';
const RLD_SERVER_PORT = window?.__env?.rldServerPort != null ? window.__env.rldServerPort : 3000;

@Injectable()
export class AuthService {

  private token: string = "";

  constructor(private readonly http: HttpClient) {

  }

  public async requestJwt(username: string, password: string): Promise<string>
  {
    const data = {username: username, password: password};
    const route = `${window.location.protocol}//${RLD_SERVER_HOSTNAME}:${RLD_SERVER_PORT}/api/auth/login`;

    return new Promise<string>((resolve, reject) => {
      this.http.post<{access_token: string}>(route, data).subscribe({
        next: (res) => {
          console.log(res);
          this.token = res.access_token;
          resolve(res.access_token);
        },
        error: (err) => {
          reject(err);
        }
      })
    });
  }

  public isAuthenticated(): boolean {
    return this.token != '';
  }
}
