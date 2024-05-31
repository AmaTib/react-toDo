export class ToDo {
  isCompleted: boolean;
  id: number;

  constructor(public task: string) {
    this.task = task;
    this.isCompleted = false;
    this.id = 0;
  }
}
