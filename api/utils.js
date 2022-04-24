const { firstNameMale, firstNameFemale, lastName } = require('./db/names');


const reply = (res, body, status = 200) => res.status(status).json(body)


const randomInteger = (min, max) => Number((min + Math.random() * (max - min)).toFixed(2))
const shuffleArry = (arr) => [...arr].sort(() => Math.round(Math.random()) - 0.5)
const randomDate = (start = new Date(2018, 0, 1), end = new Date()) => new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
const randomBoolean = (trueProbability = 0.5) => Math.random() < trueProbability //0.9 === 90% probability of true
const randomName = () => {
  const male = randomBoolean();
  const firstName = male ? firstNameMale[Math.round(randomInteger(0, 99))] : firstNameFemale[Math.round(randomInteger(0, 99))];
  const withLast = randomBoolean();
  const last = withLast ? lastName[Math.round(randomInteger(0, 99))] : '';
  const name = firstName + ' ' + last + (!withLast || male ? '': 'a');
  return name;
}

const translit = (word) => {
	const converter = {
		'а': 'a',    'б': 'b',    'в': 'v',    'г': 'g',    'д': 'd',
		'е': 'e',    'ё': 'e',    'ж': 'zh',   'з': 'z',    'и': 'i',
		'й': 'y',    'к': 'k',    'л': 'l',    'м': 'm',    'н': 'n',
		'о': 'o',    'п': 'p',    'р': 'r',    'с': 's',    'т': 't',
		'у': 'u',    'ф': 'f',    'х': 'h',    'ц': 'c',    'ч': 'ch',
		'ш': 'sh',   'щ': 'sch',  'ь': '',     'ы': 'y',    'ъ': '',
		'э': 'e',    'ю': 'yu',   'я': 'ya'
	}
 
	word = word.toLowerCase();
  
	let answer = '';
	for (let i = 0; i < word.length; ++i ) {
		if (converter[word[i]] == undefined){
			answer += word[i];
		} else {
			answer += converter[word[i]];
		}
	}

	answer = answer.replace(/[^-0-9a-z]/g, '-');
	answer = answer.replace(/[-]+/g, '-');
	answer = answer.replace(/^\-|-$/g, '');
	return answer;
}

module.exports = {
  reply,
  randomInteger,
  shuffleArry,
  randomDate,
  randomBoolean,
  randomName,
  translit,
}