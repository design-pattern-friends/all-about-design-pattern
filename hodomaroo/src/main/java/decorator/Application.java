package decorator;

public class Application {

    public static void main(String[] args) {
        House house = new DefaultHouse();
        house = new BoilerDecorator(house);
        house = new RoofTopDecorator(house);
        house = new MultiFlooredDecorator(house);

        house.displayInfo();

        House house2 = new DefaultHouse();
        house2 = new MultiFlooredDecorator(house2);

        System.out.println(house2.cost());
        house2.displayInfo();
    }
}
