package decorator.src.java.functionalProgrammingExample.service;

import decorator.src.java.functionalProgrammingExample.model.Price;

public class BasicPriceProcessor implements PriceProcessor {
    @Override
    public Price process(Price price) {
        return price;
    }
}
