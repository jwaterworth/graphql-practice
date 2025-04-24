import { ItemType } from "../../types";
import ItemList from "../ItemList/ItemList";
import styles from "./Content.module.scss";
import {
  useCreateItem,
  useGetItems,
  useUpdateItem,
} from "../../services/items-api";

export default function Content() {
  const [createItemRequest] = useCreateItem();
  const [updateItem] = useUpdateItem();

  const { data, error, loading, refetch } = useGetItems();

  const items = data?.items || [];

  const createItem = (type: ItemType, name: string) => {
    createItemRequest({
      variables: {
        createItemsInput: {
          name,
          type,
          done: false,
        },
      },
    }).then(() => {
      refetch();
    });
  };
  const toggleItem = (id: number, done: boolean) => {
    updateItem({
      variables: {
        updateItemsInput: {
          id,
          done,
        },
      },
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
