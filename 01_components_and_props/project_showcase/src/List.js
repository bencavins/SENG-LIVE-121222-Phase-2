import ListItem from "./ListItem";

function List({title, subTitle, projects}) {

    return (
      <>
        <h3>{title}</h3>
        <h5>{subTitle}</h5>
        <ul>
            {projects.map(obj => 
                <ListItem project={obj} />
            )}
        </ul>
      </>
    )
}

export default List;