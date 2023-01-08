package media.impl;

import adapter.media.adaptee.MediaPackage;

public class Mp4 implements MediaPackage {

    @Override
    public void playFile(String filename) {
        System.out.println("Mp4 플레이어 시작 : " + filename);
    }

}
