import css from "./EmojiCard.module.scss";
// import twemoji from "twemoji";

// export default function EmojiCard({ emoji }) {
//     return (
//         <span
//             dangerouslySetInnerHTML={{
//                 __html: twemoji.parse(emoji, {
//                     folder: "svg",
//                     ext: ".svg",
//                 }),
//             }}
//         />
//     );
// }

// https://gist.github.com/chibicode/fe195d792270910226c928b69a468206?permalink_comment_id=3650172#gistcomment-3650172

import React, { memo } from "react";
import Image from "next/image";

const isRequired = () => {
    throw new Error("You need to specify an emoji for the Twemoji component");
};

const Twemoji = ({ emoji = isRequired() }) => {
    const img = emoji.codePointAt(0).toString(16);

    return (
        <div className={css["card"]}>
            <Image
                src={`https://twemoji.maxcdn.com/v/latest/svg/${img}.svg`}
                height="32"
                width="32"
                alt={emoji}
            />
            {/* {emoji} */}
        </div>
    );
};

export default memo(Twemoji);
