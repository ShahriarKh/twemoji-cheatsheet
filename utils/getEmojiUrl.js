export function getEmojiUrl(hexcode) {
    let url = hexcode.toLowerCase();

    // Fix for "copyright" and "trademark" emojis
    if (url.substring(0, 2) == "00") {
        url = url.substring(2);

        // Fix for keycap emojis
        const regex = /-fe0f/i;
        url = url.replace(regex, "");
    }

    // Fix for "Eye in Speech Bubble" emoji
    if (url.includes("1f441")) {
        const regex = /-fe0f/ig;
        url = url.replace(regex, "");
    }

    return url;
}