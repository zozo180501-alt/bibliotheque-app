import axios from 'axios';

const API_URL = 'http://localhost:8080/api/livres';

export const getLivres = () => {
    return axios.get(API_URL);
};

export const getLivreParId = (id) => {
    return axios.get(`${API_URL}/${id}`);
};

export const ajouterLivre = (livre) => {
    return axios.post(API_URL, livre);
};

export const modifierLivre = (id, livre) => {
    return axios.put(`${API_URL}/${id}`, livre);
};

export const supprimerLivre = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};