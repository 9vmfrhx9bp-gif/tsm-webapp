package com.c_unix.tsm_app.dtos;

import lombok.Data;

import java.math.BigDecimal;

@Data
public class ConfirmationDto {
    Long id;
    String vorname;
    String nachname;
    String auftrittName;
    int menge;
    String email;
    boolean status;
    BigDecimal price;

}
