import css from "./EmojiCard.module.scss";
import React, { memo } from "react";
import Image from "next/image";
import { getEmojiUrl } from "../utils/getEmojiUrl";

// https://gist.github.com/chibicode/fe195d792270910226c928b69a468206?permalink_comment_id=3650172#gistcomment-3650172

const Twemoji = ({ emoji, size = 24, onClick, skinTone }) => {
    return (
        <div
            tabIndex="0"
            className={css["card"]}
            onClick={onClick}
            onKeyUp={(e) => {
                e.preventDefault();
                if (e.key === "Enter") {
                    onClick();
                }
            }}
        >
            <Image src={getEmojiUrl(emoji, skinTone)} height={size} width={size} alt={emoji.emoji} />
        </div>
    );
};

export default memo(Twemoji);
