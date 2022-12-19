package observer.subject;

import java.util.HashMap;
import java.util.List;
import observer.Event;
import observer.observer.Player;

public interface Game {

    void join(Player player);

    void leave(Player player);

    void score(Player player);

    void notifyEvent(Event event);

    List<Player> getPlayers();

    HashMap<Player, Integer> getScoreBoard();
}
