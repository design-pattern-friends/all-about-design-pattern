package observer;

import java.util.LinkedList;
import java.util.List;
import java.util.Map.Entry;

public class Logger implements Observer {

    private IceCreamShop iceCreamShop;
    private String lastItem;
    private int lastBenefit;
    List<Entry> log = new LinkedList<>();

    public Logger(IceCreamShop iceCreamShop) {
        this.iceCreamShop = iceCreamShop;
    }

    @Override
    public void update() {
        log.add(iceCreamShop.getLastOrder());
        display();
    }

    @Override
    public void display() {
        System.out.println("----현재까지의 판매 기록을 출력합니다.----");
        log.forEach((data) -> System.out.printf("%s를 %d개 구매하였습니다.\n", data.getKey(), data.getValue()));
        System.out.println();
    }
}
