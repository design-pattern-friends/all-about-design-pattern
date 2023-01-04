interface Strategy {
  authenticate(args: any[]): boolean;
}

export { Strategy };
