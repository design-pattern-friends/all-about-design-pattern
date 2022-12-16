package decorator.src.java.roadExample.main;

public class LaneDecorator extends DisplayDecorator {

    public LaneDecorator(Display decoratorDisplay) {
        super(decoratorDisplay);
    }

    private void drawLine() {
        System.out.println("\t차선 표시");
    }
    @Override
    public void draw() {
        super.draw();
            drawLine();
    }
}
