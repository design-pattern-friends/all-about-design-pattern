package singletone;

public class HolderSingleton {
    private static final class Holder{
        private static final HolderSingleton INSTANCE = new HolderSingleton();
    }

    public static HolderSingleton getInstance(){
        return Holder.INSTANCE;
    }
}
