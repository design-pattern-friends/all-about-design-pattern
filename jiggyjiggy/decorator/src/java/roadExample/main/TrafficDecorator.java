package decorator.src.java.roadExample.main;

public class TrafficDecorator extends DisplayDecorator {

    public TrafficDecorator(Display decoratorDisplay) {
        super(decoratorDisplay);
    }

    private void drawTraffic() {
        System.out.println("\t교통량 표시");
    }

    @Override
    public void draw() {
        super.draw();
        drawTraffic();
    }
}
