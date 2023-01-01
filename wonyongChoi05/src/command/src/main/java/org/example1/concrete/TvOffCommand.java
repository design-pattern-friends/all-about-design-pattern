package org.example1.concrete;

import org.example1.command.Command;
import org.example1.receiver.TvOff;

/**
 * @author 최원용
 * @version 2.0.0
 * @Created by 최원용 on 2022. 12. 31.
 */
public class TvOffCommand implements Command {

    private final TvOff tvOff;

    public TvOffCommand(TvOff tvOff) {
        this.tvOff = tvOff;
    }

    @Override
    public void execute() {
        tvOff.off();
    }
}
