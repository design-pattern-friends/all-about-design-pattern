package org.example1.concrete;

import org.example1.command.Command;
import org.example1.receiver.VolumeUp;

/**
 * @author 최원용
 * @version 2.0.0
 * @Created by 최원용 on 2022. 12. 31.
 */
public class VolumeUpCommand implements Command {

    private final VolumeUp volumeUp;

    public VolumeUpCommand(VolumeUp volumeUp) {
        this.volumeUp = volumeUp;
    }

    @Override
    public void execute() {
        volumeUp.up();
    }
}
