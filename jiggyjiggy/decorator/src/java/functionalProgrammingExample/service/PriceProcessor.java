package decorator.src.java.functionalProgrammingExample.service;

import decorator.src.java.functionalProgrammingExample.model.Price;

@FunctionalInterface
public interface PriceProcessor {
    Price process(Price price);

    default PriceProcessor andThen(PriceProcessor next) {
        return price -> next.process(process(price));
    }
}
