const BASE_URL = "http://127.0.0.1:8000/api";

export async function login(username, password) {
  const res = await fetch(`${BASE_URL}/login/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  return res.json();
}

export async function register(username, email, password) {
  const res = await fetch(`${BASE_URL}/register/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password }),
  });
  return res.json();
}

export async function getProfile(token) {
  const res = await fetch(`${BASE_URL}/profile/`, {
    headers: { Authorization: `Token ${token}` },
  });
  return res.json();
}

export async function updateProfile(token, updates) {
  const res = await fetch(`${BASE_URL}/profile/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    },
    body: JSON.stringify(updates),
  });
  return res.json();
}
