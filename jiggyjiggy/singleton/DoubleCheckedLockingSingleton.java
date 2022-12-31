package singleton;

import java.util.Objects;

/**
 * Null 체크를 synchronized 블록 밖에서 한번, 안에서 한번. 총 두번 실행
 * 밖에서하는 체크는 인스턴스가 있는 경우 바로 리턴하기 위함
 * 안에서하는 체크는 인스턴스가 생성되지 않은 경우 하나의 인스턴스만 생성하기 위함
 *
 * 다만 synchronized 예약어가 존재하고, indent가 3이나됌
 * */
public class DoubleCheckedLockingSingleton {
	private static DoubleCheckedLockingSingleton instance = null;
	private DoubleCheckedLockingSingleton() {}
	
	public static DoubleCheckedLockingSingleton getInstance() {
		if (Objects.isNull(instance)) {
			synchronized (DoubleCheckedLockingSingleton.class) {
				if (Objects.isNull(instance)) {
					instance = new DoubleCheckedLockingSingleton();
				}
			}
		}
		return instance;
	}
}
