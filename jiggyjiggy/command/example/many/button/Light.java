package command.example.many.button;

public class Light {
	private final String spaceName;
	public Light(String spaceName) {
		this.spaceName = spaceName;
	}
	
	public void on() {
		System.out.println(this.spaceName + " " + Light.class.getSimpleName() + " - turn on");
	}
	
	public void off() {
		System.out.println(this.spaceName + " " + Light.class.getSimpleName() + " - turn off");
	}
}
