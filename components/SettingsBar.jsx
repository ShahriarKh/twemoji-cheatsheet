import css from "./SettingsBar.module.scss";

// import { groups, subgroups } from "emojibase-data/meta/groups.json";
import data from "emojibase-data/en/messages.json";
import Dropdown from "./Dropdown";

export default function SettingsBar({
    totalEmojis,
    removeFilter,
    filterByGroup,
    filterByVersion,
    sizeSlider
}) {
    const groupsFilters = data.groups.map(({ message, order, ...rest }) => ({
        "label": message,
        "val": order,
        ...rest,
    }));

    return (
        <div className={css["bar"]}>
            <div>
                <h3>Skin Tone</h3>
            </div>
            <div>
                <h3>Size</h3>
                {sizeSlider}
            </div>
            <div>
                <h3>Category</h3>
                <Dropdown onChangeFunc={filterByGroup} items={groupsFilters} />
            </div>
            <div>
                <h3>Version</h3>
            </div>
            <div>
                <h3>Info</h3>
                <p>Total Emojis: {totalEmojis} </p>
            </div>
        </div>
    );
}
