interface Bird {
  eat(): void; 
}

interface FlyingBird {
  fly(): number; 
}

interface SwimmingBird {
  swim(): void;
}

interface RunningBird {
  run(): void;
}

class Tucan implements Bird, FlyingBird {

  public fly() { return 5; }
  public eat() {}

}

class Hummingbird implements Bird, FlyingBird {

  public fly() { return 3; }
  public eat() {}

}

class Ostrich implements Bird, RunningBird {

  public eat() {}
  public run() {}

}

class Penguin implements Bird {

  public eat() {}
  public swim() {}
}