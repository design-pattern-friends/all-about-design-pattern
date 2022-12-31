package singleton;

import java.util.Objects;

/**
 * getInstance() 호출 이외에는 인스턴스를 생성하지 않음
 * Eager initialization의 단점을 보완
 *
 * 스레드 세이프하지 않음 (멀티스레드환경에서 수많은 인스턴스가 생성될 수 있음)
 * */
public class LazyInitializationSingleton {
	private static LazyInitializationSingleton instance;
	private LazyInitializationSingleton() {}
	
	public static LazyInitializationSingleton getInstance() {
		if (Objects.isNull(instance)) {
			instance = new LazyInitializationSingleton();
		}
		return instance;
	}
}
