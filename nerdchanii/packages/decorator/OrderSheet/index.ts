import Coupon from "../Coupon";
import { IMenu } from "../interface/IMenu";

/* eslint-disable no-useless-constructor */
export default class OrderSheet {

  constructor(
    public items: IMenu[],
    public coupons: Coupon[],
  ) { }


  addItem(item: IMenu): void {
    this.items.push(item);
  }

  appplyCoupon(coupon: Coupon): void {
    this.coupons.push(coupon);
  }

  /** total price before discount */
  cost(): number {
    return this.items.reduce((acc, item) => acc + item.cost(), 0) + this.discount();
  }

  /** discount cost */
  private discount(): number {
    return this.coupons.reduce((acc, coupon) => acc + coupon.cost(), 0);
  }

  getMenu(): string {
    return this.items.map((item) => `- ${item.getDescription()}`).join("\n")
  }
}