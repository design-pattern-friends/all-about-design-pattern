package factory;

import java.util.Random;

public class FairNumberFactory implements NumberFactory {

    @Override
    public int getRandomNumber() {
        Random random = new Random();
        return random.nextInt(1, 50);
    }
}
