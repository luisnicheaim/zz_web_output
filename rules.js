class Lab {
    constructor(result, disease, issuedAt, test) {
      this.test = test;
      this.result = result;
      this.disease = disease;
      this.issuedAt = issuedAt;
    }
  }
  const RESULT_POSSITIVE = "possitive";
  const RESULT_NEGATIVE = "negative";
  const NON_CONCLUSSIVE = "non_conclussive";
  
  class Disease {
    constructor(name, id) {
      this.name = name;
      this.id = id;
    }
  }
  class Test {
    constructor(name) {
      this.name = name;
    }
  }
  class Vaccine {
    constructor(manufacturer) {
      this.manufacturer = manufacturer;
    }
  }
  const dose = (number) => {
    return {
      type: "dose",
      number: number
    };
  };
  const booster = (number) => {
    return {
      type: "reinforcement",
      number: number
    };
  };
  
  class Immunization {
    constructor(vaccine, disease, lot, kind, vaccinatedAt, healthCareFacility) {
      this.vaccine = vaccine;
      this.disease = disease;
      this.lot = lot;
      this.kind = kind;
      this.vaccinatedAt = vaccinatedAt;
      this.healthCareFacility = healthCareFacility;
    }
  }
  class Identification {
    constructor(type, expirationDate, idNumber) {
      this.type = type;
      this.expirationDate = expirationDate;
      this.idNumber = idNumber;
    }
  }
  const idTypeDriversLicence = "drivers_license";
  const idTypePassport = "passport";
  const idTypeOther = "other";
  const idTypePassportCard = "passport_card";
  const idTypeSentriGlobal = "sentri_global";
  const idTypeTwic = "twic";
  class Person {
    constructor(birthDate, identifications, labs, immunizations) {
      this.birthDate = birthDate;
      this.identifications = identifications;
      this.labs = labs;
      this.immunizations = immunizations;
    }
  }
  
  function execute(code){
    eval(code);
  }