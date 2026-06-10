package com.c_unix.tsm_app.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.math.BigDecimal;

@Data
@Entity
@Table(name="confirmations")
public class Confirmation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    Long id;

    @Column(name="nachname")
    String nachname;

    @Column(name="vorname")
    String vorname;

    @Column(name="straße")
    String straße;

    @Column(name="hnr")
    int hausNummer;

    @Column(name="plz")
    String postleitzahl;

    @Column(name="stadt")
    String stadt;

    @Column(name="email")
    String email;

    @Column(name="menge")
    int menge;

    @Column(name="date", insertable=false, updatable = false)
    String date;

    @Column(name="auftritt_name")
    String auftrittName;

    @Column(name="status")
    boolean status;

    @Column(name="price")
    BigDecimal price;

}
