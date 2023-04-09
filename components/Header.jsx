import css from "./Header.module.scss";

export default function Header() {
    return (
        <header className={css.header}>
            <p>
                <a
                    rel="noreferrer noopener"
                    target="_blank"
                    href="https://github.com/shahriarkh/twemoji-cheatsheet"
                >
                    GitHub
                </a>{" "}
                Repo
            </p>
            {/* <span>|</span> */}
            <p>
                Created by{" "}
                <a
                    rel="noreferrer noopener"
                    target="_blank"
                    href="https://github.com/shahriarkh"
                >
                    {" "}
                    Shahriar Khalvati
                </a>
            </p>
            {/* <span>|</span> */}
            <p>
                Emojis by Twitter&apos;s{" "}
                <a
                    rel="noreferrer noopener"
                    target="_blank"
                    href="https://twemoji.twitter.com/"
                >
                    Twemoji
                </a>
            </p>
        </header>
    );
}
