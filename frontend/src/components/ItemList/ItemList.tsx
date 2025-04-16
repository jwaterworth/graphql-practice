import { Item, ItemType } from "../../types";

interface ItemListProps {
  type: ItemType;
  title: string;
  items: Item[];
  createItem: (type: ItemType, name: string) => void;
  //   deleteItem: (id: number) => void;
  //   updateItem: (id: number, name: string) => void;
  toggleItem: (type: ItemType, id: number) => void;
}

export default function ItemList({
  type,
  title,
  items,
  createItem,
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
            onChange={() => toggleItem(type, item.id)}
          />
          <span>{item.name}</span>
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
