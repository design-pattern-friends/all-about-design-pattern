package observer.observer;

import java.util.HashMap;
import java.util.List;
import observer.Event;
import observer.subject.Game;

public abstract class Player {

    private Game game;
    private final String name;

    protected Player(String name) {
        this.name = name;
    }

    public void receive(Event event) {
        printBar();
        if (event == Event.JOIN || event == Event.LEAVE) {
            List<Player> players = game.getPlayers();
            printPlayers(players);
        }

        if (event == Event.SCORE) {
            HashMap<Player, Integer> scoreBoard = game.getScoreBoard();
            printScoreBoard(scoreBoard);
        }
        printBar();
    }

    public void join(Game game) {
        this.game = game;
        this.game.join(this);
    }

    public void leave() {
        game.leave(this);
    }

    protected void score() {
        game.score(this);
    }

    public String getName() {
        return name;
    }

    private void printPlayers(List<Player> players) {
        System.out.println("플레이어 목록");
        players.forEach(player -> System.out.println(player.getName()));
    }

    private void printScoreBoard(HashMap<Player, Integer> scoreBoard) {
        System.out.println("점수 목록");
        scoreBoard.forEach((player, score) -> {
            String name = player.getName();
            System.out.println(name + "::: " + score);
        });
    }

    private void printBar() {
        System.out.println("================");
    }
}
