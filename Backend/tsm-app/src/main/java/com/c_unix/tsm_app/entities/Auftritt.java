package com.c_unix.tsm_app.entities;

import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;

@Entity
@Data
@Table(name="auftritte")
public class Auftritt {

    @Id
    @Column(name="id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @Column(name="title")
    String title;

    @Column(name="location")
    String location;

    @Column(name="date")
    String date;

    @Column(name="description")
    String description;

    @Column(name="preis")
    BigDecimal preis;
}
