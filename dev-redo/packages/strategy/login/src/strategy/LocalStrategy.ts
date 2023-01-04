import { Strategy } from '../type/auth';

const userInfo = {
  name: 'dev-redo',
  password: 'abc123',
};

class LocalStrategy implements Strategy {
  authenticate(args: any[]) {
    const [username, password] = args;
    if (username !== userInfo.name && password !== userInfo.password) {
      console.log(
        'Local :>> 회원 이름과 비밀번호와 일치하는 회원 정보가 없습니다!',
      );
      return false;
    }

    console.log('Local :>> 회원 로그인 성공했습니다!');
    return true;
  }
}

export { LocalStrategy };
