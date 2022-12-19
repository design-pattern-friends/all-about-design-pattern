package decorator;

public abstract class HouseDecorator implements House {

    private House house;


    public HouseDecorator(House house) {
        this.house = house;
    }

    @Override
    public void description() {
        house.description();
    }

    @Override
    public int cost() {
        return this.house.cost();
    }
}
