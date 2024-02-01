import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WindowCloseService {
  private windowCloseSubject = new Subject<void>();

  getWindowCloseObservable(): Observable<void> {
    return this.windowCloseSubject.asObservable();
  }

  triggerWindowCloseEvent(): void {
    this.windowCloseSubject.next();
  }
}