package example2;

import example2.notice.KakaoTalk;
import example2.subject.History;
import example2.subject.Java;
import example2.subject.CPP;

public class Main {
    public static void main(String[] args) {
        Java java = new Java();
        CPP cpp = new CPP();
        History history = new History();

        KakaoTalk kakaoTalk = new KakaoTalk();

        kakaoTalk.attach(java);
        kakaoTalk.attach(cpp);
        kakaoTalk.attach(history);
        kakaoTalk.notice();
        System.out.println();

        kakaoTalk.detach(cpp);
        kakaoTalk.detach(history);
        kakaoTalk.notice();

    }
}