interface Strategy {
  authenticate(args: any[]): boolean;
}

class Authenticator {
  strategies: Record<string, Strategy> = {};

  use(name: string, strategy: Strategy) {
    this.strategies[name] = strategy;
  }

  authenticate(name: string, ...args: any) {
    if (!this.strategies[name]) {
      console.error('Authentication policy has not been set!');
      return false;
    }
    return this.strategies[name].authenticate.apply(null, args);
  }
}

export { Authenticator };
