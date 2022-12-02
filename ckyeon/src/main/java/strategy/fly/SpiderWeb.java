package strategy.fly;

public class SpiderWeb implements FlyBehavior {

    @Override
    public void fly() {
        System.out.println("거미줄을 쏴서 하늘을 날아");
    }
}
