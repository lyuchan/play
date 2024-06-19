document.addEventListener("DOMContentLoaded", () => {
    const keyboard = document.querySelector('.keyboard');
    const inputArea = document.getElementById('inputArea');
    const keys = [
        'ㄅ', 'ㄆ', 'ㄇ', 'ㄈ', 'ㄉ', 'ㄊ', 'ㄋ', 'ㄌ', 'ㄍ', 'ㄎ',
        'ㄏ', 'ㄐ', 'ㄑ', 'ㄒ', 'ㄓ', 'ㄔ', 'ㄕ', 'ㄖ', 'ㄗ', 'ㄘ',
        'ㄙ', 'ㄧ', 'ㄨ', 'ㄩ', 'ㄚ', 'ㄛ', 'ㄜ', 'ㄝ', 'ㄞ', 'ㄟ',
        'ㄠ', 'ㄡ', 'ㄢ', 'ㄣ', 'ㄤ', 'ㄥ', 'ㄦ', 'ˊ', 'ˇ', 'ˋ', '˙'
    ];

    keys.forEach(key => {
        const keyElement = document.createElement('div');
        keyElement.classList.add('key');
        keyElement.textContent = key;
        keyElement.addEventListener('click', () => {
            inputArea.value += key;
        });
        keyboard.appendChild(keyElement);
    });
});
