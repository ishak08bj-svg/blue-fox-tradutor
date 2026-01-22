const text = document.getElementById("text");
const language = document.getElementById("language");
const result = document.getElementById("result");

// قائمة اللغات العالمية
const languages = {
  "ar": "Arabic",
  "en": "English",
  "fr": "French",
  "es": "Spanish",
  "de": "German",
  "zh": "Chinese",
  "ja": "Japanese",
  "ru": "Russian",
  "it": "Italian",
  "hi": "Hindi",
  "pt": "Portuguese",
  "ko": "Korean",
  "tr": "Turkish",
  "vi": "Vietnamese",
  "id": "Indonesian"
};

for(let code in languages){
  language.innerHTML += `<option value="${code}">${languages[code]}</option>`;
}

async function translate(){
  const t = text.value;
  const lang = language.value;
  if(!t) { result.innerHTML = "أدخل الجملة"; return; }
  try{
    const res = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(t)}&langpair=en|${lang}`);
    const data = await res.json();
    result.innerHTML = data.responseData.translatedText;
  } catch(err){
    result.innerHTML = "خطأ في الترجمة";
  }
}
