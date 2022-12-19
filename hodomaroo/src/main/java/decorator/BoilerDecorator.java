package decorator;

public class BoilerDecorator extends HouseDecorator {

    public BoilerDecorator(House house) {
        super(house);
    }

    @Override
    public void description() {
        super.description();
        System.out.println("보일러 옵션 추가 ");
    }

    @Override
    public int cost() {
        return 1000 + super.cost();
    }
}
