package strategy.weapon;

public class Laser implements Weapon {

    @Override
    public void attack() {
        System.out.println("레이저 공격");
    }
}
