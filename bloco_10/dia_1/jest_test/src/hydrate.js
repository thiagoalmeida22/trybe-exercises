const hydrate = (string) => {
    const count = string.match(/\d/g).reduce((acc, cur) => {
        acc += Number(cur);
        return acc;
    }, 0);
    return count === 1 ? `1 copo de água` : `${count} copos de água`;
}

module.exports = hydrate;

hydrate('1 cachaça, 5 cervejas e 1 copo de vinho');