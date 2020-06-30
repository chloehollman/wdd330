makeRequest('login', 'POST', {
    password: 'user1',
    email: 'user1@email.com',
    'Content-Type': 'application/json'
    });
    if (token) {
        options.headers.Authorization = `Bearer ${token}`;
      }