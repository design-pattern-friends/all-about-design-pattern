/* eslint-disable no-useless-constructor */
import { IMenu } from "../interface/IMenu";

export default class Coupon implements IMenu {

  constructor(
    public readonly description: string,
    public readonly discount: number,
  ) { }

  cost(): number {
    return -this.discount;
  }

  getDescription(): string {
    return this.description;
  }

}

export class HolidayCoupon extends Coupon {
  constructor() {
    super("Holiday Coupon", 1000);
  }
}

export class BirthdayCoupon extends Coupon {
  constructor() {
    super("Birthday Coupon", 5000);
  }
}
