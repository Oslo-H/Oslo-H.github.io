// settings
var logo = '../etc/images/icon.ico'

const start = () => {
    let button = document.getElementById('obfuscate')
    button.style.backgroundColor = '#969696';
    button.innerHTML = '...';
}

const _stop = () => {
    let button = document.getElementById('obfuscate')
    button.style.backgroundColor = '#0000ff';
    button.innerHTML = 'Obfuscate';
}

const hyper = () => {
    script = document.getElementById('script').value;

    if (script.length == 0) {
        textAera = document.getElementById('out')
        textAera.value = "# Wait... are you trying to make me crash?\n\n# No, you wouldn't do that, would you?";
        _stop()
        return
    }

    camouflate = document.getElementById('camouflate').checked;
    ultrasafemode = document.getElementById('ultrasafemode').checked;

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://api.plague.fun/?camouflate=" + camouflate + "&ultrasafemode=" + ultrasafemode);
    
    xhr.onload = () => {
        textAera = document.getElementById('out')
        textAera.value = xhr.responseText;
        _stop()
    }

    let data = script

    xhr.send(data);
}

const obf = () => {
    start()
    hyper()
} 

const setup = () => {
    let navIcon = (document.getElementsByTagName('img'))[0];
    navIcon.src = logo;
}

window.onload = () => {
    let icon = document.createElement('link');
    icon.rel = 'icon';
    icon.href = logo;
    document.head.appendChild(icon);
    setup();
}
