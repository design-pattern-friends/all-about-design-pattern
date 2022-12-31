package org.example.concrete;

import org.example.receiver.Tv;
import org.example.command.Command;

/**
 * @author 최원용
 * @version 2.0.0
 * @Created by 최원용 on 2022. 12. 31.
 */
public class VolumeDownCommand implements Command {

    private final Tv tv;

    public VolumeDownCommand(Tv tv) {
        this.tv = tv;
    }

    @Override
    public void execute() {
        tv.volumeDown();
    }
}
