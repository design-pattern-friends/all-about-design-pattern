package observer;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

public class IceCreamShop {

    private final Map<String, Integer> items = Map.of(
            "바밤바",1000,
            "비비빅",1100,
            "죠스바",800,
            "쌍쌍바",1200
    );
    private int benefit = 0;
    private int salesTime = 0;
    private Entry<String,Integer> lastOrder;
    private List<Observer> observers = new ArrayList<>();

    public void refresh() {
        observers.forEach(observer -> observer.update());
    }

    public void sale(String item, int count) {
        salesTime += 1;
        benefit += items.get(item) * count;
        lastOrder = Map.entry(item,count);
        refresh();
    }

    public void addObserver(Observer observer) {
        observers.add(observer);
    }

    public void deleteObserver(Observer observer) {
        observers.remove(observer);
    }

    public int getBenefit() {
        return benefit;
    }

    public List<Observer> getObservers() {
        return observers;
    }

    public int getSalesTime() {
        return salesTime;
    }

    public Entry<String, Integer> getLastOrder(){
        return lastOrder;
    }
}
