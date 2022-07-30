
const formDOM = document.querySelector('.form');
const nameDOM = document.querySelector('#name');
const emailDOM = document.querySelector('#email');
const passwordDOM = document.querySelector('#password');
const formAlertDOM = document.querySelector('.form-alert');
const formInputDOM = document.querySelectorAll('.form-input');
const btnDOM = document.querySelector('.btn');


formDOM.addEventListener("submit", async (e) => {

    e.preventDefault();

    const name = nameDOM.value;
    const email = emailDOM.value;
    const password = passwordDOM.value;
    try {
        const { data } = await axios.post("/api/v1/user/register", { name, email, password });
        e.target.reset();
        formAlertDOM.style.display = 'block'
        formAlertDOM.textContent = `successfully logged in`;
    }
    catch (err) {
        formAlertDOM.style.display = 'block'
        formAlertDOM.innerHTML = `error, please try again`
    }
    setTimeout(() => {
        formAlertDOM.style.display = 'none'
    }, 2000)
});




