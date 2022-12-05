package strategy;

import java.util.Arrays;
import java.util.NoSuchElementException;

public class CardPaymentStrategy implements PaymentStrategy{

    @Override
    public void pay() {
        System.out.println("카드로 결제합니다.");
    }
}


class PointPaymentStrategy implements PaymentStrategy{

    @Override
    public void pay() {
        System.out.println("포인트로 결제합니다.");
    }
}

class CashPaymentStrategy implements PaymentStrategy{

    @Override
    public void pay() {
        System.out.println("현금으로 결제합니다.");
    }
}

enum PaymentStrategies{
    CARD_PAYMENT("card", new CardPaymentStrategy()),
    CASH_PAYMENT("cash", new CashPaymentStrategy()),
    POINT_PAYMENT("point", new PointPaymentStrategy());
    private final String name;
    private final PaymentStrategy paymentStrategy;

    PaymentStrategies(String name, PaymentStrategy paymentStrategy){
        this.name = name;
        this.paymentStrategy = paymentStrategy;
    }

    public static PaymentStrategies getPaymentStrategy(String paymentName){
        return Arrays.stream(PaymentStrategies.values()).filter((strategies) -> strategies.name == paymentName).findAny().orElseThrow(
                NoSuchElementException::new);
    }
}