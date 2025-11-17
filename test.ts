type AllowedType = number | string;

const getUniqueValuesalter = (arr1: AllowedType[], arr2: AllowedType[]): AllowedType[] => {
    const combined: AllowedType[] = [];

    // Manually merge arrays
    for (let i = 0; i < arr1.length; i++) {
        combined[combined.length] = arr1[i];
    }
    for (let i = 0; i < arr2.length; i++) {
        combined[combined.length] = arr2[i];
    }

    const result: AllowedType[] = [];

    // Check uniqueness manually
    for (let i = 0; i < combined.length; i++) {
        let isDuplicate = false;

        for (let j = 0; j < result.length; j++) {
            if (result[j] === combined[i]) {
                isDuplicate = true;
                break;
            }
        }

        if (!isDuplicate) {
            result[result.length] = combined[i];
        }
    }

    return result;
};
