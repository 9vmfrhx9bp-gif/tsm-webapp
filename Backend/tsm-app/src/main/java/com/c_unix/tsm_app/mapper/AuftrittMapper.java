package com.c_unix.tsm_app.mapper;

import com.c_unix.tsm_app.dtos.AuftrittDto;
import com.c_unix.tsm_app.entities.Auftritt;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface AuftrittMapper {
    public AuftrittDto toDto(Auftritt auftritt);
}
