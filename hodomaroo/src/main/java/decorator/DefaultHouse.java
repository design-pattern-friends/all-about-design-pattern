package decorator;

public class DefaultHouse implements House{

    @Override
    public void description() {
        System.out.println("집");
    }

    @Override
    public int cost() {
        return 10000;
    }
}
