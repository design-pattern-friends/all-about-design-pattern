package media.impl;

import adapter.media.target.MediaPlayer;

public class Mp3 implements MediaPlayer {

    @Override
    public void play(String filename) {
        System.out.println("Mp3 플레이어 시작 : " + filename);
    }

}
