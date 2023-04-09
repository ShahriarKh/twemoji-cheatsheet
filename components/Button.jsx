import css from "./Button.module.scss";

export default function Button({ onClick, label, url, className }) {
    return (
        <>
            {onClick ? (
                <button
                    onClick={onClick}
                    className={`${css["button"]} ${className}
                `}
                >
                    {label}
                </button>
            ) : (
                <a
                    target="_blank"
                    rel="noreferrer noopener"
                    className={css["button"]}
                    href={url}
                >
                    {label}
                </a>
            )}
        </>
    );
}
