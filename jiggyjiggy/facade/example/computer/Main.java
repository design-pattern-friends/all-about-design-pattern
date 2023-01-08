package facade.example.computer;

public class Main {
	public static void main(String[] args) {
		Computer computer = new Computer();
		
		// facade
		// 복잡한 서브시스템 클래스들을 단순하게 통합된 인터페이스 제공
		computer.startComputer();
	}
}
