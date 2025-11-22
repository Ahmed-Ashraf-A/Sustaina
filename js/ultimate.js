let toggleSwitch = document.querySelector('#toggle-switch');
toggleSwitch.addEventListener('change', function () {
    if (toggleSwitch.checked) {
        console.log('enable');
    } else {
        console.log('disabled');
    }
});