abstract class Animal {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Dog extends Animal{
  constructor(name: string) {
    super(name);
  }

  bark(): void {
    console.log(`hello ${this.name}`);
  }
}

const dog = new Dog('123');
dog.bark();