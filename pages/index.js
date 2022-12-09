import Head from "next/head";
import EmojiCard from "../components/EmojiCard";
import emojis from "emojibase-data/en/data.json";
import Grid from "../components/Grid";
import { useState } from "react";
import SelectedEmoji from "../components/SelectedEmoji";
import SettingsBar from "../components/SettingsBar";
import Intro from "../components/Intro";
import SearchBox from "../components/SearchBox";
import Footer from "../components/Footer";

export default function Home(props) {
    const [emojiSize, setEmojiSize] = useState(40);
    const [selectedEmoji, setSelectedEmoji] = useState();
    const [availableEmojis, setAvailabeEmojis] = useState(emojis);

    const [selectedVersion, setSelectedVersion] = useState();
    const [selectedGroup, setSelectedGroup] = useState();

    function changeEmojiSize(newSize) {
        setEmojiSize(newSize);
    }

    function closeSelectedEmojiCard() {
        setSelectedEmoji(null);
    }

    const versions = [...new Set(emojis.map((emoji) => emoji.version))];
    versions.sort((a, b) => b - a);

    return (
        <>
            <Head>
                <title>Twemoji Cheatsheet</title>
                <meta
                    name="description"
                    content="🥪 A super simple cheatsheet to browse Twemojis! Filter by catgeroy (and, or) version and find the emoji you want. Easily grab the unicode, hexcode, download SVG or PNG and get some info about that emoji."
                />
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <meta property="og:title" content="Twemoji Cheatsheet" />
                <meta
                    property="og:description"
                    content="🥪 A super simple cheatsheet to browse Twemojis! Filter by catgeroy (and, or) version and find the emoji you want. Easily grab the unicode, hexcode, download SVG or PNG and get some info about that emoji."
                />
                <meta
                    property="og:image"
                    content="https://user-images.githubusercontent.com/31452340/159780805-2e2b146d-5c50-4245-ba6b-9cc7dcdd9a18.png"
                />
            </Head>

            <main>
                <Intro />

                <SettingsBar
                    totalEmojis={emojis.length}
                    filterByVersion={setSelectedVersion}
                    filterByGroup={setSelectedGroup}
                    versions={versions}
                    setAvailabeEmojis={setAvailabeEmojis}
                    emojis={emojis}
                    sizeSlider={
                        <input
                            type="range"
                            min="16"
                            max="72"
                            // step="4"
                            value={emojiSize}
                            onChange={(e) => changeEmojiSize(e.target.value)}
                        />
                    }
                />

                <Grid>
                    {availableEmojis
                        .filter(
                            (emoji) =>
                                (selectedVersion ? emoji.version == selectedVersion : true) &&
                                (selectedGroup ? emoji.group == selectedGroup : true)
                        )
                        .map((emoji) => {
                            return (
                                <EmojiCard
                                    size={emojiSize}
                                    key={emoji.emoji}
                                    emoji={emoji}
                                    onClick={() => setSelectedEmoji(emoji)}
                                />
                            );
                        })}
                    {availableEmojis.length == 0 && <p>Nothing found 😑</p>}
                </Grid>

                {selectedEmoji && <SelectedEmoji emoji={selectedEmoji} closeFunc={closeSelectedEmojiCard} />}
            </main>
            <Footer />
        </>
    );
}
