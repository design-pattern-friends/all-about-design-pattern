package command.example.many.button;

import java.util.Arrays;

public class RemoteControl {
	Command[] onCommands;
	Command[] offCommands;
	Command undoCommand;
	
	public RemoteControl() {
		this.onCommands = new Command[7];
		this.offCommands = new Command[7];
		
		Command noCommand = new NoCommand();
		for (int i = 0; i < 7; i++) {
			this.onCommands[i] = noCommand;
			this.offCommands[i] = noCommand;
		}
		this.undoCommand = noCommand;
	}
	
	public void setCommand(int slot, Command onCommand, Command offCommand) {
		this.onCommands[slot] = onCommand;
		this.offCommands[slot] = offCommand;
	}
	
	public void onButtonWasPushed(int slot) {
		this.onCommands[slot].execute();
		this.undoCommand = onCommands[slot];
	}
	
	public void offButtonWasPushed(int slot) {
		this.offCommands[slot].execute();
		this.undoCommand = offCommands[slot];
	}
	
	@Override
	public String toString() {
		StringBuilder sb = new StringBuilder();
		sb.append("\n-------- Remote Control ---------- \n");
		for (int i = 0; i < onCommands.length; i++) {
			sb.append("[slot " + i + "] " + onCommands[i].getClass().getName() + "    " + offCommands[i].getClass().getName() + "\n");
		}
		return sb.toString();
	}
}
