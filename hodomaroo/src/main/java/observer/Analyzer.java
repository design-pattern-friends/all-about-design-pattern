package observer;

public class Analyzer implements Observer {
    private IceCreamShop iceCreamShop;
    private int salesTime;
    private int benefit;
    private int averageBenefit;

    public Analyzer(IceCreamShop iceCreamShop) {
        this.iceCreamShop = iceCreamShop;
        salesTime = 0;
    }

    @Override
    public void update() {
        salesTime += iceCreamShop.getSalesTime();
        benefit += iceCreamShop.getBenefit();
        averageBenefit = benefit / salesTime;
        display();
    }

    @Override
    public void display() {
        System.out.println("---통계 데이터를 출력합니다.---");
        System.out.printf("현재까지, 총 %d원을 벌었습니다.\n",benefit);
        System.out.printf("현재까지, 총 %d회 아이스크림을 판매했습니다\n",salesTime);
        System.out.printf("한번 아이스크림을 판매할 때, %d원의 이득을 얻습니다.\n",averageBenefit);
    }
}
