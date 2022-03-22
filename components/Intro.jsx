import css from './Intro.module.scss'

export default function Intro(params) {
    return (
        <div className={css["intro"]}>
        <h1>Twemoji Cheatsheet</h1>
        <p>Created by <a taget="_blank" href="https://github.com/shahriarkh">Shahriar Khalvati</a></p>
        <p>Emojis by Twitter's <a target="_blank" href="https://twemoji.twitter.com/">Twemoji</a></p>
        </div>
    )
}