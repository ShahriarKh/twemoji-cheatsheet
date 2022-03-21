import css from "./EmojiCard.module.scss";
import React, { memo } from "react";
import Image from "next/image";
import { fromHexcodeToCodepoint, fromCodepointToUnicode } from 'emojibase';

// https://gist.github.com/chibicode/fe195d792270910226c928b69a468206?permalink_comment_id=3650172#gistcomment-3650172

const Twemoji = ({ emoji, size = 24, onClick }) => {
    // const img = emoji.emoji.codePointAt(0).toString(16);
    // const img = fromHexcodeToCodepoint(emoji.hexcode)
    // const img = fromHexcodeToCodepoint(emoji.hexcode)

    const img = emoji.hexcode.toLowerCase()

    return (
        <div className={css["card"]} onClick={onClick}>
            <Image
                src={`https://twemoji.maxcdn.com/v/latest/svg/${img}.svg`}
                height={size}
                width={size}
                // alt={emoji}
            />
            {/* <span>{emoji.hexcode}</span> */}
            {/* <span>{img}</span> */}
        </div>
    );
};

export default memo(Twemoji);
