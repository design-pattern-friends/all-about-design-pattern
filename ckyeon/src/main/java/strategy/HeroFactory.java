package strategy;

public class HeroFactory {

    public static Hero generate(HeroInfo heroInfo) {
        return new Hero(heroInfo);
    }
}