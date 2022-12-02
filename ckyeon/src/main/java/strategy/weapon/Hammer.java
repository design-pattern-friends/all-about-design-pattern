package strategy.weapon;

public class Hammer implements Weapon {

    @Override
    public void attack() {
        System.out.println("망치 공격");
    }
}
