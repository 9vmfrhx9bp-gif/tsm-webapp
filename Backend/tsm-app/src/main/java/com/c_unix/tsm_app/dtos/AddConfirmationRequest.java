package com.c_unix.tsm_app.dtos;

import lombok.Data;

import java.math.BigDecimal;

@Data
public class AddConfirmationRequest {
    String nachname;
    String vorname;
    String auftrittName;
    String straße;
    int hausNummer;
    String postleitzahl;
    String stadt;
    String email;
    String menge;
    BigDecimal preis;
}
