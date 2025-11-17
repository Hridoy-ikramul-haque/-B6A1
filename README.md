# TypeScript-এ Interface এবং Type এর মধ্যে পার্থক্য

TypeScript-এ interface এবং type—দুটোই ডেটার shape নির্ধারণ করতে ব্যবহৃত হয়।  
তবে তাদের মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য আছে।

------------------------------------------------------------
## 1. Interface বারবার extend/merge করা যায়, Type পারে না  
Interface = ওপেন  
Type = ক্লোজড  

### Example (Interface):
```ts
interface Person {
    name: string;
    age: number;
}

interface Person {
    id: number;
}

const user: Person = {
    name: "Ikramul",
    age: 28,
    id: 312333
};
```

### Example (Type):
```ts
type Person = {
    name: string;
};

//  ভুল — একই নামে Type আবার declare করা যাবে না
type Person = {
    hasCar: boolean;
};
```

------------------------------------------------------------
## 2. Type দিয়ে Union, Intersection, Tuple, Primitive তৈরি করা যায়; Interface দিয়ে যায় না  

```ts
type Value = string | number | boolean;

type DataTuple = [number, string];

type ID = number;
```

Interface মূলত object shape এর জন্য উপযোগী।

------------------------------------------------------------
## 3. Interface OOP (Object-Oriented Programming) এ বেশি সুবিধাজনক  

```ts
interface Person {
    getAge(): number;
}

class Student implements Person {
    birthYear: number;

    constructor(birthYear: number) {
        this.birthYear = birthYear;
    }

    getAge(): number {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }
}

const s = new Student(2000);
console.log(s.getAge()); 

```

------------------------------------------------------------
## 4. Interface extends ব্যবহার করে, Type intersection (&) ব্যবহার করে  

### Example (Interface extends):
```ts
interface A {
    x: number;
}

interface B extends A {
    y: string;
}

const obj: B = {
    x: 10,
    y: "hello"
};
```

### Example (Type Intersection):
```ts
type A = { x: number };
type B = { y: number };

type Combined = A & B;

const data: Combined = {
    x: 5,
    y: 20
};
```
------------------------------------------------------------
------------------------------------------------------------
<br>

<p align="center"><strong>---------------- End of diff between type & interface ----------------</strong></p>



<br><br><br><br><br><br><br><br>



------------------------------------------------------------





# What is the use of the `keyof` keyword in TypeScript?

TypeScript-এ `keyof` একটি utility keyword যা কোনো object type-এর **সব key-এর union** তৈরি করে।  

উদাহরণস্বরূপ:  
- Object-এর বৈধ key নিশ্চিত করা  
- Dynamic property access নিরাপদ করা  
- Generic utility function বানানো  

------------------------------------------------------------
##  `keyof` কী করে?

`keyof` কোনো object type-এর **সব property নাম** নিয়ে একটি **string union type** তৈরি করে।

------------------------------------------------------------
##  Example

```ts
interface Person {
  name: string;
  age: number;
  isStudent: boolean;
}

type PersonKeys = keyof Person;
// Output: "name" | "age" | "isStudent"
```

এখানে `PersonKeys` হবে:  
```
"name" | "age" | "isStudent"
```

------------------------------------------------------------
##  Practical Example:  property access করা

```ts
interface User {
  username: string;
  email: string;
  age: number;
}

function getUserProperty(user: User, key: keyof User) {
  return user[key];
}

const u: User = {
  username: "ikramul",
  email: "hridoy.ikramul@gmail.com",
  age: 28
};

console.log(getUserProperty(u, "email")); // valid
// console.log(getUserProperty(u, "address")); -> error — because not a key
```

➡ এখানে `keyof User` ensure করছে যে **শুধুমাত্র legal key** ব্যবহার করা যাবে।


```ts
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const person = {
    name: "Ikramul",
    age: 258
    city: "Dhaka"
};

console.log(getValue(person, "name")); // "Ikramul"
console.log(getValue(person, "age"));  // 25


// console.log(getValue(person, "country"));
//  Error: "country" is not a key of person

```
------------------------------------------------------------



------------------------------------------------------------
<p align="center"><strong>---------------- End of keyof keyword explanation ----------------</strong></p>

