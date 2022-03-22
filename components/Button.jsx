import css from './Button.module.scss'

export default function Button({ onClick, label }) {
    return (
        <button onClick={onClick} className={css["button"]}>
            {label}
        </button>
    )
}