// function showLogin() {
//     document.getElementById('loginPopup').style.display = 'block';
// }

// function hideLogin() {
//     document.getElementById('loginPopup').style.display = 'none';
// }


function showLoginPopup() {
    document.getElementById('loginPopup').style.display = 'block';
}

function hideLoginPopup() {
    document.getElementById('loginPopup').style.display = 'none';
}

function handleLogin() {
    const username = document.getElementById('username').value;
    if (username) {
        document.getElementById('welcomeText').innerHTML = `Welcome, ${username}`;
        hideLoginPopup();
    } else {
        alert('Please enter a username!');
    }
}


function toggleDropdown() {
    document.getElementById("dropdown").classList.toggle("show");
}

// Close the dropdown if clicked outside
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}       

function showLogin() {
    document.getElementById("loginPopup").style.display = "block";
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("registerForm").style.display = "none";
}

function showRegister() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registerForm").style.display = "block";
}

function hideLogin() {
    document.getElementById("loginPopup").style.display = "none";
}
