import { useState } from 'react';
import './FormulaireLivre.css';

function FormulaireLivre({ onAjouter }) {
    const [titre, setTitre] = useState('');
    const [auteur, setAuteur] = useState('');
    const [statut, setStatut] = useState('A_LIRE');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!titre || !auteur) {
            alert("Merci de remplir le titre et l'auteur.");
            return;
        }

        onAjouter({ titre, auteur, statut });

        // Réinitialise le formulaire après l'ajout
        setTitre('');
        setAuteur('');
        setStatut('A_LIRE');
    };

    return (
        <form className="formulaire-livre" onSubmit={handleSubmit}>
            <h2>Ajouter un livre</h2>

            <input
                type="text"
                placeholder="Titre"
                value={titre}
                onChange={(e) => setTitre(e.target.value)}
            />

            <input
                type="text"
                placeholder="Auteur"
                value={auteur}
                onChange={(e) => setAuteur(e.target.value)}
            />

            <select value={statut} onChange={(e) => setStatut(e.target.value)}>
                <option value="A_LIRE">À lire</option>
                <option value="EN_COURS">En cours</option>
                <option value="TERMINE">Terminé</option>
            </select>

            <button type="submit">Ajouter</button>
        </form>
    );
}

export default FormulaireLivre;