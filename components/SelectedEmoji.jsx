import css from "./SelectedEmoji.module.scss";
import Image from "next/image";
import Button from "./Button";
import { getEmojiUrl } from "../utils/getEmojiUrl";
import { useState, useEffect } from "react";

export default function SelectedEmoji({ emoji, closeFunc }) {
   
    const [buttonText, setButtonText] = useState(`Copy`)
    const [tooltipText, setTooltipText] = useState("Click to Copy")

    const img = getEmojiUrl(emoji.hexcode)

    function copyToClipboard(val, place) {
        navigator.clipboard.writeText(val);
        if (place == "button") {
            setButtonText("Copied!")
            setTimeout(() => setButtonText(`Copy`), 1000)
        } else {
            setTooltipText("Copied!")
            setTimeout(() => setTooltipText("Click to Copy"), 1000)
        }
    }

    // useEffect(() => {
    //     setButtonText(`Copy ${emoji.emoji}`)
    // }, [emoji])

    return (
        <div className={css["selected"]}>
            <div className={css["col--preview"]}>
                <Image
                    src={img}
                    height="64"
                    width="64"
                    alt={emoji.emoji}
                />
               
            </div>
            <div className={css["col--info"]}>
                <header className={css["header"]}>
                    <h4 className={css["title"]}>{emoji.label}</h4>
                    <span className={css["close"]} onClick={closeFunc}>
                        ×
                    </span>
                </header>
                <p>
                    <span className={css["info"]}>Unicode:</span>{emoji.emoji}
                </p>
                {/* <p>Hex: {emoji.hexcode}</p> */}
                {/* <p>{emoji.tags.join(", ")}</p> */}
                <p>
                    <span className={css["info"]}>Since:</span>Version {emoji.version}
                </p>
                <p>
                    <span className={css["info"]}>HEX:</span>
                    <span className={css["hexcode"]} data-tooltip={tooltipText} onClick={() => copyToClipboard(emoji.hexcode)}>{emoji.hexcode}</span>
                </p>
               
            </div>
            <div className={css["buttons"]}>
                <Button label={buttonText} onClick={() => copyToClipboard(emoji.emoji, "button")}/>
                <Button label="SVG" url={img} />
                <Button label="PNG" url={getEmojiUrl(emoji.hexcode, "png")} />
            </div>
        </div>
    );
}
