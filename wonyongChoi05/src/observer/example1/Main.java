package observer.example1;

public class Main {
    public static void main(String[] args) {
        Notice notice = new Notice();
        User1 user1 = new User1("유저1");
        User2 user2 = new User2("유저2");

        notice.attach(user1);
        notice.attach(user2);

        String msg = "공지사항입니다!";
        notice.notifyObservers(msg);

        notice.detach(user1);
        msg = "user2에게만 공지한다.";
        notice.notifyObservers(msg);
    }
}
