import { Injectable } from '@angular/core';
import {of, Observable} from "rxjs";

const credentialsKey: any = 'WHSApp.token';

export interface CredentialsFromService {
  token?: string;
}

@Injectable({
  providedIn: 'root'
})

export class CredentialsService {
  private userCredentials: CredentialsFromService | null = null;

  constructor() { }

  isAuthenticated(): boolean {
    return !!this.credentials;
  }

  clearVersionOneStorage(): void {
    sessionStorage.removeItem('WHSApp.token');
    localStorage.removeItem('WHSApp.token');
    sessionStorage.removeItem('WHSApp.decodedToken');
    localStorage.removeItem('WHSApp.decodedToken');
  }

  setCredentials(userCredentials?: CredentialsFromService): void {
    this.credentials = userCredentials || null as unknown as CredentialsFromService;

    if (userCredentials) {
      const storage: any =  sessionStorage;
      storage.setItem(credentialsKey, JSON.stringify(userCredentials));
    } else {
      this.clearVersionOneStorage();
    }
  }

  logout(): Observable<boolean> {
    this.setCredentials();
    return of(true);
  }

  get unparsedCredentials(): string {
    return sessionStorage.getItem(credentialsKey) || localStorage.getItem(credentialsKey) as unknown as string;
  }
  //
  // get hasTokenExpired(): boolean {
  //   const savedCredentials: any = this.unparsedCredentials;
  //   if (savedCredentials) {
  //     const expiry = jwt_decode<Record<string,number>>(savedCredentials).exp;
  //     return (Math.floor((new Date).getTime() / 1000)) >= expiry
  //   }
  //   return false;
  // }

  get credentials(): CredentialsFromService | null {
    const savedCredentials = this.unparsedCredentials;
    if (savedCredentials) {
      this.userCredentials = JSON.parse(savedCredentials);
    }
    return this.userCredentials;
  }

  set credentials(userCredentials: CredentialsFromService) {
    this.userCredentials = userCredentials;
  }


}
