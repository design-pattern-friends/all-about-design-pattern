package facade.example.computer;

import facade.example.computer.part.Cpu;
import facade.example.computer.part.HardDiskDrive;
import facade.example.computer.part.Memory;

public class Computer {
	public String BOOT_ADDRESS;
	public String BOOT_SECTOR;
	public String SECTOR_SIZE;
	
	public void startComputer() {
		Cpu cpu = new Cpu();
		Memory memory = new Memory();
		HardDiskDrive hdd = new HardDiskDrive();
		cpu.freeze();
		memory.load(BOOT_ADDRESS, hdd.read(BOOT_SECTOR, SECTOR_SIZE));
		cpu.jump(BOOT_ADDRESS);
		cpu.execute();
	}
}
