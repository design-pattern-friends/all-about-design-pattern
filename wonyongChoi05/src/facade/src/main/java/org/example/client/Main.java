package org.example.client;

import org.example.facade.ProcessFacade;
import org.example.laptop.Off;
import org.example.laptop.On;
import org.example.process.Google;
import org.example.process.IntelliJ;

/**
 * @author 최원용
 * @version 2.0.0
 * @Created by 최원용 on 2023. 01. 08.
 */
public class Main {
    public static void main(String[] args) {
        ProcessFacade processFacade = new ProcessFacade(new On(), new Off(), new Google(), new IntelliJ());
        processFacade.execute();
    }
}
