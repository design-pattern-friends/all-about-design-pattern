package org.example1;

import org.example1.concrete.TvOnCommand;
import org.example1.receiver.TvOff;
import org.example1.receiver.TvOn;
import org.example1.receiver.VolumeDown;
import org.example1.receiver.VolumeUp;
import org.example1.concrete.TvOffCommand;
import org.example1.concrete.VolumeDownCommand;
import org.example1.concrete.VolumeUpCommand;
import org.example1.invoker.RemoteControl;

/**
 * @author 최원용
 * @version 2.0.0
 * @Created by 최원용 on ${DATE}
 */

public class Main {
    public static void main(String[] args) {
        final TvOn tvOn = new TvOn();
        final TvOff tvOff = new TvOff();
        final VolumeUp volumeUp = new VolumeUp();
        final VolumeDown volumeDown = new VolumeDown();

        TvOnCommand on = new TvOnCommand(tvOn);
        TvOffCommand off = new TvOffCommand(tvOff);
        VolumeUpCommand up = new VolumeUpCommand(volumeUp);
        VolumeDownCommand down = new VolumeDownCommand(volumeDown);

        RemoteControl btn = new RemoteControl(on);
        btn.pressButton();

        btn.setCommand(off);
        btn.pressButton();

        btn.setCommand(up);
        btn.pressButton();

        btn.setCommand(down);
        btn.pressButton();
    }
}