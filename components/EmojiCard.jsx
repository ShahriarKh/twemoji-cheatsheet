import css from "./EmojiCard.module.scss";
import React, { memo } from "react";
import Image from "next/image";
import { getEmojiUrl } from "../utils/getEmojiUrl";

// https://gist.github.com/chibicode/fe195d792270910226c928b69a468206?permalink_comment_id=3650172#gistcomment-3650172

const Twemoji = ({ emoji, size = 24, onClick }) => {
    
    const image = getEmojiUrl(emoji.hexcode)

    return (
        <div className={css["card"]} onClick={onClick}>
            <Image
                src={image}
                height={size}
                width={size}
            />
        </div>
    );
};

export default memo(Twemoji);
