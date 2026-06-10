package com.c_unix.tsm_app.dtos;

import lombok.Data;

import java.math.BigDecimal;

@Data
public class AddAuftrittRequest {
    String title;
    String date;
    String location;
    String description;
    BigDecimal preis;
}
