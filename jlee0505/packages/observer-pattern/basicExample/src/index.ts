import { SubjectA } from "./Subject/SubjectA";
import { ObserverA } from "./Observer/ObserverA";

const subjectA = new SubjectA();
const observerA = new ObserverA();

subjectA.registerObserver(observerA);

subjectA.setValue(true);
subjectA.setValue(false);