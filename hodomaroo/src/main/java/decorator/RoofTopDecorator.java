package decorator;

public class RoofTopDecorator extends HouseDecorator {


    public RoofTopDecorator(House house) {
        super(house);
    }

    @Override
    public void description() {
        super.description();
        System.out.println("옥탑방 옵션 추가");
    }

    @Override
    public int cost() {
        return 500 + super.cost();
    }
}
