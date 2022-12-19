package decorator.hamburger.decorator;

import decorator.hamburger.Burger;

public abstract class BurgerTopping extends Burger {

    private final int cost;
    private final String description;

    protected BurgerTopping(int cost, String description, Burger burger) {
        super(burger);
        this.cost = cost;
        this.description = description;
    }

    @Override
    public String getDescription() {
        return super.getDescription() + ", " + description;
    }

    @Override
    public int getCost() {
        return super.getCost() + cost;
    }
}
