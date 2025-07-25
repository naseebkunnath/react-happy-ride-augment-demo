/**
 * Checks if a JWT token is expired
 * @param {string} token - JWT token
 * @returns {boolean} - true if expired, false if valid
 */
export function isJwtExpired(token) {
    console.log('Inside isJwtExpired');
    if (!token) return true;
    try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        const exp = payload.exp;
        const now = Math.floor(Date.now() / 1000);
        return exp < now;
    } catch (e) {
        console.error('Error decoding JWT token:', e);
        // If token is invalid or can't be decoded, treat as expired
        return true;
    }
}