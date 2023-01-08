import Printer from './adaptee/Printer';

import HashTagPrinterAdapter from './adapter/HashTagPrinterAdapter';
import HashTagPrinter from './adaptee/HashTagPrinter';

const printer1 = new Printer();
printer1.pushText('Hello');
printer1.pushText('Design');
printer1.pushText('Pattern');

const result1 = printer1.print();
console.log(result1); // Hello Design Pattern

console.log('============================');

const printer2 = new HashTagPrinterAdapter(new HashTagPrinter());
printer2.pushText('Hello');
printer2.pushText('Design');
printer2.pushText('Pattern');

console.log(printer2.print()); // #Hello #Design #Pattern
