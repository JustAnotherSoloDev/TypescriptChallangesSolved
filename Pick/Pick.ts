/*
  4 - Pick
  -------
  by Anthony Fu (@antfu) #easy #union #built-in
  ### Question
  Implement the built-in `Pick<T, K>` generic without using it.
  Constructs a type by picking the set of properties `K` from `T`
  > View on GitHub: https://tsch.js.org/4
*/


/* _____________ Your Code Here _____________ */

type MyPick<T, K extends keyof T> = { [key in K]: T[key] };

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
    Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
    // @ts-expect-error
    MyPick<Todo, 'title' | 'completed' | 'invalid'>,
]

interface Todo {
    title: string
    description: string
    completed: boolean
}

interface Expected1 {
    title: string
}

interface Expected2 {
    title: string
    completed: boolean
}

const todo: MyPick<Todo, "completed" | "description"> = {
    completed: false,
    description:"Type checked usig My Own PICK"
}

