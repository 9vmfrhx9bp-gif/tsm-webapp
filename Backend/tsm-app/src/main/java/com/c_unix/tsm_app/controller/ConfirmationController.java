package com.c_unix.tsm_app.controller;

import com.c_unix.tsm_app.dtos.AddConfirmationRequest;
import com.c_unix.tsm_app.dtos.ConfirmationDto;
import com.c_unix.tsm_app.entities.Confirmation;
import com.c_unix.tsm_app.mapper.ConfirmationMapper;
import com.c_unix.tsm_app.repositories.ConfirmationRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/confirmations")
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:5173/")
public class ConfirmationController {

    private final ConfirmationMapper confirmationMapper;
    private final ConfirmationRepository confirmationRepository;

    @GetMapping
    public ResponseEntity<List<ConfirmationDto>> getAllConfirmations(){
        List<Confirmation> confirmations =confirmationRepository.findAll();
        List<ConfirmationDto> response = new ArrayList<>();
        confirmations.stream().forEach(confirmation -> {response.add(confirmationMapper.toDto(confirmation));});
        return ResponseEntity.ok(response);

    }

    @PostMapping
    public ResponseEntity<ConfirmationDto> addConfirmation(@RequestBody AddConfirmationRequest request, UriComponentsBuilder uriBuilder){
        Confirmation confirmation = confirmationMapper.toEntity(request);
        confirmationRepository.save(confirmation);
        var response = confirmationMapper.toDto(confirmation);
        var uri = uriBuilder.path("/confirmations/{id}").buildAndExpand(response.getId()).toUri();
        return ResponseEntity.created(uri).body(response);
    }

    @PutMapping("/{id}")
    public ResponseEntity updateConfirmationStatus(@PathVariable Long id){
        Confirmation confirmation = confirmationRepository.findById(id).orElse(null);
        if(confirmation==null){
            return ResponseEntity.notFound().build();
        }
        confirmation.setStatus(true);
        confirmationRepository.save(confirmation);
        return ResponseEntity.ok().build();

    }
}
