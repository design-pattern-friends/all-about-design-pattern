package org.example;

import org.example.concrete.TvOffCommand;
import org.example.concrete.TvOnCommand;
import org.example.concrete.VolumeDownCommand;
import org.example.concrete.VolumeUpCommand;
import org.example.invoker.RemoteControl;
import org.example.receiver.Tv;

/**
 * @author 최원용
 * @version 2.0.0
 * @Created by 최원용 on ${DATE}
 */

public class Main {
    public static void main(String[] args) {
        final Tv tv = new Tv();

        TvOnCommand on = new TvOnCommand(tv);
        TvOffCommand off = new TvOffCommand(tv);
        VolumeUpCommand up = new VolumeUpCommand(tv);
        VolumeDownCommand down = new VolumeDownCommand(tv);

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