import css from "./Intro.module.scss"

export default function Intro(params) {
    return (
        <div className={css["intro"]}>
        <h1>Twemoji Cheatsheet</h1>
        <p>Created by <a rel="noreferrer" taget="_blank" href="https://github.com/shahriarkh">Shahriar Khalvati</a></p>
        <p>Emojis by Twitter&apos;s <a rel="noreferrer" target="_blank" href="https://twemoji.twitter.com/">Twemoji</a></p>
        </div>
    )
}