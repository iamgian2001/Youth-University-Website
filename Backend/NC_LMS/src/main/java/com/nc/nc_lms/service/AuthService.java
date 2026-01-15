package com.nc.nc_lms.service;

import com.nc.nc_lms.DTO.LoginRequestDTO;
import com.nc.nc_lms.DTO.LoginResponseDTO;
import com.nc.nc_lms.DTO.UserDTO;

public interface AuthService {


    LoginRequestDTO login(LoginRequest request);

    UserDTO.UserDto getCurrentUser(String token);

    void logout(String token);

    LoginResponseDTO refreshToken(String refreshToken);

}
