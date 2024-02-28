// @ts-nocheck
import { writable } from "svelte/store";

let initialValue: any = []

const cartItemStore = writable(initialValue)

export default cartItemStore