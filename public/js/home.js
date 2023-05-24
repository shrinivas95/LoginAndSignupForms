const greeting = document.querySelector('.greetings');

window.onload = () => {
    if (sessionStorage.name) {
        location.href = '/login';
    } else {
        greeting.innerHTML = 'hello ${sessionStorage.name}';
    }
}

const logout = document.querySelector('.logout');

logout.onclick = () => {
    sessionStorage.clear();
    location.reload();
}