package observer.observer.bang;

import observer.observer.Player;

public class Willy extends Player implements Bang {

    public Willy() {
        super("Willy");
    }

    @Override
    public void attack() {
        System.out.println("발차기");
        super.score();
    }
}
