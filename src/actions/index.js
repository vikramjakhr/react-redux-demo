export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

function increment() {
    return {
        type: INCREMENT
    }
}

function decrement() {
    return {
        type: DECREMENT
    }
}
