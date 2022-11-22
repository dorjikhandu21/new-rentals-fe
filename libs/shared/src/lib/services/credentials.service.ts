import { Injectable } from '@angular/core';
import {of, Observable, BehaviorSubject} from "rxjs";
import jwt_decode from 'jwt-decode'

const credentialsKey: any = 'NewRentals.token';

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
    sessionStorage.removeItem('WHSApp.token');
    return !!this.credentials && !this.hasTokenExpired;

  }

  clearVersionOneStorage(): void {
    sessionStorage.removeItem('NewRentals.token');
    localStorage.removeItem('NewRentals.token');
    sessionStorage.removeItem('NewRentals.decodedToken');
    localStorage.removeItem('NewRentals.decodedToken');
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

  token(): Observable<string> {
    return new BehaviorSubject(this.unparsedCredentials);
  }

  get hasTokenExpired(): boolean {
    const savedCredentials: any = this.unparsedCredentials;
    if (savedCredentials) {
      const expiry = jwt_decode<Record<string,number>>(savedCredentials)['exp'];
      return (Math.floor((new Date).getTime() / 1000)) >= expiry
    }
    return false;
  }

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
