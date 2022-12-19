package factory;

public class Application {

    public static void main(String[] args) {
        Game fairGame = new Game(new FairNumberFactory());
        fairGame.playGame();

        Game unfairGame = new Game(new UnfairNumberFactory());
        unfairGame.playGame();
    }
}
