package org.example.laptop;

/**
 * @author 최원용
 * @version 2.0.0
 * @Created by 최원용 on 2023. 01. 08.
 */
public class On implements Power {
    @Override
    public void execute() {
        System.out.println("노트북 전원을 켭니다.");
    }
}
