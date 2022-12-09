package example2.observer;

public class Subject {

    public String subject;

    public void changeSubject(String time) {
        System.out.println(time + "가 " + subject + "로 변경되었습니다.");
    }

}
