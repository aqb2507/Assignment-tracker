import axios from "axios";

const API_URL = "http://localhost:8083/api/assignments/";

// Create new goal
const addAssignment = async (AssignmentData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  };

  const response = await axios.post(API_URL, AssignmentData, config);

  return response.data;
};

// Get all Assignments
const getAssignments = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

// Delete Assignment
const deleteAssignment = async (AssignmentId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + AssignmentId, config);

  return response.data;
};

const assignmentService = {
  addAssignment,
  getAssignments,
  deleteAssignment,
};

export default assignmentService;
