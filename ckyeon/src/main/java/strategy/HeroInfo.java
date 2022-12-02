package strategy;

import lombok.Getter;
import strategy.fly.Booster;
import strategy.fly.FlyBehavior;
import strategy.fly.Mjolnir;
import strategy.fly.SpiderWeb;
import strategy.weapon.Fist;
import strategy.weapon.Hammer;
import strategy.weapon.Laser;
import strategy.weapon.Weapon;

@Getter
public enum HeroInfo {
    IRONMAN("아이언맨", new Booster(), new Laser()),
    THOR("토르", new Mjolnir(), new Hammer()),
    SPIDERMAN("스파이더맨", new SpiderWeb(), new Fist());

    private final String name;
    private final FlyBehavior fly;
    private final Weapon weapon;

    HeroInfo(String name, FlyBehavior fly, Weapon weapon) {
        this.name = name;
        this.fly = fly;
        this.weapon = weapon;
    }
}