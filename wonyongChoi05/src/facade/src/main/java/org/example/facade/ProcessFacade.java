package org.example.facade;

import org.example.laptop.Off;
import org.example.laptop.On;
import org.example.laptop.Power;
import org.example.process.Google;
import org.example.process.IntelliJ;

/**
 * @author 최원용
 * @version 2.0.0
 * @Created by 최원용 on 2023. 01. 08.
 */
public class ProcessFacade {

    private final On on;
    private final Off off;
    private final Google google;
    private final IntelliJ intelliJ;

    public ProcessFacade(On on, Off off, Google google, IntelliJ intelliJ) {
        this.on = on;
        this.off = off;
        this.google = google;
        this.intelliJ = intelliJ;
    }

    public void execute() {
        on.execute();
        google.execute();
        intelliJ.execute();
        off.execute();
    }
}
