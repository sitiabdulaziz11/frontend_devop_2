import axios from "axios";

const API_URL = "http://127.0.0.1:8000/students/";

export const getStudents = () => axios.get(API_URL);

export const createStudent = (student) => axios.post(API_URL, student);

export const updateStudent = (id, student) =>
  axios.put(`${API_URL}${id}/`, student);

export const deleteStudent = (id) => axios.delete(`${API_URL}${id}/`);
