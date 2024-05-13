type Population = number;

const population = (population: Population) => {
const result = population.toString().length >= 10
? `${(population / 1000000000).toFixed(1)} billion`
: population.toString().length >= 7
? `${(population / 1000000).toFixed(1)} million`
: population.toString().length >= 4
? `${(population / 1000).toFixed(1)} thousand`
: `${population}`;

  return result;
};

export default population;
