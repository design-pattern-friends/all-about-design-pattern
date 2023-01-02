package command;

public class ResourceAllocationTask implements Task{
    private Program program;

    ResourceAllocationTask(Program program){
        this.program = program;
    }

    @Override
    public void execute() {
        Memory.allocate(program);
    }

    @Override
    public void rollback() {
        Memory.release(program);
    }
}
