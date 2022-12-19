package org.example;

/**
 * @author 최원용
 * @version 2.0.0
 * @Created by 최원용 on 2022. 12. 12.
 */
public class Potato extends PizzaDecorator {

    public Potato(Pizza pizza) {
        super(pizza);
    }

    @Override
    public void add() {
        super.add();
        System.out.print("(+ 감자)");
    }
}
