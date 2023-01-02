package command;

public class VaccinProgram implements Program{
    private boolean running = false;

    @Override
    public void run() {
        System.out.println("백신 프로그램을 구동합니다..");
        running = true;
    }

    @Override
    public void stop() {
        System.out.println("백신 프로그램을 종료합니다.");
        running = false;
    }

    public boolean isRunning(){
        return running;
    }
}
