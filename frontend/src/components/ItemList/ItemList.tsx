import { Item, ItemType } from "../../types";

interface ItemListProps {
  type: ItemType;
  title: string;
  items: Item[];
  createItem: (type: ItemType, name: string) => void;
  deleteItem: (id: number) => void;
  //   updateItem: (id: number, name: string) => void;
  toggleItem: (id: number, done: boolean) => void;
}

export default function ItemList({
  type,
  title,
  items,
  createItem,
  deleteItem,
  toggleItem,
}: ItemListProps) {
  return (
    <div>
      <h2>{title}</h2>
      {items.map((item) => (
        <div key={item.id} className="item">
          <input
            type="checkbox"
            checked={item.done}
            onChange={() => toggleItem(item.id, !item.done)}
          />
          <span>{item.name}</span>
          <button onClick={() => deleteItem(item.id)}>Delete</button>
        </div>
      ))}
      <input
        type="text"
        placeholder="Add new item"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            const newItemName = (e.target as HTMLInputElement).value;
            if (newItemName) {
              // Call createItem function here
              createItem(type, newItemName);
              (e.target as HTMLInputElement).value = "";
            }
          }
        }}
      />
    </div>
  );
}
