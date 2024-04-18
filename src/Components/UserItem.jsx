function UserItem() {
  return (
    <div className="userItem">
      <form>
        <input type="text" name="name" placeholder="Name" />
        <input type="number" name="weight" placeholder="Weight" />
        <input type="number" name="height" placeholder="Height" />
        <input type="number" name="width" placeholder="Width" />
        <input type="number" name="length" placeholder="Length" />
      </form>
    </div>
  );
}
export default UserItem;
