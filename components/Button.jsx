import css from './Button.module.scss'

export default function Button({ func, label }) {
    return (
        <button onClick={func} className={css["button"]}>
            {label}
        </button>
    )
}