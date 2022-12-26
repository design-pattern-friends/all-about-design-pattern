package singletone;

public class SimpleSingleton {
    private static final SimpleSingleton INSTANCE = new SimpleSingleton();

    public static SimpleSingleton getInstance(){
        return INSTANCE;
    }
}
