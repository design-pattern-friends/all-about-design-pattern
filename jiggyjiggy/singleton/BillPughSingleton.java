package singleton;

/**
 * Double checked에 비해 구현이 간단
 * Lazy loading이 가능
 * Thread safe
 * */
public class BillPughSingleton {
	private BillPughSingleton() {}
	
	private static class SingletonHelper {
		/**
		 * final 예약어가 있기때문에 처음 초기화 이후, 재할당이 되지 않음
		 * 따라서 여러 스레드에 대해 동시성 위협에서 벗어남 (Thread safe)
		 * */
		private static final BillPughSingleton INSTANCE = new BillPughSingleton();
	}
	
	public static BillPughSingleton getInstance() {
		return SingletonHelper.INSTANCE;
	}
}
