package com.bibliotheque.backend.service;

import com.bibliotheque.backend.model.Livre;
import com.bibliotheque.backend.repository.LivreRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LivreService {

    private final LivreRepository livreRepository;

    public LivreService(LivreRepository livreRepository) {
        this.livreRepository = livreRepository;
    }

    public List<Livre> getTousLesLivres() {
        return livreRepository.findAll();
    }

    public Optional<Livre> getLivreParId(Long id) {
        return livreRepository.findById(id);
    }

    public Livre ajouterLivre(Livre livre) {
        return livreRepository.save(livre);
    }

    public Livre modifierLivre(Long id, Livre livreModifie) {
        return livreRepository.findById(id)
                .map(livre -> {
                    livre.setTitre(livreModifie.getTitre());
                    livre.setAuteur(livreModifie.getAuteur());
                    livre.setStatut(livreModifie.getStatut());
                    livre.setNote(livreModifie.getNote());
                    livre.setDateDebut(livreModifie.getDateDebut());
                    livre.setDateFin(livreModifie.getDateFin());
                    return livreRepository.save(livre);
                })
                .orElseThrow(() -> new RuntimeException("Livre non trouvé avec l'id " + id));
    }

    public void supprimerLivre(Long id) {
        livreRepository.deleteById(id);
    }

    public List<Livre> rechercherLivres(String recherche) {
        return livreRepository.findByTitreContainingIgnoreCaseOrAuteurContainingIgnoreCase(recherche, recherche);
    }
}