package singletone;

public class NonThreadSafeSingleton {
    private static NonThreadSafeSingleton INSTANCE;

    private NonThreadSafeSingleton() {
    }

    public static NonThreadSafeSingleton getInstance() {
        if (INSTANCE == null) {
            INSTANCE = new NonThreadSafeSingleton();
        }

        return INSTANCE;
    }
    //functions
}
