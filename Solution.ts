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

