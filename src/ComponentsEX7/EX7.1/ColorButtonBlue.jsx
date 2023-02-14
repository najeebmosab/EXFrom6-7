function ColorButton(props) {
    const handleClick = () => {
        props.onClick(props.color);
    };

    return (
        <button style={{ backgroundColor: props.color }} onClick={handleClick}>
            {props.color}
        </button>
    );

}
export default ColorButton