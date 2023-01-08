package adapter.example;

public class Main {
	public static void main(String[] args) {
		Duck mallardDuck = new MallardDuck();
		Turkey wildTurkey = new WildTurkey();

		mallardDuck.fly();
		wildTurkey.fly();
		
		mallardDuck.quack();
		wildTurkey.gobble();
		
		// Duck interface로 adapt
		testDuck(new TurkeyToDuckAdapter(wildTurkey));
	}
	
	private static void testDuck(Duck duck) {
		duck.quack();
		duck.fly();
	}
}
