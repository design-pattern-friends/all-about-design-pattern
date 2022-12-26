package observer.observer.bang;

import observer.observer.Player;

public class Suzy extends Player implements Bang {

    public Suzy() {
        super("Suzy");
    }

    @Override
    public void attack() {
        System.out.println("총 발사");
        super.score();
    }
}
