package decorator;

public class MultiFlooredDecorator extends HouseDecorator {

    public MultiFlooredDecorator(House house) {
        super(house);
    }

    @Override
    public void description() {
        super.description();
        System.out.println("복층 옵션 추가");
    }

    @Override
    public int cost() {
        return 2000 + super.cost();
    }
}
