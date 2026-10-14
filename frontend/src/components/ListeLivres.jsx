import './ListeLivres.css';

function ListeLivres({ livres, onSupprimer, onChangerStatut, onNoter }) {

    return (
        <div className="liste-livres">
            <h2>Ma bibliothèque</h2>

            {livres.length === 0 ? (
                <p>Aucun livre pour le moment.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Titre</th>
                            <th>Auteur</th>
                            <th>Statut</th>
                            <th>Note</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {livres.map((livre) => (
                            <tr key={livre.id}>
                                <td>{livre.titre}</td>
                                <td>{livre.auteur}</td>
                                <td>
                                    <select
                                        value={livre.statut}
                                        onChange={(e) => onChangerStatut(livre.id, e.target.value)}
                                    >
                                        <option value="A_LIRE">À lire</option>
                                        <option value="EN_COURS">En cours</option>
                                        <option value="TERMINE">Terminé</option>
                                    </select>
                                </td>
                                <td>
                                    <select
                                        value={livre.note || ''}
                                        onChange={(e) => onNoter(livre.id, Number(e.target.value))}
                                    >
                                        <option value="">—</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </td>
                                <td>
                                    <button onClick={() => onSupprimer(livre.id)}>
                                        Supprimer
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default ListeLivres;