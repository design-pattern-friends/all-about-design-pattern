package media.adapter;

import adapter.media.adaptee.MediaPackage;
import adapter.media.target.MediaPlayer;

// Adapter(FormatAdapter)는 Target(MediaPlayer) 클래스를 구현하고 있다.
public class FormatAdapter implements MediaPlayer {

    // Adapter(FormatAdapter)는 Adaptee(MediaPackage)를 감싸고 있다.
    private MediaPackage media;

    public FormatAdapter(MediaPackage media) {
        this.media = media;
    }

    @Override
    public void play(String filename) {
        System.out.print("어댑터 사용 중 -> ");
        media.playFile(filename);
    }

}
