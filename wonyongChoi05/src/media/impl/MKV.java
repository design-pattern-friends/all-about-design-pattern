package media.impl;

import adapter.media.adaptee.MediaPackage;

public class MKV implements MediaPackage {

    @Override
    public void playFile(String filename) {
        System.out.println("MKV 플레이어 시작 : " + filename);
    }

}
