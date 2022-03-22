import css from "./Button.module.scss";

export default function Button({ onClick, label, url }) {
    return (
        <>
            {onClick ? (
                <button onClick={onClick} className={css["button"]}>
                    {label}
                </button>
            ) : (
                <a target="_blank" rel="noreferrer" className={css["button"]} href={url}>{label}</a>
            )}
        </>
    );
}
