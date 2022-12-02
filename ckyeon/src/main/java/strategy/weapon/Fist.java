package strategy.weapon;

public class Fist implements Weapon {

    @Override
    public void attack() {
        System.out.println("주먹 공격");
    }
}
