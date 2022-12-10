import { Beverage } from "./Beverage";

export abstract class CondimentDecorator extends Beverage {
   abstract beverage:Beverage;
   abstract getDescription(): string;
}