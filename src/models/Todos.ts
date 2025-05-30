export class Todo {
  id: number;
  constructor(public task: string, public done?: boolean, customId?: number) {
    this.id = customId !== undefined ? customId : Date.now();
  }
}

export const defaultValue: Todo = {
  task: "",
  done: false,
  id: 0,
};
