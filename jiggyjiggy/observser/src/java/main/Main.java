package observser.src.java.main;

public class Main {
    public static void main(String[] args) {
        System.out.println("Enter Text : ");
        EventSource eventSource = new EventSource();

        eventSource.addObserver(event -> {
            System.out.println("Received response: " + event);
        });

        eventSource.scanSystemIn();
    }
}
