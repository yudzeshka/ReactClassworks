function List({ items }) {
  const listItems = items.map((item) => {
    let nestedList;

    if (item.regions && item.regions.length) {
      nestedList = <List items={item.regions} />;
    }

    return (
      <li key={item.name}>
        {item.name} {nestedList ? nestedList : null}
      </li>
    );
  });

  return <ul>{listItems}</ul>;
}

export default List;
