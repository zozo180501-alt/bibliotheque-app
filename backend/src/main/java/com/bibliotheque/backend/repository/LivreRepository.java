package com.bibliotheque.backend.repository;

import com.bibliotheque.backend.model.Livre;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LivreRepository extends JpaRepository<Livre, Long> {
}