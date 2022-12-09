import css from "./Footer.module.scss";

export default function Footer() {
    return (
        <footer className={css.footer}>
            <p>
                Source on{" "}
                <a rel="noreferrer noopener" target="_blank" href="https://github.com/shahriarkh/twemoji-cheatsheet">
                    GitHub
                </a>
            </p>
            <span>|</span>
            <p>
                Created by{" "}
                <a rel="noreferrer noopener" target="_blank" href="https://github.com/shahriarkh">
                    {" "}
                    Shahriar Khalvati
                </a>
            </p>
            <span>|</span>
            <p>
                Emojis by Twitter&apos;s{" "}
                <a rel="noreferrer noopener" target="_blank" href="https://twemoji.twitter.com/">
                    Twemoji
                </a>
            </p>
        </footer>
    );
}
