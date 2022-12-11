package decorator;

public interface House {
    void description();
    int cost();

    default void displayInfo(){
        description();
        System.out.println("견적 : " + cost() + "원\n");
    }
}
