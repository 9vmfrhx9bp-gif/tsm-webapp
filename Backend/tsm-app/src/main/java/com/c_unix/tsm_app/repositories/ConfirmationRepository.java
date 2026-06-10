package com.c_unix.tsm_app.repositories;

import com.c_unix.tsm_app.entities.Confirmation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ConfirmationRepository extends JpaRepository<Confirmation, Long> {

}
