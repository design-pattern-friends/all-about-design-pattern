package singletone;

public class SynchronizedSingleton {
    private static SynchronizedSingleton INSTANCE;
    private SynchronizedSingleton() {
    }

    public static SynchronizedSingleton getInstance() {
        if (INSTANCE == null) {
            INSTANCE = new SynchronizedSingleton();
        }
        return INSTANCE;
    }
    //functions
}
