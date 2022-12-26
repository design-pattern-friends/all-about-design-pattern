package factory;

import java.util.Scanner;
import java.util.function.Predicate;

public class Game {

    private NumberFactory numberFactory;

    public Game(NumberFactory numberFactory) {
        this.numberFactory = numberFactory;
    }

    public void playGame() {
        Scanner scanner = new Scanner(System.in);
        System.out.println("1~50 사이의 숫자를 입력해주세요");

        Predicate<Integer> predicate = (v) -> v == numberFactory.getRandomNumber();

        if (predicate.test(Integer.parseInt(scanner.next()))) {
            System.out.println("정답입니다.");
        } else {
            System.out.println("오답입니다.");
        }
    }
}
