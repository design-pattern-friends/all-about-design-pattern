package decorator.src.java.roadExampleFP.service;

import decorator.src.java.roadExampleFP.model.Display;

@FunctionalInterface
public interface DisplayDecorator {
    Display draw(Display display);

    default DisplayDecorator andThen(DisplayDecorator next) {
        return display -> next.draw(draw(display));
    }

}
