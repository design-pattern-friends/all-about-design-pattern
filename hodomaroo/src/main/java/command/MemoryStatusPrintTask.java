package command;

public class MemoryStatusPrintTask implements Task{

    @Override
    public void execute() {
        Memory.printAllocationMap();
    }

    @Override
    public void rollback() {

    }
}
