import css from "./SettingsBar.module.scss";

// import { groups, subgroups } from "emojibase-data/meta/groups.json";
import data from "emojibase-data/en/messages.json";
import Dropdown from "./Dropdown";

export default function SettingsBar({
    // totalEmojis,
    // removeGroupFilter,
    filterByGroup,
    filterByVersion,
    sizeSlider,
    versions,
})
 {
    const groupFilters = data.groups.map(({ message, order, ...rest }) => ({
        label: message,
        val: order.toString(),
        ...rest,
    }));

    const versionFilters = new Array(versions.length).fill().map((e, i) => {
        return { val: versions[i].toString(), label: versions[i] };
    });

    return (
        <div className={css["bar"]}>
            {/* <div>
                <h3>Skin Tone</h3>
            </div> */}
            <div>
                <h3>Size</h3>
                {sizeSlider}
            </div>
            <div>
                <h3>Groups</h3>
                <Dropdown
                    onChangeFunc={filterByGroup}
                    items={groupFilters}
                    onClearFunc={() => filterByGroup(null)}
                    name="Groups"
                />
            </div>
            <div>
                <h3>Version</h3>
                <Dropdown
                    onChangeFunc={filterByVersion}
                    items={versionFilters}
                    onClearFunc={() => filterByVersion(null)}
                    name="Versions"
                />
            </div>
            {/* <div>
                <h3>Info</h3>
                <p>Total Emojis: {totalEmojis} </p>
            </div> */}
        </div>
    );
}
