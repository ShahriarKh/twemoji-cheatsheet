import Downshift from "downshift";
import Button from "./Button";
import css from "./Dropdown.module.scss";

export default function Dropdown({ onChangeFunc, onClearFunc, items, name }) {
    return (
        <Downshift
            id="switcher"
            onChange={(selected) => {
                selected ? onChangeFunc(selected.val) : onClearFunc();
            }}
        >
            {({
                getItemProps,
                isOpen,
                toggleMenu,
                clearSelection,
                selectedItem,
            }) => (
                <div className={css["box"]}>
                    <button
                        className={css["selector"]}
                        type="button"
                        onClick={toggleMenu}
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded={isOpen}
                    >
                        {selectedItem ? selectedItem.label : name}
                        <span>🔽</span>
                    </button>

                    {isOpen ? (
                        <div className={css["menu"]}>
                            {items.map((item) => (
                                <button
                                    {...getItemProps({ item })}
                                    key={item.label}
                                    className={css["menu__item"]}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    ) : null}
                    {selectedItem && onClearFunc && (
                        <Button
                            className={css["reset"]}
                            onClick={() => clearSelection()}
                            label="Reset"
                        />
                    )}
                </div>
            )}
        </Downshift>
    );
}
