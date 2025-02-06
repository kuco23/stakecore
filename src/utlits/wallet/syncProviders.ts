import { useSyncExternalStore } from "react"
import { store } from "./eip6963"

export const useSyncProviders = () => useSyncExternalStore(store.subscribe, store.value, store.value)