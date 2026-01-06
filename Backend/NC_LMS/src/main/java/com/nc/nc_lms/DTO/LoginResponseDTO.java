package com.nc.nc_lms.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class LoginResponseDTO {
    private String token;
    private String refreshToken;
    private String type = "Bearer";
    private Long expiresIn;
    private UserResponseDTO user;

    public LoginResponseDTO(String token, String refreshToken, Long expiresIn, UserResponseDTO user) {
        this.token = token;
        this.refreshToken = refreshToken;
        this.expiresIn = expiresIn;
        this.user = user;
        this.type = "Bearer";
    }
}