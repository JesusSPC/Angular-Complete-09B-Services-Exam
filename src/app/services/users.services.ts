import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable()
export class UsersService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private counterService: CounterService) {}

  setToInactive(id: number) {
    this.counterService.addCounter(this.activeUsers[id]);
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }

  setToActive(id: number) {
    this.counterService.addCounter(this.inactiveUsers[id]);
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }
}
