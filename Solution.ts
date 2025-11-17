// Problem 1:
type FormatValueParam = string | number | boolean;
const formatValue = (value: FormatValueParam): FormatValueParam => {
    if (typeof (value) == "string") return value.toUpperCase();
    if (typeof (value) == "number") return value * 10;
    if (typeof (value) == "boolean") return !value;


    throw new Error("Type Invalid..........");
};


// console.log(formatValue({1233412}));




// Problem 2:
type GetLengthParam = string | any[];
const getLength = (value:GetLengthParam):number => {
    // return value.length;
    if (typeof value === "string") return value.length;
    if (Array.isArray(value)) return value.length;

    throw new Error("Invalid type............");
}

// console.log(getLength('typescript'));
// console.log(getLength([10, 20, 30, 40]));
// console.log(getLength(true));




// // Problem 3:

class Person{
    name: string;
    age: number;

    constructor(name: string, age: number)
    {
        this.name = name;
        this.age = age;
    }

    getDetails(): string{
        return `'Name: ${this.name}, Age: ${this.age}'`;
    }
}

// const person1 = new Person('John Doe', 30);
// console.log(person1.getDetails());

// const person2 = new Person('Alice', 25);
// console.log(person2.getDetails());




// // Problem 4:

type filterByRatingParam = {
    title: string;
    rating: number;
}
const filterByRating = (arr:filterByRatingParam[]):filterByRatingParam[] => {
    // let result = arr.filter((val) => {
    //     return val.rating >= 4;
    // });
    // return result;

    arr.forEach((val) => {
        if (val.rating > 5) {
            throw new Error("Invalid Rating.")
        }
    });

    let result = arr.filter((obj) => {
        return obj.rating >= 4;
    });
    return result;
}

const books = [
    { title: 'Book A', rating: 4.5 },
    { title: 'Book B', rating: 3.2 },
    { title: 'Book C', rating: 5.0 },
];

// console.log(filterByRating(books));


// // Problem 5:

interface filterActiveUsersParam {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
};

const filterActiveUsers = (arr:filterActiveUsersParam[]):filterActiveUsersParam[] => {
    let result = arr.filter((val) => {
        return val.isActive === true;
    });
    return result;
}

const users = [
    { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
    { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
    { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];

// console.log(filterActiveUsers(users));



// Problem 6

interface Book{
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
};

const printBookDetails = (val: Book) => {
    console.log(`Title: ${val.title}, Author: ${val.author}, Published: ${val.publishedYear}, Available: ${val.isAvailable}`);
};

const myBook: Book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publishedYear: 1925,
    isAvailable: true,
};

// printBookDetails(myBook);


// Problem 7

type GetUniqueValuesParam = number | string;
const getUniqueValues = (arr1: GetUniqueValuesParam[], arr2: GetUniqueValuesParam[]): GetUniqueValuesParam[] => {
    let combinedArr: GetUniqueValuesParam[] = [...arr1, ...arr2];
    let uniqueArr: GetUniqueValuesParam[] = [];

    // helper function
    const isUnique = (val: GetUniqueValuesParam) => {
        for (let i = 0; i < uniqueArr.length; i++)
        {
            if (uniqueArr[i] === val) return false;
        }
        return true;
    }

    for (let i = 0; i < combinedArr.length; i++)
    {
        if (isUnique(combinedArr[i]))
        {
            uniqueArr[uniqueArr.length] = combinedArr[i];
        }
    }

    return uniqueArr;
}
const array1 = ["hridoy", 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, "hridoy"];
// console.log(getUniqueValues(array1, array2));



// Problem 8

interface CalculateTotalPriceParam{
    name: string;
    price: number;
    quantity: number;
    discount ?: number;
};

const calculateTotalPrice = (val: CalculateTotalPriceParam[]):number => {
    let result = val.reduce((acc, cur) => {
        let cal = (cur.price) * (cur.quantity);
        cur.discount ? cal = (cal - (cal*(cur.discount/100))) :cal= cal;
        return acc+=cal;
    },0)
    
    return result;
}

const products = [
    { name: 'Pen', price: 10, quantity: 2 },
    { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
    { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

console.log(calculateTotalPrice(products));