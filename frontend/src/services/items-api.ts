import { ApolloError, gql, useMutation, useQuery } from '@apollo/client'
import { Item } from '../types';

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
        name
        type
        done
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

export function useCreateItem() {
    return useMutation(CREATE_ITEM);
}

export function useUpdateItem() {
    return useMutation(UPDATE_ITEM);
}