import Downshift, { useSelect } from "downshift";
import css from "./Dropdown.module.scss";



export default function Dropdown({ onChangeFunc, items }) {
    return (
        <Downshift
        onChange={selected => onChangeFunc(selected.val)}>
            {({
                getLabelProps,
                getInputProps,
                getButtonProps,
                getItemProps,
                isOpen,
                toggleMenu,
                clearSelection,
                selectedItem,
                inputValue,
                highlightedIndex,
            }) => (
                <div className={css["box"]}>
                    <button className={css['selector']}
                        type="button"
                        onClick={toggleMenu}
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded={isOpen}
                    >
                        {selectedItem ? selectedItem.label : "Select an item"}
                    </button>
                    {isOpen ? (
                        <div className={css["menu"]}>
                            {items.map((item) => (
                                <button {...getItemProps({ item })} key={item} className={css["menu__item"]}>
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
