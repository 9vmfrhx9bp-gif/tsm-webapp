package com.c_unix.tsm_app.dtos;

import lombok.Data;

@Data
public class AuftrittDto {
    Long id;
    String title;
    String location;
    String date;
    String description;
}
