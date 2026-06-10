package com.c_unix.tsm_app.mapper;

import com.c_unix.tsm_app.dtos.AddConfirmationRequest;
import com.c_unix.tsm_app.dtos.ConfirmationDto;
import com.c_unix.tsm_app.entities.Confirmation;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ConfirmationMapper {
    public ConfirmationDto toDto(Confirmation confirmation);
    public Confirmation toEntity(AddConfirmationRequest request);
}
