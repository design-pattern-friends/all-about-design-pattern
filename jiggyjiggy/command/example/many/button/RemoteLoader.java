package command.example.many.button;

public class RemoteLoader {
	public static void main(String[] args) {
		RemoteControl remoteControl = new RemoteControl();
		
		// receiver 생성
		Light livingRoomLight = new Light("Living room");
		
		// command object 생성
		LightOnCommand livingRoomLightOn = new LightOnCommand(livingRoomLight);
		LightOffCommand livingRoomLightOff = new LightOffCommand(livingRoomLight);
		
		// invoker 에 command object를 로드
		remoteControl.setCommand(0, livingRoomLightOn, livingRoomLightOff);
		System.out.println(remoteControl);
		
		// invoker 를 통해 receiver에게 command object를 전달
		remoteControl.onButtonWasPushed(0);
		remoteControl.offButtonWasPushed(0);
	}
}
