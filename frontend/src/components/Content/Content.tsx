import { useEffect, useState } from "react";
import { Item, ItemType } from "../../types";
import ItemList from "../ItemList/ItemList";
import styles from "./Content.module.scss";

export default function Content() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    setItems([
      { id: 1, name: "Task 1", type: "urgentAndImportant", done: false },
      { id: 2, name: "Task 2", type: "urgentAndNotImportant", done: true },
      { id: 3, name: "Task 3", type: "notUrgentAndImportant", done: false },
      { id: 4, name: "Task 4", type: "notUrgentAndNotImportant", done: true },
    ]);
  }, []);

  const createItem = (type: ItemType, name: string) => {
    setItems([...items, { id: items.length + 1, name, type, done: false }]);
  };
  const toggleItem = (type: ItemType, id: number) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };

  return (
    <div className={styles.content}>
      <div className={styles.quadrant}>
        <ItemList
          type="urgentAndImportant"
          createItem={createItem}
          toggleItem={toggleItem}
          title="Urgent and Important"
          items={items.filter((item) => item.type === "urgentAndImportant")}
        />
      </div>
      <div className={styles.quadrant}>
        <ItemList
          type="urgentAndNotImportant"
          createItem={createItem}
          toggleItem={toggleItem}
          title="Urgent and Not Important"
          items={items.filter((item) => item.type === "urgentAndNotImportant")}
        />
      </div>
      <div className={styles.quadrant}>
        <ItemList
          type="notUrgentAndImportant"
          createItem={createItem}
          toggleItem={toggleItem}
          title="Not Urgent and Important"
          items={items.filter((item) => item.type === "notUrgentAndImportant")}
        />
      </div>
      <div className={styles.quadrant}>
        <ItemList
          type="notUrgentAndNotImportant"
          createItem={createItem}
          toggleItem={toggleItem}
          title="Not Urgent and Not Important"
          items={items.filter(
            (item) => item.type === "notUrgentAndNotImportant"
          )}
        />
      </div>
    </div>
  );
}
