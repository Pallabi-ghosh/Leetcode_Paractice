const getFruit = {
      pineapple: '🍍',
      peach: '🍑',
      strawberry: '🍓'
};    

const asyncfunction = async () => {
    let a = await getFruit.peach;
    let b = await getFruit.strawberry;
    

    return [a, b];
}

asyncfunction().then(console.log);