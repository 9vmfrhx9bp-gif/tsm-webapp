package com.c_unix.tsm_app.controller;


import com.c_unix.tsm_app.dtos.AddAuftrittRequest;
import com.c_unix.tsm_app.dtos.AuftrittDto;
import com.c_unix.tsm_app.entities.Auftritt;
import com.c_unix.tsm_app.mapper.AuftrittMapper;
import com.c_unix.tsm_app.repositories.AuftrittRepository;
import lombok.AllArgsConstructor;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/auftritte")
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:5173/")
public class AuftrittController {
    private final AuftrittRepository auftrittRepository;
    private final AuftrittMapper auftrittMapper;

    @GetMapping
    public ResponseEntity<List<AuftrittDto>> getAuftritte(){
        List<Auftritt> auftritte = auftrittRepository.findAll();
        List<AuftrittDto> response= new ArrayList<>();
        auftritte.stream().forEach(auftritt -> {response.add(auftrittMapper.toDto(auftritt));});
        return ResponseEntity.ok(response);
    }

    @PostMapping
    public ResponseEntity<AuftrittDto> creatAuftritt(@RequestBody AddAuftrittRequest request, UriComponentsBuilder uriBuilder){
        Auftritt auftritt=auftrittMapper.auftrittRequestToEntity(request);
        auftrittRepository.save(auftritt);
        var response = auftrittMapper.toDto(auftritt);
        var uri =  uriBuilder.path("/auftritte/{id}").buildAndExpand(response.getId()).toUri();
        return ResponseEntity.created(uri).body(response);
    }

    @PutMapping
    public ResponseEntity updateAuftritt(@RequestBody AuftrittDto auftrittDto){
        var auftritt = auftrittMapper.toEntity(auftrittDto);
        auftrittRepository.save(auftritt);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteAuftritt(@PathVariable Long id){
    Auftritt auftritt = auftrittRepository.findById(id).orElse(null);
        auftrittRepository.delete(auftritt);
        return ResponseEntity.noContent().build();
    }



}
