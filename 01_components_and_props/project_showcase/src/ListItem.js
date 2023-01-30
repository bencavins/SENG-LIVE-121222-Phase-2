function ListItem({project}) {
    const {id, name} = project

    return (
      <li key={id}>{name}</li>
    )
}

export default ListItem;