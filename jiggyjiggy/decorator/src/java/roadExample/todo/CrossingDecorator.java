package decorator.src.java.roadExample.todo;

import decorator.src.java.roadExample.main.Display;
import decorator.src.java.roadExample.main.DisplayDecorator;

public class CrossingDecorator extends DisplayDecorator {

    public CrossingDecorator(Display decoratorDisplay) {
        super(decoratorDisplay);
    }

    private void drawCrossing() {
        System.out.println("\t교차로 표시");
    }

    @Override
    public void draw() {
        super.draw();
        drawCrossing();
    }
}
