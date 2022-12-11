package observer;

public class Application {


    public static void main(String[] args) {
        IceCreamShop iceCreamShop = new IceCreamShop();
        Observer logger = new Logger(iceCreamShop);
        Observer analyzer = new Analyzer(iceCreamShop);

        iceCreamShop.addObserver(logger);

        iceCreamShop.sale("바밤바",2);

        iceCreamShop.sale("바밤바",1);

        iceCreamShop.addObserver(analyzer);

        iceCreamShop.sale("비비빅",1);
    }
}
