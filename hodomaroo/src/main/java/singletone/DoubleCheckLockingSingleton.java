package singletone;

public class DoubleCheckLockingSingleton {
    private volatile static DoubleCheckLockingSingleton INSTANCE;
    private DoubleCheckLockingSingleton() {
    }

    public static DoubleCheckLockingSingleton getInstance() {
        if(INSTANCE == null) {
            synchronized (DoubleCheckLockingSingleton.class) {
                if(INSTANCE == null) {
                    INSTANCE = new DoubleCheckLockingSingleton();
                }
            }
        }
        return INSTANCE;
    }
    //functions
}
