package command.example.many.button;

public class RemoteLoader2 {
	public static void main(String[] args) {
		RemoteControl remoteControl = new RemoteControl();
		
		// receiver 생성
		Light livingRoomLight = new Light("Living room");
		TV livingRoomTV = new TV("Living room");
		
		// command object 생성
		LightOnCommand livingRoomLightOn = new LightOnCommand(livingRoomLight);
		LightOffCommand livingRoomLightOff = new LightOffCommand(livingRoomLight);
		TVOnCommand tvOnCommand = new TVOnCommand(livingRoomTV);
		TVOffCommand tvOffCommand = new TVOffCommand(livingRoomTV);
		
		// ---
		// command object 들을 작업 순서대로 하나의 command array로 묶음
		Command[] partyOn = {livingRoomLightOn, tvOnCommand};
		Command[] partyOff = {livingRoomLightOff, tvOffCommand};
		
		// command array를 macro command object로 생성한다
		MacroCommand partyOnMacro = new MacroCommand(partyOn);
		MacroCommand partyOffMacro = new MacroCommand(partyOff);
		// ---
		
		// invoker 에 macro command object를 로드
		remoteControl.setCommand(0, partyOnMacro, partyOffMacro);
		System.out.println(remoteControl);
		
		// invoker 를 통해 receiver에게 command object를 전달
		remoteControl.onButtonWasPushed(0);
		remoteControl.offButtonWasPushed(0);
	}
}
