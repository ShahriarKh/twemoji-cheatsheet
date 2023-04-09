import css from "./SettingsBar.module.scss";
// import { groups, subgroups } from "emojibase-data/meta/groups.json";
import data from "emojibase-data/en/messages.json";
import Dropdown from "./Dropdown";
import SearchBox from "./SearchBox";
import { useAppSettings } from "../utils/store";

export default function SettingsBar({
    filterByGroup,
    filterByVersion,
    sizeSlider,
    versions,
    setAvailabeEmojis,
    emojis,
}) {
    const groupFilters = data.groups.map(({ message, order, ...rest }) => ({
        label: message,
        val: order.toString(),
        ...rest,
    }));

    const versionFilters = new Array(versions.length).fill().map((e, i) => {
        return { val: versions[i].toString(), label: versions[i] };
    });

    const skinToneFilters = [
        { label: "🏿 dark", val: "1F3FF" },
        { label: "🏾 medium dark", val: "1F3FE" },
        { label: "🏽 medium", val: "1F3FD" },
        { label: "🏼 medium light", val: "1F3FC" },
        { label: "🏻 light", val: "1F3FB" },
    ];

    const themes = [
        { label: "⬛ black", val: "black" },
        { label: "⬜ white", val: "white" },
        { label: "🟪 purple", val: "purple" },
    ];

    const setSkinTone = useAppSettings((state) => state.setSkinTone);
    const setTheme = useAppSettings((state) => state.setTheme);
    const setEmojiSize = useAppSettings((state) => state.setEmojiSize);
    const emojiSize = useAppSettings((state) => state.emojiSize);

    return (
        <div className={css["bar"]}>
            <SearchBox setAvailabeEmojis={setAvailabeEmojis} emojis={emojis} />

            <div className={css["buttons"]}>
                <Dropdown
                    onChangeFunc={filterByGroup}
                    items={groupFilters}
                    onClearFunc={() => filterByGroup(null)}
                    name="All Groups"
                />
                <Dropdown
                    onChangeFunc={filterByVersion}
                    items={versionFilters}
                    onClearFunc={() => filterByVersion(null)}
                    name="All Versions"
                />
                <Dropdown
                    onChangeFunc={setSkinTone}
                    items={skinToneFilters}
                    onClearFunc={() => setSkinTone("")}
                    name="Skin Tones"
                />
                <Dropdown
                    onChangeFunc={setTheme}
                    items={themes}
                    name={themes[0].label}
                />

                <input
                    type="range"
                    aria-label="Size"
                    min="16"
                    max="72"
                    value={emojiSize}
                    onChange={(e) => setEmojiSize(e.target.value)}
                />
            </div>

            {/* <div>
                <h3>Info</h3>
                <p>Total Emojis: {totalEmojis} </p>
            </div> */}
        </div>
    );
}
