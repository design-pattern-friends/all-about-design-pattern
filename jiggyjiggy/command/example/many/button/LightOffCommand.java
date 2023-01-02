package command.example.many.button;

public class LightOffCommand implements Command {
	private Light light;
	
	public LightOffCommand(Light light) {
		this.light = light;
	}
	
	@Override
	public void execute() {
		light.off();
	}
	
	@Override
	public void undo() {
	
	}
}
