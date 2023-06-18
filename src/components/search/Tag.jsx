const Tag = (props) => {
  return (
    <button
      className="search-tag"
      title={props.filter}
      aria-label="filter tag">
      {props.filter}
    </button>
  )
}

export default Tag;
