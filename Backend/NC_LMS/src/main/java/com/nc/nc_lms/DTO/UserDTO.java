package com.nc.nc_lms.DTO;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

public class UserDTO {


    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class UserDto {

        private Long id;

        private String email;

        private String username;

        private String firstName;

        private String lastName;

        private String role;

        private Boolean enabled;

        @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
        private LocalDateTime createdAt;

        @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
        private LocalDateTime updatedAt;
    }
}
