export function getEmojiUrl(emoji, skinTone, format = "svg") {
    let url;
    let folder = "svg";
    let hex = emoji.hexcode;

    if (skinTone && emoji.skins) {
        hex = emoji.skins.filter((skin) => skin.hexcode.includes(skinTone))[0]
            .hexcode;
    }

    let code = hex.toLowerCase();

    // Fix for "copyright" and "trademark" emojis
    if (code.substring(0, 2) == "00") {
        code = code.substring(2);

        // Fix for keycap emojis
        const regex = /-fe0f/i;
        code = code.replace(regex, "");
    }

    // Fix for "Eye in Speech Bubble" emoji
    if (code.includes("1f441")) {
        const regex = /-fe0f/gi;
        code = code.replace(regex, "");
    }

    if (format == "png") {
        folder = "72x72";
    }

    url = `https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/${folder}/${code}.${format}`;

    return url;
}
