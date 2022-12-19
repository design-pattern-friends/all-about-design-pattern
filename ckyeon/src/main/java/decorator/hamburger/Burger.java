package decorator.hamburger;

public abstract class Burger {

    private final int cost;
    private final String description;

    // 햄버거
    protected Burger(int cost, String description) {
        this.cost = cost;
        this.description = description;
    }

    // 토핑
    protected Burger(Burger burger) {
        this.cost = burger.getCost();
        this.description = burger.getDescription();
    }

    public int getCost() {
        return cost;
    }

    public String getDescription() {
        return description;
    }
}
