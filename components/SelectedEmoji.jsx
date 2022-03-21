import css from "./SelectedEmoji.module.scss";
import Image from "next/image";
import Button from "./Button";

export default function SelectedEmoji({ emoji }) {
    const img = emoji.emoji.codePointAt(0).toString(16);

    return (
        <div className={css["selected"]}>
            <div className={css["col--preview"]}>
                <Image
                    src={`https://twemoji.maxcdn.com/v/latest/svg/${img}.svg`}
                    height="56"
                    width="56"
                    alt={"change me"}
                />
                <Button label="Copy" />
            </div>
            <div className={css["col--info"]}>
                <header className={css["header"]}>
                    <h4 className={css["title"]}>{emoji.label}</h4>
                    <span>x</span>
                </header>
                <p>Emoji: {emoji.emoji}</p>
                {/* <p>Hex: {emoji.hexcode}</p> */}
                {/* <p>{emoji.tags.join(", ")}</p> */}
                <p>Introduced in: V{emoji.version}</p>
            </div>
            {/* {JSON.stringify(emoji)} */}
        </div>
    );
}
