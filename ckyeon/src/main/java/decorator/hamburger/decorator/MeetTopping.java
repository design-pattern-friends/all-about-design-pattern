package decorator.hamburger.decorator;

import decorator.hamburger.Burger;

public class MeetTopping extends BurgerTopping {

    public MeetTopping(Burger burger) {
        this(2000, "고기", burger);
    }

    protected MeetTopping(int cost, String description, Burger burger) {
        super(cost, description, burger);
    }
}
