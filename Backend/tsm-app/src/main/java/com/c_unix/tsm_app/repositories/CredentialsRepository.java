package com.c_unix.tsm_app.repositories;

import com.c_unix.tsm_app.entities.Credentials;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CredentialsRepository extends JpaRepository<Credentials,Long> {
    Credentials findByUserName(String userName);
}
