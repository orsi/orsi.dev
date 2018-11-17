const emojiList = [
    '👾',
    '⚗',
    '🍷',
    '👨‍💻',
    '🧙‍',
    '🎸',
    '🎹',
];
export const start = () => {
    const canvas = document.createElement('canvas');
    canvas.height = 64;
    canvas.width = 64;

    const ctx = canvas.getContext('2d');
    ctx.font = '48px serif';
    const i = Math.floor(Math.random() * emojiList.length);
    ctx.fillText(emojiList[i], 0, 48);

    // grab head html element and insert favicon link
    const headElement = document.querySelector('head');
    const linkElement = document.createElement('link');
    linkElement.rel = 'shortcut icon';
    linkElement.href = canvas.toDataURL();
    headElement.append(linkElement);
}