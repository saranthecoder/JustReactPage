import Content from './Content';

const body = (props) => {
    return (
        <ul id="concepts">
            <Content data={props.concepts[0]} />
            <Content data={props.concepts[1]} />
            <Content data={props.concepts[2]} />
        </ul>
    )
}

export default body;