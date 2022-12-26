package decorator.hamburger;

import decorator.hamburger.decorator.MeetTopping;
import decorator.hamburger.decorator.TomatoTopping;

public class Main {

    public static void main(String[] args) {
        Burger burger = new BulgogiBurger();
        System.out.println(burger.getDescription() + "::: " + burger.getCost());

        Burger burger2 = new ShrimpBurger();
        burger2 = new MeetTopping(burger2);
        burger2 = new TomatoTopping(burger2);
        System.out.println(burger2.getDescription() + "::: " + burger2.getCost());
    }
}
