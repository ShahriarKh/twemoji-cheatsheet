import css from "./EmojiCard.module.scss";
import React, { memo } from "react";
import Image from "next/image";

// https://gist.github.com/chibicode/fe195d792270910226c928b69a468206?permalink_comment_id=3650172#gistcomment-3650172

const Twemoji = ({ emoji, size = 24, name, onClick }) => {
    const img = emoji.codePointAt(0).toString(16);

    return (
        <div className={css["card"]} onClick={onClick}>
            <Image
                src={`https://twemoji.maxcdn.com/v/latest/svg/${img}.svg`}
                height={size}
                width={size}
                alt={emoji}
            />
            <span>{emoji}</span>
        </div>
    );
};

export default memo(Twemoji);
