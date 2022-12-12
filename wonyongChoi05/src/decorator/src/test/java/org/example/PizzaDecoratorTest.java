package org.example;

import org.junit.jupiter.api.Test;

/**
 * @author 최원용
 * @version 2.0.0
 * @Created by 최원용 on 2022. 12. 12.
 */
class PizzaDecoratorTest {

    @Test
    public void test() {
        System.out.println("불고기 쉬림프 페퍼로니 파인애플 포테이토 고구마 피자 만들기");
        Pizza pizza = new Bulgogi(new Shrimp(new Pepperoni(new Pineapple(new Potato(new SweetPotato(new DefaultPizza()))))));
        pizza.add();
        System.out.println();

    }

}