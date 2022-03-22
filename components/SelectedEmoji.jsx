import css from "./SelectedEmoji.module.scss";
import Image from "next/image";
import Button from "./Button";

export default function SelectedEmoji({ emoji, closeFunc }) {
    const img = emoji.hexcode.toLowerCase();

    return (
        <div className={css["selected"]}>
            <div className={css["col--preview"]}>
                <Image
                    src={`https://twemoji.maxcdn.com/v/latest/svg/${img}.svg`}
                    height="64"
                    width="64"
                    alt={emoji.emoji}
                />
                <Button label="Copy" />
            </div>
            <div className={css["col--info"]}>
                <header className={css["header"]}>
                    <h4 className={css["title"]}>{emoji.label}</h4>
                    <span className={css["close"]} onClick={closeFunc}>
                        ×
                    </span>
                </header>
                <p>
                    <span className={css["info"]}>Emoji:</span> {emoji.emoji}
                </p>
                {/* <p>Hex: {emoji.hexcode}</p> */}
                {/* <p>{emoji.tags.join(", ")}</p> */}
                <p>
                    <span className={css["info"]}>Since:</span> v{emoji.version}
                </p>
                <p>
                    <span className={css["info"]}>HEX:</span>{" "}
                    <span className={css["hexcode"]}>{emoji.hexcode}</span>
                </p>
            </div>
            {/* {JSON.stringify(emoji)} */}
        </div>
    );
}
