import { SimpleSubject } from './Subject/SimpleSubject';
import { SimpleObserver } from './Observer/SimpleObserver';

const simpleSubject = new SimpleSubject();
const simpleObserver = new SimpleObserver();

simpleSubject.registerObserver(simpleObserver);

simpleSubject.setValue(80);
simpleSubject.setValue(70);

simpleSubject.removeObserver(simpleObserver);
simpleSubject.setValue(60);
