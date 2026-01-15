package com.nc.nc_lms.mapper;

import com.nc.nc_lms.dto.RegisterRequest;
import com.nc.nc_lms.dto.UserDto;
import com.nc.nc_lms.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;


public interface AuthMapper {

    AuthMapper INSTANCE = Mappers.getMapper(AuthMapper.class);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "passwordHash", ignore = true)
    @Mapping(target = "role", ignore = true)
    @Mapping(target = "profilePic", ignore = true)
    User registerRequestToUser(RegisterRequest request);

    @Mapping(target = "nic", ignore = true)
    @Mapping(target = "passwordHash", ignore = true)
    UserDto userToUserDto(User user);


}