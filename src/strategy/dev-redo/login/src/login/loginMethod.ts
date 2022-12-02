import { Authenticator } from './Authenticator';
import { TwitterStrategy } from '../strategy/TwitterStrategy';
import { LocalStrategy } from '../strategy/LocalStrategy';

const auth = new Authenticator();

auth.use('twitter', new TwitterStrategy());
auth.use('local', new LocalStrategy());

const login = (mode: string, ...args: any) => auth.authenticate(mode, args);

export { login };
