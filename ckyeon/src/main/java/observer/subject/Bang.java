package observer.subject;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import observer.Event;
import observer.observer.Player;

public class Bang implements Game {

    private final List<Player> players;

    private final HashMap<Player, Integer> scoreBoard;

    public Bang() {
        this.players = new ArrayList<>();
        this.scoreBoard = new HashMap<>();
    }

    @Override
    public void notifyEvent(Event event) {
        players.forEach(player -> player.receive(event));
    }

    @Override
    public void join(Player player) {
        players.add(player);
        scoreBoard.put(player, 0);
        joinEvent(player);
    }

    @Override
    public void leave(Player player) {
        players.remove(player);
        scoreBoard.remove(player);
        leaveEvent(player);
    }

    @Override
    public void score(Player player) {
        scoreBoard.merge(player, 1, Integer::sum);
        scoreEvent(player);
    }

    @Override
    public List<Player> getPlayers() {
        return players;
    }

    @Override
    public HashMap<Player, Integer> getScoreBoard() {
        return scoreBoard;
    }

    private void joinEvent(Player player) {
        String name = player.getName();
        System.out.println(name + " 플레이어가 참가했습니다.");
        notifyEvent(Event.JOIN);
    }

    private void leaveEvent(Player player) {
        String name = player.getName();
        System.out.println(name + " 플레이어가 떠났습니다.");
        notifyEvent(Event.LEAVE);
    }

    private void scoreEvent(Player player) {
        String name = player.getName();
        System.out.println(name + " 플레이어가 득점했습니다.");
        notifyEvent(Event.SCORE);
    }
}
