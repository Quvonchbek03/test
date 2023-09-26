for (let i = 0; i < Savollar.length; i++) {
  togrijavoblar++;
  const userJavobi = prompt(
    Savollar[i].savol + "\n Variant: " + Savollar[i].variant.join("\n")
  );
  //    return userJavobi;
  if (userJavobi === javobi) {
    for (let i = 0; i < 5; i++) {
      togrijavoblar += i;
    }
    console.log(togrijavoblar);
  } else {
    return "";
  }
}
