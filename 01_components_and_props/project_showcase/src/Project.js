function Project({title, img, subtitle}) {
  return (
    <li>
      <h3>{title}</h3>
      <h5>{subtitle}</h5>
      <img src={img} alt={title} />
    </li>
  )
}

export default Project