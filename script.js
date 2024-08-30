document.addEventListener('DOMContentLoaded', (event) => {
    const video = document.getElementById('video');
    let isCursorOverVideo = false;

    video.addEventListener('mouseover', () => {
        isCursorOverVideo = true;
        video.play();
    });

    video.addEventListener('mouseout', () => {
        isCursorOverVideo = false;
        video.pause();
    });

    video.addEventListener('ended', () => {
        if (isCursorOverVideo) {
            video.currentTime = 0;
            video.play();
        }
    });
});

let activeButton = null;

function toggleButton(button, content) {
    if (activeButton && activeButton !== button) {
        activeButton.nextElementSibling.style.display = 'none';
        activeButton.classList.remove('active');
    }

    if (activeButton === button) {
        content.style.display = 'none';
        activeButton.classList.remove('active');
        activeButton = null;
    } else {
        content.style.display = 'flex';
        button.classList.add('active');
        activeButton = button;
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('.round-button.phone').addEventListener('click', function() {
        const squareShape = this.nextElementSibling;
        toggleButton(this, squareShape);
    });

    document.querySelector('.round-button.mail').addEventListener('click', function() {
        const mailShape = this.nextElementSibling;
        toggleButton(this, mailShape);
    });

    document.querySelector('.round-button.position').addEventListener('click', function() {
        const positionShape = this.nextElementSibling;
        toggleButton(this, positionShape);
    });
});

document.querySelector('.round-button.ecole').addEventListener('click', function() {
    const ecoleShape = this.nextElementSibling;
    toggleButton(this, ecoleShape);
});

function copyPhoneNumber() {
    const phoneNumber = "06 49 18 18 23";
    navigator.clipboard.writeText(phoneNumber).then(() => {
        const copyButton = document.querySelector('.copy-button img');
        const originalSrc = copyButton.src;
        copyButton.src = 'Logook.png';
        setTimeout(() => {
            copyButton.src = originalSrc;
        }, 1700);
    }).catch(err => {
        console.error('Erreur lors de la copie : ', err);
    });
}

function copyMail() {
    const Mail = "moreaujoffrey@outlook.fr";
    navigator.clipboard.writeText(Mail).then(() => {
        const copyButton = document.querySelector('.copy-button img');
        const originalSrc = copyButton.src;
        copyButton.src = 'Logook.png';
        setTimeout(() => {
            copyButton.src = originalSrc;
        }, 1700);
    }).catch(err => {
        console.error('Erreur lors de la copie : ', err);
    });
}


function copyPosition() {
    const Position = "34 Rue du Gras Boeuf - Condé-Sur-L'Escaut - 59163";
    navigator.clipboard.writeText(Position).then(() => {
        const copyButton = document.querySelector('.copy-button img');
        const originalSrc = copyButton.src;
        copyButton.src = 'Logook.png';
        setTimeout(() => {
            copyButton.src = originalSrc;
        }, 1700);
    }).catch(err => {
        console.error('Erreur lors de la copie : ', err);
    });
}

function copyEcole() {
    const Ecole = "2 Avenue Léo Lagrange - Anzin - 59410";
    navigator.clipboard.writeText(Ecole).then(() => {
        const copyButton = document.querySelector('.copy-button img');
        const originalSrc = copyButton.src;
        copyButton.src = 'Logook.png';
        setTimeout(() => {
            copyButton.src = originalSrc;
        }, 1700);
    }).catch(err => {
        console.error('Erreur lors de la copie : ', err);
    });
}



function callPhoneNumber() {
    const phoneNumber = '+33649181823';  // Assurez-vous que le numéro commence par le code international
    const telLink = `tel:${phoneNumber}`;
    try {
        window.location.href = telLink;
    } catch (e) {
        console.error('Failed to initiate call:', e);
    }
}

function sendMessage() {
    const phoneNumber = '+33649181823';  // Assurez-vous que le numéro commence par le code international
    const smsLink = `sms:${phoneNumber}`;
    try {
        window.location.href = smsLink;
    } catch (e) {
        console.error('Failed to initiate message:', e);
    }
}

function sendMail() {
    const mailAddress = 'mailto:example@example.com';  // Remplacez par l'adresse email souhaitée
    window.location.href = mailAddress;
}












// Fonction pour basculer entre les formes et les boutons actifs
function toggleForme(formeId, bouton) {
    var forme = document.getElementById(formeId);

    // Si la forme est déjà visible et que le bouton est actif, on la masque et on désactive le bouton
    if (forme.style.display === 'flex' && bouton.classList.contains('active')) {
        forme.style.display = 'none';
        bouton.classList.remove('active');
        return; // On quitte la fonction après la désactivation
    }

    // Récupérer toutes les formes
    var formes = document.querySelectorAll('.forme, .forme2, .forme3, .forme4');

    // Masquer toutes les formes
    formes.forEach(function(f) {
        f.style.display = 'none';
    });

    // Supprimer la classe active de tous les boutons
    var boutons = document.querySelectorAll('.boutonmenu1, .boutonmenu2, .boutonmenu3, .boutonmenu4');
    boutons.forEach(function(b) {
        b.classList.remove('active');  // Correction ici : utiliser "b" au lieu de "bouton"
    });

    // Afficher la forme correspondante et ajouter la classe active au bouton cliqué
    forme.style.display = 'flex';
    bouton.classList.add('active');
}

// Attacher les événements après le chargement du DOM
document.addEventListener('DOMContentLoaded', function() {
    // Ajoute l'événement de clic aux boutons
    var boutons = document.querySelectorAll('.boutonmenu1, .boutonmenu2, .boutonmenu3, .boutonmenu4');
    
    boutons.forEach(function(bouton) {
        bouton.addEventListener('click', function() {
            // Récupérer l'ID de la forme associée au bouton (via data-form-id)
            var formeId = bouton.getAttribute('data-form-id');
            toggleForme(formeId, bouton);
        });
    });
});
