import Downshift from "downshift";
import Button from "./Button"
import css from "./Dropdown.module.scss";

export default function Dropdown({ onChangeFunc, onClearFunc, items }) {
    return (
        <Downshift
            id="switcher"
            onChange={(selected) => {
                selected ? onChangeFunc(selected.val) : onClearFunc();
            }}
        >
            {({
                // getLabelProps,
                // getInputProps,
                // getButtonProps,
                getItemProps,
                isOpen,
                toggleMenu,
                clearSelection,
                selectedItem,
                // inputValue,
                // highlightedIndex,
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
                        {selectedItem ? selectedItem.label : "Select an item"}
                    </button>
                    <Button onClick={() => clearSelection()} label="Clear" />
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
                </div>
            )}
        </Downshift>
    );
}
