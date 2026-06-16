package com.c_unix.tsm_app.dtos;

import lombok.Data;

@Data
public class LoginRequest {
    String username;
    String password;
}
