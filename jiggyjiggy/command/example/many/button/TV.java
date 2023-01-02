package command.example.many.button;

public class TV {
	private final String spaceName;
	public TV(String spaceName) {
		this.spaceName = spaceName;
	}
	public void on() {
		System.out.println(this.spaceName + " " + TV.class.getSimpleName() + " - turn on");
	}
	
	public void off() {
		System.out.println(this.spaceName + " " + TV.class.getSimpleName() + " - turn off");
	}
}
