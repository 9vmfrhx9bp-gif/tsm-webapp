package com.c_unix.tsm_app.repositories;

import com.c_unix.tsm_app.entities.Auftritt;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AuftrittRepository extends JpaRepository<Auftritt,Long> {
    public Auftritt findByTitle(String title);
}
