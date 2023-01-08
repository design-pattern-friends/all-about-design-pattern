package org.example.charger.adapter;

import org.example.charger.adaptee.ChargerPackage;
import org.example.charger.target.Charger;

public class ChargerAdapter implements Charger {

    private ChargerPackage media;

    public ChargerAdapter(ChargerPackage media) {
        this.media = media;
    }

    @Override
    public void charging(String type) {
        System.out.print("C Type으로 고정된 충전기에 어댑터를 사용합니다. -> " );
        media.chargingPhone(type);
        System.out.println();
    }

}
