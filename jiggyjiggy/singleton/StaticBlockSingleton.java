package singleton;
/**
 * Eager initialization과 유사
 * 인스턴스가 static block 내에서 생성됨
 * 예외처리 가능
 *
 * 그러나 여전히 처음 시작시 초기화된다는 단점
 * */
public class StaticBlockSingleton {
	private static StaticBlockSingleton instance;
	
	private StaticBlockSingleton() {
	}
	
	static {
		try {
			instance = new StaticBlockSingleton();
		} catch (Exception e) {
			throw new RuntimeException("싱글톤 객체 생성 오류");
		}
	}
	
	public static StaticBlockSingleton getInstance() {
		return instance;
	}
	
}
