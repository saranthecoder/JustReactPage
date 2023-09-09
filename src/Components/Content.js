const Content = (props) => {
    return (
        <li className="concept">
                <img src={props.data.image} alt="this is a photo" />
                <h2>{props.data.title}</h2>
                <p> {props.data.description} </p>
        </li>
    );
}

export default Content;