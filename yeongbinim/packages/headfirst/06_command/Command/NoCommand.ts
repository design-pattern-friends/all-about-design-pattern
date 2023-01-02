import Command from './Command';

class NoCommand implements Command {
  execute(): void {
    console.log('커맨드가 없습니다.');
  }
}

export default NoCommand;
