package media.client;

import adapter.media.adapter.FormatAdapter;
import adapter.media.impl.MKV;
import adapter.media.impl.Mp3;
import adapter.media.impl.Mp4;
import adapter.media.target.MediaPlayer;

public class Main {
    public static void main(String[] args) {

        // Client(MediaPlayer)는 Target(Mp3)을 요구한다.
        MediaPlayer player = new Mp3();
        player.play("Malibu.mp3");

        // mp4 파일은 mp3 만 재생할 수 있는 MediaPlayer 를 사용하지 못한다.
        // -> 따라서 어댑터를 사용해야 한다.
        player = new FormatAdapter(new Mp4());
        player.play("올빼미.mp4");

        player = new FormatAdapter(new MKV());
        player.play("블랙 팬서: 와칸다 포에버.mkv");

    }
}
