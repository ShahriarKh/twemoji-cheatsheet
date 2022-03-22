export function getEmojiUrl(hexcode, format = "svg") {
    let url;
    let folder = "svg"
    let code = hexcode.toLowerCase();

    // Fix for "copyright" and "trademark" emojis
    if (code.substring(0, 2) == "00") {
        code = code.substring(2);

        // Fix for keycap emojis
        const regex = /-fe0f/i;
        code = code.replace(regex, "");
    }

    // Fix for "Eye in Speech Bubble" emoji
    if (code.includes("1f441")) {
        const regex = /-fe0f/ig;
        code = code.replace(regex, "");
    }

    if (format == "png") {
        folder = "72x72"
    }

    url = `https://twemoji.maxcdn.com/v/latest/${folder}/${code}.${format}`

    return url;
}