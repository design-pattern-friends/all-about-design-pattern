package org.example.charger.impl;

import org.example.charger.target.Charger;

public class C implements Charger {

    @Override
    public void charging(String type) {
        System.out.println("이 충전기는 " + type + "입니다.");
    }
}
