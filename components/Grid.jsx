import css from './Grid.module.scss'

export default function Grid({ children }) {
    return (
        <div className={css['grid']}>
            {children}
        </div>
    )
}