package command;

public class ResourceReleaseTask implements Task {

    private Program program;

    ResourceReleaseTask(Program program) {
        this.program = program;
    }

    @Override
    public void execute() {
        Memory.release(program);
    }

    @Override
    public void rollback() {
        Memory.allocate(program);
    }
}
