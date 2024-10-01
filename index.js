const readline = require('readline');

//   interfejsu do odczytu i zapisu
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Functiono do  obliczeń
function kalkulujjj (liczba1, operator, liczba2) {
  switch (operator) {
    case '+':
      return liczba1 + liczba2;
    case '-':
      return liczba1 - liczba2;
    case '*':
      return liczba1 * liczba2;
    case '/':
      return liczba1 / liczba2;
    default:
      return ' A byla taka opcja ???';
  }
};

// dane ode mnie
const dzialanie = () => {
  rl.question('Podaj pierwszą liczbę: ', (pierwsza) => {
    rl.question('Podaj operator (+ lub - lub * lub /): ', (operator) => {
      rl.question('Podaj drugą liczbę: ', (druga) => {
        const liczba1 = parseFloat(pierwsza);
        const liczba2 = parseFloat(druga);

        if (isNaN(liczba1) || isNaN(liczba2)) {
          console.log('Wprowadź poprawne liczby.');
        } else {
          const wynik = kalkulujjj(liczba1, operator, liczba2);
          console.log(`Wynik: ${wynik}`);
        }

        rl.close();
      });
    });
  });
};


dzialanie();
