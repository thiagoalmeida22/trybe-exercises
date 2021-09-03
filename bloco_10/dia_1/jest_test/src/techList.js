const techList = (techArr, nameString) => {
    if (techArr.length === 0) { return ('Vazio!') }
    return techArr.sort().reduce((acc, curr) => {
        acc.push({
            tech: curr,
            name: nameString
        });
        return acc
    }, [])
}
techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas');
module.exports = techList;