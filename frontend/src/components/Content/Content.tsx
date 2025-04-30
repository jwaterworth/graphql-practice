import { ItemType } from "../../types";
import ItemList from "../ItemList/ItemList";
import styles from "./Content.module.scss";
import {
  useCreateItem,
  useDeleteItem,
  useGetItems,
  useToggleItem,
} from "../../services/items-api";

export default function Content() {
  const [createItemRequest] = useCreateItem();
  const [deleteItemRequest] = useDeleteItem();
  const [toggleItemRequest] = useToggleItem();

  const { data, error, loading, refetch } = useGetItems();

  const items = data?.items || [];

  const createItem = (type: ItemType, name: string) => {
    createItemRequest(type, name).then(() => {
      refetch();
    });
  };
  const deleteItem = (id: number) => {
    deleteItemRequest(id).then(() => {
      refetch();
    });
  };
  const toggleItem = (id: number, done: boolean) => {
    toggleItemRequest(id, done).then(() => {
      refetch();
    });
  };

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.error}>Error: {error.message}</div>;
  }

  return (
    <div className={styles.content}>
      <div className={styles.quadrant}>
        <ItemList
          type="urgentAndImportant"
          createItem={createItem}
          deleteItem={deleteItem}
          toggleItem={toggleItem}
          title="Urgent and Important"
          items={items.filter((item) => item.type === "urgentAndImportant")}
        />
      </div>
      <div className={styles.quadrant}>
        <ItemList
          type="urgentAndNotImportant"
          createItem={createItem}
          deleteItem={deleteItem}
          toggleItem={toggleItem}
          title="Urgent and Not Important"
          items={items.filter((item) => item.type === "urgentAndNotImportant")}
        />
      </div>
      <div className={styles.quadrant}>
        <ItemList
          type="notUrgentAndImportant"
          createItem={createItem}
          deleteItem={deleteItem}
          toggleItem={toggleItem}
          title="Not Urgent and Important"
          items={items.filter((item) => item.type === "notUrgentAndImportant")}
        />
      </div>
      <div className={styles.quadrant}>
        <ItemList
          type="notUrgentAndNotImportant"
          createItem={createItem}
          deleteItem={deleteItem}
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
