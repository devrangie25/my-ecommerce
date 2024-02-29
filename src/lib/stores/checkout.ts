// @ts-nocheck
import { writable } from "svelte/store";

let initialValue: any = null

const checkoutStore = writable(initialValue)

export default checkoutStore