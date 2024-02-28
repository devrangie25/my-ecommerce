// @ts-nocheck
import { writable } from "svelte/store";

let initialValue: any = []

const productsStore = writable(initialValue)

export default productsStore