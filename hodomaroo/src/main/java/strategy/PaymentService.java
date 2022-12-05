package strategy;

public class PaymentService {
    //별도의 다른 기능들 or 전체적으로 적용되는 비용 할인 행사 등

    void pay(PaymentStrategy paymentStrategy){
        paymentStrategy.pay();
    }
}
