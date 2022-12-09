import Head from "next/head";
import EmojiCard from "../components/EmojiCard";
import emojis from "emojibase-data/en/data.json";
import Grid from "../components/Grid";
import { useState } from "react";
import SelectedEmoji from "../components/SelectedEmoji";
import SettingsBar from "../components/SettingsBar";
import Intro from "../components/Intro";
import SearchBox from "../components/SearchBox";


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
        <div>
            <Head>
                <title>Twemoji Cheatsheet</title>
            </Head>

            <main>
                <Intro />

                <SettingsBar
                    totalEmojis={emojis.length}
                    filterByVersion={setSelectedVersion}
                    filterByGroup={setSelectedGroup}
                    versions={versions}
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

                <SearchBox setAvailabeEmojis={setAvailabeEmojis} emojis={emojis}/>

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
        </div>
    );
}
