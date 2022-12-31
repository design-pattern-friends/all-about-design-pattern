package singleton;

public class ThreadSafeSingleton {
	private static ThreadSafeSingleton instance;
	private ThreadSafeSingleton() {}
	
	// synchronized : 하나의 스레드가 접근하면 나머지 스레드의 접근을 대기시킨다
	// 따라서 성능저하가 존재한다
	public static synchronized ThreadSafeSingleton getInstance() {
		if (instance == null) {
			instance = new ThreadSafeSingleton();
		}
		return instance;
	}
}
