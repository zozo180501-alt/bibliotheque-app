package com.bibliotheque.backend.controller;

import com.bibliotheque.backend.model.Livre;
import com.bibliotheque.backend.service.LivreService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/livres")
@CrossOrigin(origins = "http://localhost:5173")
public class LivreController {

    private final LivreService livreService;

    public LivreController(LivreService livreService) {
        this.livreService = livreService;
    }

    @GetMapping
    public List<Livre> getLivres() {
        return livreService.getTousLesLivres();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Livre> getLivreParId(@PathVariable Long id) {
        return livreService.getLivreParId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/recherche")
    public List<Livre> rechercherLivres(@RequestParam String q) {
        return livreService.rechercherLivres(q);
    }

    @PostMapping
    public Livre ajouterLivre(@RequestBody Livre livre) {
        return livreService.ajouterLivre(livre);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Livre> modifierLivre(@PathVariable Long id, @RequestBody Livre livre) {
        return ResponseEntity.ok(livreService.modifierLivre(id, livre));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> supprimerLivre(@PathVariable Long id) {
        livreService.supprimerLivre(id);
        return ResponseEntity.noContent().build();
    }
}