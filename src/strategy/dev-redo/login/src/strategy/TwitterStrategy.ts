import { Strategy } from '../type';

const accesssToken = 'tw123';

class TwitterStrategy implements Strategy {
  authenticate(args: any[]) {
    const [token] = args;
    if (token !== accesssToken) {
      console.error('Twitter :>> 트위터 계정 인증 실패!');
      return false;
    }

    console.log('Twitter :>> 트위터 계정 인증 성공!');
    return true;
  }
}

export { TwitterStrategy };
