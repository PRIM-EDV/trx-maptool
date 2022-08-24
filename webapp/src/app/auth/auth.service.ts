import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';

const LSX_SERVER_HOSTNAME = window?.__env?.lsxServerHostname != null ? `${window.__env.lsxServerHostname}` : 'localhost';
const LSX_SERVER_PORT = window?.__env?.lsxServerPort != null ? window.__env.lsxServerPort : 3000;

@Injectable()
export class AuthService {

  private token: string = "";

  constructor(private readonly http: HttpClient) {

  }

  public async requestJwt(username: string, password: string): Promise<string>
  {
    const data = {username: username, password: password};
    const route = `${window.location.protocol}//${LSX_SERVER_HOSTNAME}:${LSX_SERVER_PORT}/api/auth/login`;

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
