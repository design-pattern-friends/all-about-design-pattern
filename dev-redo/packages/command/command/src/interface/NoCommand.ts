import ICommand from './ICommand';

class NoCommand implements ICommand {
  execute(): void {
    console.log('커맨드가 없습니다.');
  }
}

export default NoCommand;
