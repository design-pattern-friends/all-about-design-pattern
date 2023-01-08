package org.example.charger.client;

import org.example.charger.adapter.ChargerAdapter;
import org.example.charger.impl.C;
import org.example.charger.impl.Lightning8Pin;
import org.example.charger.impl.Micro5Pin;
import org.example.charger.target.Charger;

public class Main {
    public static void main(String[] args) {
        Charger charger = new C();
        charger.charging("C Type");
        System.out.println();

        charger = new ChargerAdapter(new Lightning8Pin());
        charger.charging("Lightning 8Pin Type");

        charger = new ChargerAdapter(new Micro5Pin());
        charger.charging("Micro 5Pin Type");
    }
}
