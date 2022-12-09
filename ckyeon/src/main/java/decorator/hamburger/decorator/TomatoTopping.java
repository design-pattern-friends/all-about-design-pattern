package decorator.hamburger.decorator;

import decorator.hamburger.Burger;

public class TomatoTopping extends BurgerTopping {

    public TomatoTopping(Burger burger) {
        this(1000, "토마토", burger);
    }

    protected TomatoTopping(int cost, String description, Burger burger) {
        super(cost, description, burger);
    }
}
