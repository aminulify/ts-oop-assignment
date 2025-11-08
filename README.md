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


# Difference Between `any`, `unknown`, and `never` Types in TypeScript

## 🧠 Question:
Explain the difference between `any`, `unknown`, and `never` types in TypeScript.

---

## 💡 Answer:

TypeScript provides three special types — **`any`**, **`unknown`**, and **`never`** — to handle different situations where type safety and intent matter.  
Let’s understand how each one behaves and when to use them.

---

### 🔹 `any` Type

The `any` type disables TypeScript’s type checking for that variable.  
Once a variable is typed as `any`, you can assign it any value and perform any operation on it — **no compile-time errors**.

```ts
let value: any = "Hello";
value = 123;
value = true;

value.toUpperCase(); // ✅ No error, but risky
```

# TypeScript Core Concepts Explained

## 🧠 Question 1:
What is **type inference** in TypeScript? Why is it helpful?

---

## 💡 Answer:

**Type inference** is TypeScript’s ability to **automatically detect the type** of a variable or expression without you explicitly declaring it.

In other words, when you assign a value, TypeScript analyzes that value and infers its type for future use.

```ts
let message = "Hello TypeScript";
// Inferred type: string

message = "Hi again"; // ✅ Allowed
// message = 123; // ❌ Error: Type 'number' is not assignable to type 'string'
```
