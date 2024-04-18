function UserItem({ data, removeItem }) {
  return (
    <div className="userItem">
      {data.map((item, index) => {
        return (
          <div className="newItem" key={item.id}>
            <p>{item.name}</p>
            <p>|</p>
            <p>{item.weight}kg</p>
            <p>{item.height}cm</p>
            <p>{item.length}cm</p>
            <p>{item.width}cm</p>

            <button
              onClick={() => {
                removeItem(item.id);
              }}
            >
              X
            </button>
          </div>
        );
      })}
    </div>
  );
}
export default UserItem;
