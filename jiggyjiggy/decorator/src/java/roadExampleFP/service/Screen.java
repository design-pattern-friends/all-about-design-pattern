package decorator.src.java.roadExampleFP.service;

import decorator.src.java.roadExampleFP.model.Display;

public class Screen implements DisplayDecorator{
    @Override
    public Display draw(Display display) {
        return display;
    }
}
