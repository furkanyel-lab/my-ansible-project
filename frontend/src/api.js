const API_URL = "http://localhost:5000/api";

export const loginUser = async (username, password, role) => {
    const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, role })
    });
    return response.json();
};

export const getAppointments = async () => {
    const response = await fetch(`${API_URL}/appointments/list`);
    return response.json();
};