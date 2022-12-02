package strategy;

import strategy.fly.FlyBehavior;
import strategy.weapon.Weapon;

public class Hero {

    private final String name;
    private final Weapon weapon;
    private final FlyBehavior flyBehavior;

    public Hero(HeroInfo heroInfo) {
        this.name = heroInfo.getName();
        this.weapon = heroInfo.getWeapon();
        this.flyBehavior = heroInfo.getFly();
    }

    public void introduce() {
        sayHello();
        flyBehavior.fly();
    }

    public void attack() {
        weapon.attack();
    }

    private void sayHello() {
        System.out.printf("안녕 나는 %s!\n", name);
    }
}
