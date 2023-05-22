function Header({title, subtitle, x}) {

  // const {title, subtitle} = props
  console.log(x)

    return (
        <div>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </div>
    )
}

export default Header