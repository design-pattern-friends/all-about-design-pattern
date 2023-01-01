package org.example1.concrete;

import org.example1.command.Command;
import org.example1.receiver.VolumeDown;

/**
 * @author 최원용
 * @version 2.0.0
 * @Created by 최원용 on 2022. 12. 31.
 */
public class VolumeDownCommand implements Command {

    private final VolumeDown volumeDown;

    public VolumeDownCommand(VolumeDown volumeDown) {
        this.volumeDown = volumeDown;
    }

    @Override
    public void execute() {
        volumeDown.down();
    }
}
