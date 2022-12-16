package decorator.src.java.functionalProgrammingExample.service;

import decorator.src.java.functionalProgrammingExample.model.Price;

public class DiscountPriceProcessor implements PriceProcessor {
    @Override
    public Price process(Price price) {
        return new Price(price.getPrice() + ", then applied discount");
    }
}
