import { login } from './login/loginMethod';

console.log('====== 트위터 로그인 ======');
login('twitter', 'wrong');
login('twitter', 'tw123');

console.log('====== 로컬 로그인 ======');
login('local', 'wrong', 'abc123');
login('local', 'dev-redo', 'abc123');
