import { useEffect, useState } from "react";
import css from "./SearchBox.module.scss";
import Fuse from "fuse.js";

export default function SearchBox({ setAvailabeEmojis, emojis }) {
    const fuse = new Fuse(emojis, {
        threshold: 0.1,
        keys: ["label", "tags", "emoji", "hexcode", "emoticon"],
    });

    const [query, setQuery] = useState("");

    function handleSearch(query) {
        if (query == "") {
            setAvailabeEmojis(emojis);
            return;
        }
        let results = fuse.search(query);
        let flatResults = Object.keys(results).reduce(function (r, k) {
            return r.concat(results[k].item);
        }, []);
        setAvailabeEmojis(flatResults);
    }

    useEffect(() => {
        const timeout = setTimeout(() => handleSearch(query), 200);
        return () => clearTimeout(timeout);
    }, [query, handleSearch]);

    return (
        <input
            className={css.input}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="search: name, tags, hexcode, emoticon"
        />
    );
}
