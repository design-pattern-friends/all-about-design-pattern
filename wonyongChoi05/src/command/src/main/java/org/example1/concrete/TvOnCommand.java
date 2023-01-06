package org.example1.concrete;

import org.example1.command.Command;
import org.example1.receiver.TvOn;

/**
 * @author 최원용
 * @version 2.0.0
 * @Created by 최원용 on 2023. 01. 01.
 */
public class TvOnCommand implements Command {

    private final TvOn tvOn;

    public TvOnCommand(TvOn on) {
        this.tvOn = on;
    }

    @Override
    public void execute() {
        tvOn.on();
    }
}
