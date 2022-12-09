package observer.example2.notice;

import observer.example2.observer.Subject;

import java.util.ArrayList;
import java.util.List;

public class KakaoTalk {

    private final List<Subject> subjects = new ArrayList<>();

    public void attach(Subject subject) {
        subjects.add(subject);
    }

    public void detach(Subject subject) {
        subjects.remove(subject);
    }

    public void notice() {
        int cnt = 1;
        for (Subject subject : subjects) {
            subject.changeSubject(String.format("%d교시", cnt));
            cnt++;
        }
    }
}
