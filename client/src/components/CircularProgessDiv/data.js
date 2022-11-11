export const nutrientsData = (foodItemsInList) => {
    const items = {
        calcium: foodItemsInList?.products?.reduce((acc, ele) => {
            if (typeof ele?.product?.Data['Major Minerals'].Calcium === 'number')
                return acc + ele?.product?.Data['Major Minerals'].Calcium
        }, 0),
        iron: foodItemsInList?.products?.reduce((acc, ele) => {
            if (typeof ele?.product?.Data['Major Minerals'].Iron === 'number')
                return acc + ele?.product?.Data['Major Minerals'].Iron
        }, 0),
        sodium: foodItemsInList?.products?.reduce((acc, ele) => {
            if (typeof ele?.product?.Data['Major Minerals'].Sodium === 'number')
                return acc + ele?.product?.Data['Major Minerals'].Sodium
        }, 0),
        magnesium: foodItemsInList?.products?.reduce((acc, ele) => {
            if (typeof ele?.product?.Data['Major Minerals'].Magnesium === 'number')
                return acc + ele?.product?.Data['Major Minerals'].Magnesium
        }, 0),
        vitaminA: foodItemsInList?.products?.reduce((acc, ele) => {
            if (typeof ele?.product?.Data.Vitamins['Vitamin A - RAE'] === 'number')
                return acc + ele?.product?.Data.Vitamins['Vitamin A - RAE']
        }, 0),
        fiber: foodItemsInList?.products?.reduce((acc, ele) => {
            if (typeof ele?.product?.Data.Fiber === 'number')
                return acc + ele?.product?.Data.Fiber
        }, 0),
        protein: foodItemsInList?.products?.reduce((acc, ele) => {
            if (typeof ele?.product?.Data.Protein === 'number')
                return acc + ele?.product?.Data.Protein
        }, 0),
        cholesterol: foodItemsInList?.products?.reduce((acc, ele) => {
            if (typeof ele?.product?.Data.Cholesterol === 'number')
                return acc + ele?.product?.Data.Cholesterol
        }, 0),
    }
    return items;
}