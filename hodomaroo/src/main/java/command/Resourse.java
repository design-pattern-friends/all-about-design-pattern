package command;

public class Resourse {

    private Program allocatedProgram = null;

    public boolean allocation(Program program) {
        if (allocatedProgram != null) {
            return false;
        }

        System.out.println(program.toString() + "에 자원을 할당합니다.");
        allocatedProgram = program;
        return true;
    }

    public boolean release() {
        if (allocatedProgram == null) {
            return false;
        }
        System.out.println(allocatedProgram.toString() + "의 자원 할당을 제거합니다.");
        return true;
    }

    public void status(){
        System.out.println(allocatedProgram.toString() + "에 할당되어 있습니다.");
    }
}
