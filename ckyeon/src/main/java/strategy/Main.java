package strategy;

import java.util.Arrays;
import java.util.stream.Stream;

public class Main {

    public static void main(String[] args) {
        HeroInfo[] heroInfos = HeroInfo.values();
        Stream<HeroInfo> heroInfoStream = Arrays.stream(heroInfos);

        heroInfoStream.forEach(heroInfo -> {
            Hero hero = HeroFactory.generate(heroInfo);
            hero.introduce();
            hero.attack();
        });
    }
}
