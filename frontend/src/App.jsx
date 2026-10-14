import { useState, useEffect } from 'react';
import ListeLivres from './components/ListeLivres';
import FormulaireLivre from './components/FormulaireLivre';
import { getLivres, ajouterLivre, modifierLivre, supprimerLivre } from './services/api';

function App() {
    const [livres, setLivres] = useState([]);
    const [filtreStatut, setFiltreStatut] = useState('TOUS');
    const [tri, setTri] = useState('DATE_DESC');

    const chargerLivres = () => {
        getLivres()
            .then((response) => setLivres(response.data))
            .catch((error) => console.error("Erreur lors du chargement des livres :", error));
    };

    useEffect(() => {
        chargerLivres();
    }, []);

    const handleAjouter = (nouveauLivre) => {
        ajouterLivre(nouveauLivre)
            .then(() => chargerLivres())
            .catch((error) => console.error("Erreur lors de l'ajout :", error));
    };

    const handleSupprimer = (id) => {
        supprimerLivre(id)
            .then(() => chargerLivres())
            .catch((error) => console.error("Erreur lors de la suppression :", error));
    };

    const handleChangerStatut = (id, nouveauStatut) => {
        const livre = livres.find((l) => l.id === id);
        const livreModifie = { ...livre, statut: nouveauStatut };
        modifierLivre(id, livreModifie)
            .then(() => chargerLivres())
            .catch((error) => console.error("Erreur lors de la modification :", error));
    };

    const handleNoter = (id, nouvelleNote) => {
        const livre = livres.find((l) => l.id === id);
        const livreModifie = { ...livre, note: nouvelleNote };
        modifierLivre(id, livreModifie)
            .then(() => chargerLivres())
            .catch((error) => console.error("Erreur lors de la notation :", error));
    };

    // 1. On filtre d'abord
    const livresFiltres = filtreStatut === 'TOUS'
        ? livres
        : livres.filter((livre) => livre.statut === filtreStatut);

    // 2. Puis on trie le résultat filtré (on copie le tableau avec [...] pour ne pas muter l'original)
    const livresAffiches = [...livresFiltres].sort((a, b) => {
        switch (tri) {
            case 'NOTE_DESC':
                return (b.note || 0) - (a.note || 0);
            case 'NOTE_ASC':
                return (a.note || 0) - (b.note || 0);
            case 'DATE_ASC':
                return new Date(a.dateAjout) - new Date(b.dateAjout);
            case 'DATE_DESC':
            default:
                return new Date(b.dateAjout) - new Date(a.dateAjout);
        }
    });

    return (
        <div>
            <FormulaireLivre onAjouter={handleAjouter} />

            <div className="controles-liste">
                <label>
                    Filtrer :
                    <select value={filtreStatut} onChange={(e) => setFiltreStatut(e.target.value)}>
                        <option value="TOUS">Tous</option>
                        <option value="A_LIRE">À lire</option>
                        <option value="EN_COURS">En cours</option>
                        <option value="TERMINE">Terminé</option>
                    </select>
                </label>

                <label>
                    Trier par :
                    <select value={tri} onChange={(e) => setTri(e.target.value)}>
                        <option value="DATE_DESC">Date d'ajout (récent → ancien)</option>
                        <option value="DATE_ASC">Date d'ajout (ancien → récent)</option>
                        <option value="NOTE_DESC">Note (meilleure → pire)</option>
                        <option value="NOTE_ASC">Note (pire → meilleure)</option>
                    </select>
                </label>
            </div>

            <ListeLivres
                livres={livresAffiches}
                onSupprimer={handleSupprimer}
                onChangerStatut={handleChangerStatut}
                onNoter={handleNoter}
            />
        </div>
    );
}

export default App;