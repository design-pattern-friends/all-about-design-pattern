package singleton;

/**
 * 클라이언트에서 사용하지 않더라도 인스턴스가 항상 생성됨
 * 예외 처리를 할 수 있는 방법이 없음
 * */
public class EagerSingleton {
	private static EagerSingleton instance = new EagerSingleton();
	private EagerSingleton() {}
	
	public static EagerSingleton getInstance() {
		return instance;
	}
}

