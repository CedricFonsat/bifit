export function getIMC(params: { size: number; weight: number }) {
  let SIZE = (params.size / 100) * (params.size / 100);
  let IMC = params.weight / SIZE;
  return IMC;
}

export function getIMG(params: { imc: number; sex: number; age: number }) {
  let IMG = 1.5 * params.imc + 0.7 * params.age - (3.6 * params.sex + 1.4);
  return IMG;
}

export function getBMR(params: {
  weight: number;
  size: number;
  gender: string;
  age: number;
}) {
  let manBMR = 10 * params.weight + 6.25 * params.size - 5 * params.age + 5;
  let womanBMR = 10 * params.weight + 6.25 * params.size - 5 * params.age - 161;
  if (params.gender == "woman") return womanBMR;
  if (params.gender == "man") return manBMR;
}

export function getCalorieExpenditurePerDay(params: {
  bmr: number;
  kcalPerDay: number;
}) {
  let CEPerDay = params.bmr - params.kcalPerDay;
}

export function getCategoryIMC(params: { imc: number }) {
  switch (true) {
    case params.imc < 18.5:
      return "Insuffisance pondérale";
      break;

    case params.imc >= 18.5 && params.imc < 25:
      return "Corpulence normale";
      break;

    case params.imc >= 25 && params.imc < 30:
      return "Surpoids";
      break;

    case params.imc >= 30 && params.imc < 35:
      return "Obésité modérée";
      break;

    case params.imc >= 35 && params.imc < 40:
      return "Obésité sévère";
      break;

    case params.imc >= 40:
      return "Obésité morbide";
      break;

    default:
        return "Vous n'ete pas humain";
      break;
  }
}
