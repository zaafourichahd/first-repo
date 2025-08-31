// Choisir un nombre aléatoire entre 1 et 100

let secretNumber = 21;
let score = 0;
function jouer() {
  alert("hetli trah r9am entre 1 et 100 ");
}

function checkGuess() {
  const guess = Number(document.getElementById('guessInput').value);
  const feedback = document.getElementById('feedback');
  if (!guess || guess < 1 || guess > 100) {
    feedback.textContent = "";
    return;
  }
  if (guess === secretNumber) {
    feedback.textContent = "opopop sahyyt mon héros😘ayja twa habibi aandi chnia n9olk shyh hedhy haja saghrouna lo3ba khamamtlek fiha aandi baarcha w aamaltlek fiha effort mezyan chnkhaliha surprise tahfouna w récompense lik aala lotla lbnina hedhy w rbehetli fiha w khalitni n9olk sahyt ye ghoul kima fi kol haja khaliteha aalik w aamalet aalik chtaamelha perfectly w teghlebha w tfarahni bik w tenjahli fiha rak u did it habibi baaarcha marrat chnw chnahki w chnw chnkhali nbdew mn ketfek li yetkhlaalek martyn smella aala habibi w lmrra lwla rahy mehiech sehla jemla enek tarjaa taady wkteha devoiratek w enty ghayeb akther mn jem3tyn thamalet lwjiaa thamalet lklak thamalet kol ehses khayeb enek theb taamel haja whdek w tnjmch khtr aandek isaba w lezem tharakech ketfek bkhlef taab lkraya baad w stress w nokes noum w skhana zeda khtr naarfek tehmlhech w tfikli bekry tahfedh w takra w taamel fi effort kessah u did it habibi w jebtli mouaadel mezyaaaaaaan kifek w farrahtni rak wallah akther w akwa ferha ena hasiteha kif 9otli wkteha w khaliteha tetaadelna otla akkal haja njm n9oulha aaliha perfect w special w kol haja fiha khaletni nzid nmout fik akther w naaref kadeh rajli beast fmech kifou rjaat ttreneli keesssssah kima ena naaref rajli khdhitli lcode w khalitni nzid nfrah akther w akther aatitni inik w twalhit bia akther w azyen meli ena nheb khalitni nra lversion lbnina w li waadtni chnchbaa biha fl otla w ahna nkraw netdhkrek rw kifeh t9oli rak chtkhalihelna otla nensewhech jemla w tkhalini nchbaa bik kadd ma nheb nsayeb dlel w nemrej w nkchber w tradhini w tkhalini dima aandek w fi wst kalbek methania w ferhana w merteha w"
    score += 10;
    document.getElementById('score').textContent = score;
    secretNumber = 21; // رقم جديد للعب مرة أخرى
  } else if (guess > secretNumber) {
    feedback.textContent = "nakes chwaya aayech habibi";
  } else {
    feedback.textContent = "zyd chwaya aayech habibi"
  }
  
  document.getElementById('guessInput').value = '';
}

  
