package observer;

import observer.observer.bang.Bart;
import observer.observer.bang.Suzy;
import observer.observer.bang.Willy;
import observer.subject.Bang;
import observer.subject.Game;

public class Main {

    public static void main(String[] args) {
        Game bang = new Bang();
        Bart bart = new Bart();
        Suzy suzy = new Suzy();
        Willy willy = new Willy();

        bart.join(bang);
        suzy.join(bang);
        willy.join(bang);

        willy.attack();
        willy.attack();
        bart.attack();

        bart.leave();
        suzy.leave();
    }
}
