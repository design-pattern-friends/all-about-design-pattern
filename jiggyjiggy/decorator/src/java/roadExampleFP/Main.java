package decorator.src.java.roadExampleFP;

import decorator.src.java.roadExampleFP.model.Display;
import decorator.src.java.roadExampleFP.service.DisplayDecorator;
import decorator.src.java.roadExampleFP.service.Screen;

public class Main {
    public static void main(String[] args) {
        Display basicDisplay = new Display("기본 도로 표시");

        DisplayDecorator displayDecoratingProcessor = new Screen()
                .andThen(display -> new Display(display.getDisplay() + "\n\t차선 추가"))
                .andThen(display -> new Display(display.getDisplay() + "\n\t교통량 표시"))
                .andThen(display -> new Display(display.getDisplay() + "\n\t교차로 표시"));

        Display decoratedDisplay = displayDecoratingProcessor.draw(basicDisplay);
        System.out.println(decoratedDisplay.getDisplay());
        // 기본 도로 표시
        // 차선 추가
        // 교통량 표시
        // 교차로 표시
    }
}
