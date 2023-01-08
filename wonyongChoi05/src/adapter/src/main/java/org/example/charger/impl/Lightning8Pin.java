package org.example.charger.impl;

import org.example.charger.adaptee.ChargerPackage;

public class Lightning8Pin implements ChargerPackage {

    @Override
    public void chargingPhone(String chargerType) {
        System.out.println("이 충전기는 " + chargerType + "입니다.");
    }

}
