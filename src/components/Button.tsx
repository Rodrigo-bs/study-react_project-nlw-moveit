interface ButtonsProp {
    children: string;
    style: {
        color: string;
    }
}

export function Button(props: ButtonsProp) {
    return (
        <button style={{ backgroundColor: props.style.color }}>
            { props.children }
        </button>
    );
}