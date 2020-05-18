export class CounterService {
  counter = 0;

  addCounter(user: string) {
    this.counter++;
    console.log(`Users have changed activity ${this.counter} times. Last change commited by ${user}`);
  }
}
