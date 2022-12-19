package org.example;

/**
 * @author 최원용
 * @version 2.0.0
 * @Created by 최원용 on 2022. 12. 12.
 */
public class PizzaDecorator implements Pizza {

    private Pizza pizza;

    public PizzaDecorator(Pizza pizza){
        this.pizza = pizza;
    }

    @Override
    public void add() {
        this.pizza.add();
    }
}
