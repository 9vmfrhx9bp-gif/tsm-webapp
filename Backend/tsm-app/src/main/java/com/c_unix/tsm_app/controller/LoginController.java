package com.c_unix.tsm_app.controller;

import com.c_unix.tsm_app.dtos.LoginRequest;
import com.c_unix.tsm_app.entities.Credentials;
import com.c_unix.tsm_app.repositories.CredentialsRepository;

import lombok.AllArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/login")
@AllArgsConstructor
@CrossOrigin(origins = "http://${deployment.host}:${deployment.port}/")
public class LoginController {

    private final CredentialsRepository credentialsRepository;

    @PostMapping
    public ResponseEntity login(@RequestBody LoginRequest request){
        Credentials credentials=credentialsRepository.findByUserName(request.getUsername());
        if(credentials==null){
            return ResponseEntity.notFound().build();
        }
        if(!(credentials.getPassword().equals(request.getPassword()))){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        return ResponseEntity.ok().build();
    }
}
