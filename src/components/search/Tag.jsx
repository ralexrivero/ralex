const Tag = (props) => {
  const tags = props.filter.split(',');

  return (
      tags.map((tag, index) => {
        return (
          <button
            className="search-tag"
            title={tag}
            aria-label="filter tag"
            key={index}
          >
            {tag}
          </button>
        )
      })
      )
    }

export default Tag;
