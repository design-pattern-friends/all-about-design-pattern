package org.example;

/**
 * @author 최원용
 * @version 2.0.0
 * @Created by 최원용 on 2022. 12. 12.
 */
public class DefaultPizza implements Pizza {
    @Override
    public void add() {
        System.out.print("피자 도우 + 토마토 소스 + 치즈 ");
    }
}
