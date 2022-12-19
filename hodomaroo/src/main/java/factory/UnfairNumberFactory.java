package factory;

import java.util.List;
import java.util.Random;

public class UnfairNumberFactory implements NumberFactory {

    private static final List<Integer> secretNumbers = List.of(1, 3);
    private Random random = new Random();

    @Override
    public int getRandomNumber() {
        return secretNumbers.get(random.nextInt(0, secretNumbers.size()));
    }
}
