# TypeScript Concepts: Interface vs Type & keyof Keyword

## 1️⃣ Differences Between Interfaces and Types in TypeScript

Both **interfaces** and **types** define the structure of data in TypeScript, but they have some key differences.

### 🔹 Key Differences

| Feature | Interface | Type |
|----------|------------|------|
| **Merging** | ✅ Can be reopened and extended | ❌ Cannot be reopened once defined |
| **Extending** | ✅ Uses `extends` | ✅ Uses intersection `&` |
| **Unions / Intersections** | ❌ Not supported | ✅ Supported |
| **Use Cases** | Best for describing object shapes and reusable contracts | Best for combining types, primitives, and complex structures |

---

### 🧩 Example: Interface

```ts
interface User {
  name: string;
  age: number;
}

// Can be reopened and extended
interface User {
  email: string;
}

const person: User = {
  name: "Aminul",
  age: 25,
  email: "aminul@example.com",
};
```

# The Use of `keyof` Keyword in TypeScript

## 🧠 Question:
What is the use of the `keyof` keyword in TypeScript? Provide an example.

---

## 💡 Answer:

The **`keyof`** keyword in TypeScript extracts all the property names (keys) of a type or interface and returns them as a **union of string literal types**.

It’s often used with **generics** to create type-safe and reusable functions that can dynamically access object properties while maintaining strong typing.

---

### 🧩 Example 1: Basic Usage

```ts
interface User {
  id: number;
  name: string;
  email: string;
}

type UserKeys = keyof User;
// Result: "id" | "name" | "email"
```
You can then use keyof to build dynamic and type-safe code, such as generic utility functions:
```ts
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { id: 1, name: "Aminul", email: "aminul@example.com" };

const email = getValue(user, "email"); // Type: string
```

