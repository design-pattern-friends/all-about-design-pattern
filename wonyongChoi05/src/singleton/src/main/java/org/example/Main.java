package org.example;

/**
 * @author 최원용
 * @version 2.0.0
 * @Created by 최원용 on 2022. 12. 25.
 */
public class Main {
    public static void main(String[] args) {
        PrecourseRepository instance = PrecourseRepository.getInstance();
        new LottoRepository().setLotto();
        System.out.println("instance.getLevel() = " + instance.getLevel());
        System.out.println("instance.getComment() = " + instance.getComment());

        new BridgeRepository().setBridge();
        System.out.println("instance.getLevel() = " + instance.getLevel());
        System.out.println("instance.getComment() = " + instance.getComment());
    }
}
