package command.example.one.button;

public class Main {
	public static void main(String[] args) {
		LightOnCommand lightOn = new LightOnCommand(new Light());
		
		SimpleRemoteControl remote = new SimpleRemoteControl();
		remote.setCommand(lightOn);
		remote.buttonWasPressed();
		
		
	}
}
