import { ApolloError, gql, useMutation, useQuery } from '@apollo/client'
import { Item, ItemType } from '../types';

const GET_ITEMS = gql`
query getItems { 
    items {
        id
        name
        type
        done
    }
}
`

const CREATE_ITEM = gql`
mutation CreateItem($createItemsInput: CreateItemDto!) {
  createItem(createItemsInput: $createItemsInput) {
    id
    name
    type
    done
  }
}
`

const UPDATE_ITEM = gql`
mutation UpdateItem($updateItemsInput: UpdateItemDto!) {
    updateItem(updateItemsInput: $updateItemsInput) {
        id
    }
}`

export function useGetItems(): {
    loading: boolean, data: {
        items: Item[]
    }, error: ApolloError | undefined, refetch: () => void
} {
    const { loading, data, error, refetch } = useQuery(GET_ITEMS);

    return { loading, data, error, refetch }
}

export function useCreateItem(): [(type: ItemType, name: string) => Promise<unknown>, {
    data: Item | null | undefined,
    loading: boolean,
    error: ApolloError | undefined
}] {
    const [createItemRequest, { data, loading, error }] = useMutation<Item>(CREATE_ITEM);

    return [
        (type: ItemType, name: string) => {
            return createItemRequest({
                variables: {
                    createItemsInput: {
                        name,
                        type,
                        done: false,
                    },
                },
            });
        },
        { data, loading, error }
    ]
}

export function useToggleItem(): [(id: number, done: boolean) => Promise<unknown>, {
    data: Item | null | undefined,
    loading: boolean,
    error: ApolloError | undefined
}] {
    const [updateItem, { data, loading, error }] = useMutation<Item>(UPDATE_ITEM);
    return [(id: number, done: boolean) => {
        return updateItem({
            variables: {
                updateItemsInput: {
                    id,
                    done,
                },
            },
        });
    }, { data, loading, error }
    ];
}