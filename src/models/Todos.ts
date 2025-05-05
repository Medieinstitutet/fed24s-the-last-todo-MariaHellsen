export class Todos {
  id: number;
  constructor(public task: string, public done: boolean) {
    this.id = Date.now();
  }
}
