export function isAdminUser() {
    const user = JSON.parse(localStorage.getItem('user') || "");
    return user && ['admin', 'superadmin'].includes(user.role);
}