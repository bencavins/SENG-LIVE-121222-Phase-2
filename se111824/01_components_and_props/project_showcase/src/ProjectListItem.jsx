export default function ProjectListItem({ name, about, link }) {
  
  return (
    <li>
      <img />
      <h3>{name}</h3>
      <p>{about}</p>
      <a href={link}>{link}</a>
    </li>
  )
}