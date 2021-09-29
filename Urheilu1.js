class Henkilo {
  constructor(etunimi, sukunimi, kutsumanimi, syntymavuosi) {
    this.etunimi = etunimi;
    this.sukunimi = sukunimi;
    this.kutsumanimi = kutsumanimi;
    this.syntymavuosi = syntymavuosi;
  }
  present() {
    return this.etunimi, this.sukunimi, this.kutsumanimi, this.syntymavuosi;
  }
}

class Urheilija extends Henkilo {
  constructor(
    etunimi,
    sukunimi,
    kutsumanimi,
    syntymavuosi,
    linkki_kuvaan,
    omapaino,
    laji,
    saavutukset
  ) {
    super(etunimi, sukunimi, kutsumanimi, syntymavuosi);
    this.linkki_kuvaan1 = linkki_kuvaan;
    this.omapaino1 = omapaino;
    this.laji1 = laji;
    this.saavutukset1 = saavutukset;
  }
  get Urrheilija() {
    return this.linkki_kuvaan1, this.omapaino1, this.laji1, this.saavutukset1;
  }
  set Urrheilija(x) {
    this.linkki_kuvaan1 = x;
  }

  set Urrheilija(y) {
    this.omapaino1 = y;
  }
  set Urrheilija(v) {
    this.laji1 = v;
  }
  set Urrheilija(n) {
    this.saavutukset = n;
  }

  show() {
    return (
      this.present() + this.linkki_kuvaan1,
      this.omapaino1,
      this.laji1,
      this.saavutukset1
    );
  }
}

let Tietoja = new Urheilija(
  "Pekka",
  "Mustonen",
  "Pekka",
  1970,
  "linkki",
  80,
  "sulkapallo",
  "maailmanmestaruus"
);

let Tietoja1 = new Urheilija(
  "Sini",
  "Mustonen",
  "Sini",
  1971,
  "linkki",
  60,
  "koripallo",
  "suomenmestaruus"
);

console.log(Tietoja);
console.log(Tietoja1);
