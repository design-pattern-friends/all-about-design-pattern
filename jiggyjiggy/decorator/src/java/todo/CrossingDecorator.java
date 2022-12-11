package decorator.src.java.todo;

import decorator.src.java.main.Display;
import decorator.src.java.main.DisplayDecorator;

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
