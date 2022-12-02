package strategy.fly;

public class Booster implements FlyBehavior {

    @Override
    public void fly() {
        System.out.println("부스터를 이용해서 하늘을 날아");
    }
}
