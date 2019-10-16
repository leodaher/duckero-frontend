export default function isAuthenticated(token, route) {
    return fetch('http://localhost:5000/verify_token', {
        headers: {
            'Authorization': token
        },
        method: 'POST',
        signal: route.abortController.signal
    }).then((response) => {
        if (response.status !== 200) {
            return false;
        }

        return true;
    });
}
