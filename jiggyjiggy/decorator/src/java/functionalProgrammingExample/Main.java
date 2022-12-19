package decorator.src.java.functionalProgrammingExample;

import decorator.src.java.functionalProgrammingExample.model.Price;
import decorator.src.java.functionalProgrammingExample.service.BasicPriceProcessor;
import decorator.src.java.functionalProgrammingExample.service.DiscountPriceProcessor;
import decorator.src.java.functionalProgrammingExample.service.PriceProcessor;
import decorator.src.java.functionalProgrammingExample.service.TaxPriceProcessor;

public class Main {
    public static void main(String[] args) {
        Price unprocessedPrice = new Price("Original Price");

        PriceProcessor basicPriceProcessor = new BasicPriceProcessor();
        PriceProcessor discountPriceProcessor = new DiscountPriceProcessor();
        PriceProcessor taxPriceProcessor = new TaxPriceProcessor();

        PriceProcessor decoratedPriceProcessor = basicPriceProcessor
                .andThen(discountPriceProcessor)
                .andThen(taxPriceProcessor);

        Price processedPrice = decoratedPriceProcessor.process(unprocessedPrice);
        System.out.println(processedPrice.getPrice());  // Original Price, then applied discount, then applied tax
        // 단 위의 방식은, decorator 클래스들의 실제 구현으로 인해 클래스 양이 방대해진다.


        // 함수형 인터페이스를 이용해 람다로써 클래스 생성 없이 사용하면 간결해지는 장점도 있다
        // 하지만 클래스로 만들지 않았기에 재활용은 불가능하다는 단점이 있다.
        PriceProcessor decoratedPriceProcessor2 = basicPriceProcessor
                .andThen(taxPriceProcessor)
                .andThen(price -> new Price(price.getPrice() + ", then apply another procedure")); // PriceProcessor 가 functional inteface 이기 때문에 람다를 통해 바로 구현 가능

        Price processedPrice2 = decoratedPriceProcessor2.process(unprocessedPrice);
        System.out.println(processedPrice2.getPrice()); // Original Price, then applied tax, then apply another procedure
    }
}
