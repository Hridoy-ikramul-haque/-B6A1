

type FormatValueParam = string | number | boolean;
const formatValue = (value: FormatValueParam): FormatValueParam => {
    if (typeof (value) == "string") return value.toUpperCase();
    if (typeof (value) == "number") return value * 10;
    if (typeof (value) == "boolean") return !value;


    throw new Error("Type Invalid..........");
};








type GetLengthParam = string | any[];
const getLength = (value:GetLengthParam):number => {
    // return value.length;
    if (typeof value === "string") return value.length;
    if (Array.isArray(value)) return value.length;

    throw new Error("Invalid type............");
}








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











interface Book{
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
};

const printBookDetails = (val: Book) => {
    console.log(`Title: ${val.title}, Author: ${val.author}, Published: ${val.publishedYear}, Available: ${val.isAvailable}`);
};









type Arr = number | string;
const getUniqueValues = (arr1: Arr[], arr2: Arr[]): Arr[] => {
    const map: { [Key: string]: boolean } = {};
    const combninedUnique: Arr[] = [];
    for (let i = 0; i < arr1.length; i++) {
        const key = String(arr1[i]);
        if (!map[key]) {
            map[key] = true;
            combninedUnique[combninedUnique.length] = arr1[i];
        }

    }

    for (let i = 0; i < arr2.length; i++) {
        const key = String(arr2[i]);
        if (!map[key]) {
            map[key] = true;
            combninedUnique[combninedUnique.length] = arr2[i];
        }

    }

    return combninedUnique;
};










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




