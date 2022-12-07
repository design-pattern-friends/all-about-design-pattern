package observer.observer.bang;

import observer.observer.Player;

public class Bart extends Player implements Bang {

    public Bart() {
        super("Bart");
    }

    @Override
    public void attack() {
        System.out.println("화살 발사");
        super.score();
    }
}
