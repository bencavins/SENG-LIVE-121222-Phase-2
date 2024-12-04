export default function ProjectListItem({ image, name, link, about }) {
  return (
    <li className="card">
      <figure className="image">
        <img src={image} />
      </figure>
      <section className="details">
        <h4>{name}</h4>
        <article>
          <p>{about}</p>
          <a href={link}>{link}</a>
        </article>
      </section>
    </li>
  )
}