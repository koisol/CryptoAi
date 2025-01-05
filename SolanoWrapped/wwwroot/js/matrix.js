window.initializeMatrixAnimation = function () {
    const matrix = document.querySelector('.matrix');
    const characters = 'アアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワン0123456789';
    const columns = Math.floor(matrix.clientWidth / 20);

    for (let i = 0; i < columns; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        row.style.left = `${i * 20}px`;
        row.style.setProperty('--speed', Math.random() * 2 + 1);

        for (let j = 0; j < 50; j++) {
            const char = document.createElement('span');
            char.classList.add('char');
            char.style.setProperty('--char-index', j);
            char.textContent = characters[Math.floor(Math.random() * characters.length)];
            row.appendChild(char);
        }

        matrix.appendChild(row);
    }
}
window.showLoadingMessage = function () { document.getElementById('loadingMessage').style.display = 'block'; }
window.hideLoadingMessage = function () { document.getElementById('loadingMessage').style.display = 'none'; }