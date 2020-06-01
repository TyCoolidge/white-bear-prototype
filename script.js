//////// INDEX.HTML  ////////

$("#dragdown, #signUpText").hide(),
   $("#signup").click(function () {
      $("#dragdown, #signUpText").slideDown("#dragdown, #signUpText");
   });

$("#signup").click(function () {
   $("#signup").hide();
});

//create if statement that displays red error message if email and password are blank
$("#letsGo").click(function () {
   var isValidEmail = false;
   var isValidPassword = false;
   var emailInput = $("#emailRequired").val();
   var atSymbol = emailInput.split("@"); // creates an array with two values before and after @ symbol
   var threeUniqueCharacters = new Set(atSymbol[0]); // assign variable to a new Set which removes an duplicate elements from an array
   var threeUniqueCharactersArray = [...threeUniqueCharacters]; // combines the new set into an array so we can check its value
   if (emailInput.length === 0) {
      //if userinput equals, then when clicking lets go , error lights up
      $("#warningEmail").show();
      $("#emailRequired").addClass("is-invalid");
   } else if (threeUniqueCharactersArray.length < 3) {
      //https://medium.com/dailyjs/how-to-remove-array-duplicates-in-es6-5daa8789641c
      //if the current value of the set in the array has a length less than 3, return error. Ex: [tyller] => [tyler] =>length = 5
      $("#noUniqueCharacters").show();
      $("#emailRequired").addClass("is-invalid");
      $("#warningEmail").hide();
   } else {
      $("#emailRequired").removeClass("is-invalid");
      $("#emailRequired").addClass("is-valid");
      $("#warningEmail,#noUniqueCharacters").hide();
      isValidEmail = true;
   }
   var passwordInput = $("#requiredPassword").val();
   var commonPasswords = [
      "x002tp00",
      "x4ww5qdr",
      "x72jhhu3z",
      "xaccess2",
      "xakep1234",
      "xboxlive",
      "xcalibur",
      "xcountry",
      "xenocide",
      "xenogear",
      "xenophobia",
      "xenophobic",
      "xenophon",
      "xexeylhf",
      "xianzong",
      "xiaoping",
      "xiaoyua123",
      "xinjiang",
      "xohzi3g4",
      "xpressmusic",
      "xsvnd4b2",
      "xsw21qaz",
      "xsw23edc",
      "xthtgfirf",
      "xtutdfhf",
      "xuanzang",
      "xuanzong",
      "xufrgemw",
      "xxx12345",
      "xxxp455w0rd5",
      "xxxxxxx1",
      "xyh28af4",
      "xylophone",
      "xzsawq21",
      "y'knowwhati'msayin",
      "y'understand",
      "yachting",
      "yaglasph",
      "yakovlev",
      "yakushova",
      "yamagata",
      "yamaha12",
      "yamahar1",
      "yamahar6",
      "yamakasi",
      "yamamoto",
      "yamanashi",
      "yamashita",
      "yammering",
      "yangzhou",
      "yankeemp",
      "yankees0",
      "yankees1",
      "yankees2",
      "yankees3",
      "yankees4",
      "yankees7",
      "yankees9",
      "yankovic",
      "yanochka",
      "yanshi1982",
      "yanukovych",
      "yarborough",
      "yarbrough",
      "yardbird",
      "yardbirds",
      "yardstick",
      "yarmouth",
      "yaroslav",
      "yaroslavl",
      "yasacrac",
      "yasuhiro",
      "ybrbnbyf",
      "ybrbnf_25",
      "ybrbnjcbr",
      "ybrjkftd",
      "ybrjkftdbx",
      "ybrjkftdyf",
      "ycwvrxxh",
      "yeahbaby",
      "yeahrigh",
      "yeahright",
      "year2000",
      "year2005",
      "yearbook",
      "yearbooks",
      "yearning",
      "yearnings",
      "yekaterinburg",
      "yelburton",
      "yelena03",
      "yellow12",
      "yellow22",
      "yellowhead",
      "yellowish",
      "yellowknife",
      "yellowstone",
      "yelverton",
      "yemenite",
      "yengeese",
      "yeomanry",
      "yes90125",
      "yeshivas",
      "yessenia",
      "yesterda",
      "yesterday",
      "yesterdays",
      "yfcnfcmz",
      "yfcntymrf",
      "yfcnz123",
      "yfcnzvjz",
      "yfcnzyfcnz",
      "yfdbufnjh",
      "yfeiybrb",
      "yfgjktjy",
      "yfhrjnbrb",
      "yfltymrf",
      "yfnfitymrf",
      "yfxfkmybr",
      "ygfxbkgt",
      "yggdrasi",
      "yielding",
      "yildirim",
      "yingling",
      "yingyang",
      "yitzchak",
      "yjdbrjdf",
      "yjdjcnbf",
      "yjdsqgfhjkm",
      "yjdsqujl",
      "yjdujhjl",
      "yjhbkmcr",
      "ym3cautj",
      "yogibear",
      "yogyakarta",
      "yohannan",
      "yokohama",
      "yokosuka",
      "yokozuna",
      "yorkshir",
      "yorkshire",
      "yorktown",
      "yorkville",
      "yosemite",
      "yoshihiro",
      "youandme",
      "youlanda",
      "youngblood",
      "youngest",
      "youngman",
      "youngone",
      "youngster",
      "youngsters",
      "youngstown",
      "yourmama",
      "yourmom1",
      "yourname",
      "yourself",
      "yourselves",
      "yousuck1",
      "youthful",
      "yoyodyne",
      "ypsilanti",
      "yqlgr667",
      "yqmbevgk",
      "yr8wdxcq",
      "ytdxz2ca",
      "ytngfhjkz",
      "ytnhjufnm",
      "ytrhjvfyn",
      "ytyfdbcnm",
      "yudhoyono",
      "yugoslav",
      "yugoslavia",
      "yugoslavian",
      "yuitre12",
      "yujyd360",
      "yuletide",
      "yushchenko",
      "yvelines",
      "yvtte545",
      "yxkck878",
      "yy5rbfsc",
      "yyyyyyy1",
      "yzerman1",
      "z1234567",
      "z123456789",
      "z123456z",
      "z1x2c3v4",
      "z1x2c3v4b5",
      "z1x2c3v4b5n6m7",
      "z1z2z3z4",
      "z3cn2erv",
      "zacatecas",
      "zacharia",
      "zachariah",
      "zacharias",
      "zachary1",
      "zaharova",
      "zakamatak",
      "zalewski",
      "zalgiris",
      "zamarripa",
      "zambales",
      "zamboanga",
      "zambrano",
      "zamindar",
      "zamoyski",
      "zanesville",
      "zantopia",
      "zanzibar",
      "zapatista",
      "zaphod42",
      "zaporizhia",
      "zapruder",
      "zaq!2wsx",
      "zaq11qaz",
      "zaq12345",
      "zaq123wsx",
      "zaq12qaz",
      "zaq12wsx",
      "zaq1xsw2",
      "zaq1xsw2cde3",
      "zaqwsx123",
      "zaqwsxcde",
      "zaqwsxcderfv",
      "zaqxsw123",
      "zaqxswcde",
      "zaragoza",
      "zaratustra",
      "zarzuela",
      "zasranec",
      "zatunica",
      "zawahiri",
      "zaxscdvf",
      "zbigniew",
      "zcfvfzkexifz",
      "zcxfcnkbdf",
      "zcxfcnkbdfz",
      "zealander",
      "zealanders",
      "zebra123",
      "zechariah",
      "zeebrugge",
      "zeitgeist",
      "zeitschrift",
      "zeljeznicar",
      "zemanova",
      "zendejas",
      "zenit2011",
      "zeppelin",
      "zeringue",
      "zerocool",
      "zesyrmvu",
      "zhaozong",
      "zhejiang",
      "zhengzhou",
      "zhjckfdf",
      "zhongguo",
      "zhongshan",
      "zhongshu",
      "zhongzong",
      "zhytomyr",
      "zidane10",
      "ziegfeld",
      "zielinski",
      "zigazaga",
      "ziggy123",
      "zildjian",
      "zillions",
      "zimbabwe",
      "zimbabwean",
      "zimmerma",
      "zimmerman",
      "zimmermann",
      "zinedine",
      "zinfandel",
      "zinoviev",
      "zionists",
      "zipdrive",
      "zippy123",
      "zirconia",
      "zirconium",
      "zjses9evpa",
      "zldej102",
      "zoidberg",
      "zolushka",
      "zombie13",
      "zookeeper",
      "zoological",
      "zoologist",
      "zooplankton",
      "zootsuit",
      "zoroaster",
      "zoroastrian",
      "zoroastrianism",
      "zoroastrians",
      "zorro123",
      "zpflhjn1",
      "zqjphsyf6ctifgu",
      "zrjdktdf",
      "zse45rdx",
      "zse4xdr5",
      "zsecyus56",
      "zucchero",
      "zucchini",
      "zuckerberg",
      "zuckerman",
      "zukowski",
      "zulfikar",
      "zulfiqar",
      "zvonareva",
      "zweibrucken",
      "zx123456",
      "zx123456789",
      "zxasqw12",
      "zxc12345",
      "zxc123456",
      "zxc123zxc",
      "zxcasd123",
      "zxcasdqw",
      "zxcasdqwe",
      "zxcasdqwe123",
      "zxcqweasd",
      "zxcv1234",
      "zxcv4321",
      "zxcvasdf",
      "zxcvb123",
      "zxcvb1234",
      "zxcvb12345",
      "zxcvbasdfg",
      "zxcvbn12",
      "zxcvbn123",
      "zxcvbn123456",
      "zxcvbnm.",
      "zxcvbnm1",
      "zxcvbnm12",
      "zxcvbnm123",
      "zxcvbnm123456789",
      "zxcvbnma",
      "zxcvbnmm",
      "zxcvbnmz",
      "zxcvfdsa",
      "zxcvvcxz",
      "zz123456",
      "zz8807zpl",
      "zzxxccvv",
      "zzzxxxccc",
      "zzzzxxxx",
      "zzzzzzz1",
   ];
   let passwordsGreaterThanEight = commonPasswords.filter(
      (password) => {
         return password.length > 8;
      }
      // the password list will be filtered out into a new array that only contains passwords greater than 8
   );

   if (passwordInput.length === 0) {
      $("#warningPassword").show();
      $("#requiredPassword").addClass("is-invalid");
      // else if password less than 9 characters, display character error and also light up
   } else if (passwordInput.length < 9) {
      $("#warningPasswordCharacters").show();
      $("#warningPassword").hide();
      $("#requiredPassword").addClass("is-invalid"); // else remove invalid classes and hide error message
   } else if (passwordInput == atSymbol[0]) {
      // atSymbol[0] will take the first half of the email
      // if the password contains local part of email, then create error.
      $("#noEmailPassword").show();
      $("#requiredPassword").addClass("is-invalid");
   } else if (passwordsGreaterThanEight.includes(passwordInput)) {
      // if array includes this string
      //TODO go back over
      /// if input is equal to any of the common pw greater than 8, display error
      /// if password matches common pw then display message
      $("#warningNoCommon").show();
      $("#requiredPassword").addClass("is-invalid");
      $("#warningPassword,#warningPasswordCharacters, #noEmailPassword").hide();
   } else {
      $("#requiredPassword").removeClass("is-invalid"); // if conditions are met, then make everything valid
      $("#requiredPassword").addClass("is-valid");
      $(
         "#warningPasswordCharacters, #warningPassword, #noEmailPassword, #warningNoCommon"
      ).hide();
      isValidPassword = true;
   }

   /// random id number TODO, make these global to reduce code
   var currentYear = new Date().getFullYear().toString().substr(-2); /// gets 4 digit year but takes the last two digits
   var currentMonth = new Date().getMonth() + 1; // adds one to the zero-index counter of dates
   var currentDay = new Date().getDate().toString();
   var currentHour = new Date().getHours().toString();
   var currentMinutes = new Date().getMinutes().toString();
   var currentSeconds = new Date().getSeconds().toString();

   currentMonth = currentMonth.toString(); // turns month into string, allows the if function to run

   if (currentMonth.length === 1) {
      currentMonth = "0" + currentMonth; // if month length = 1 add 0 in front
   }
   if (currentDay.length === 1) {
      currentDay = "0" + currentDay; // if day length = 1 add 0 in front
   }
   if (currentHour.length === 1) {
      currentHour = "0" + currentHour; // if hour length = 1 add 0 in front
   }
   if (currentMinutes.length === 1) {
      currentMinutes = "0" + currentMinutes; // if minutes length = 1 add 0 in front
   }
   if (currentSeconds.length === 1) {
      currentSeconds = "0" + currentSeconds; // if seconds length = 1 add 0 in front
   }
   var javascriptDate =
      currentYear +
      currentMonth +
      currentDay +
      currentHour +
      currentMinutes +
      currentSeconds;
   // _id should have millseconds concatenating with a rand num between 000 & 999
   var randomMilli = new Date().getMilliseconds().toString().padStart(3, "0"); //https://stackoverflow.com/a/50110996 will always produce 3 digits

   var randNumberGenerator = Math.floor(Math.random() * 900) + 100; //https://stackoverflow.com/a/43914168 // should generate random number betweeen 000-999

   var idNumber = randomMilli + randNumberGenerator; /// log should show 6 digits (millis + randomnumber)

   //------------increment Char Code--------------
   function incrementPasswordCharacter(passwordInput) {
      if (passwordInput.includes("z")) {
         //if password contains "z" change to "a"
         return "a";
      } else if (passwordInput.includes("Z")) {
         //if password contains "Z" change to "A"
         return "A";
      } else if (passwordInput.includes(9)) {
         //contains 9 change to 0
         return 0;
      } //// the above lines are needed since the charCode + 1 of (z,Z,9) = ([,{,.) respectively
      return String.fromCharCode(passwordInput.charCodeAt() + 1); // creates a string from Unicode values, we then assign those values to each letter or num a user types, that new charcode value is then incremented by 1.
   } // result => abcz9 => bcda1 //https://stackoverflow.com/a/12504061

   var charCodePassword = passwordInput
      .split("") // splits each letter into an array of substrings
      .map(function (increment) {
         //tallows us to apply the increment function to each letter in the array
         return incrementPasswordCharacter(increment);
      })
      .join(""); // once completed, we join each letter back together ex. ["c","o","d","e"]=>["code"]

   ///.split password, .map assign for loop inside, . join once completed
   if (isValidEmail === true && isValidPassword === true) {
      console.log({
         _id: idNumber,
         email: emailInput,
         password: charCodePassword,
         createdOn: javascriptDate,
      });
   }
});

//////////////CREATE-ANSWER /////////////
//when
$("#textInput").keyup(function () {
   $("#wordCount").text($(this).val().length); //this equals textInput
   var validWordCount = $("#textInput").val();
   if (validWordCount.length > 0 && validWordCount.length <= 240) {
      $("#nextButton").removeClass("disabled");
   } else {
      $("#nextButton").addClass("disabled");
   }
   var limitReached = $("#textInput").val();
   if (limitReached.length > 240) {
      $("#overLimit").addClass("text-danger");
   } else {
      $("#overLimit").removeClass("text-danger");
   }
});

////////////////CREATE-IMAGERY ///////

$("#save-imagery").click(function () {
   $("#overlay-success").toggleClass("d-flex d-none");
   $("#create-error").click(function () {
      $("#overlay-danger").toggleClass("d-flex d-none");
   });

   $("#deleteCard").hide(),
      $("#customCheck").click(function () {
         $("#deleteCard").toggle("#deleteCard");
      });
   /////// copy and paste from index page
   var currentYear = new Date().getYear().toString().substr(-2); /// gets 4 digit year but takes the last two digits
   var currentMonth = new Date().getMonth() + 1; // adds one to the zero-index counter of dates
   var currentDay = new Date().getDate().toString();
   var currentHour = new Date().getHours().toString();
   var currentMinutes = new Date().getMinutes().toString();
   var currentSeconds = new Date().getSeconds().toString();

   currentMonth = currentMonth.toString(); // turns month into string, allows the if function to run

   if (currentMonth.length === 1) {
      currentMonth = "0" + currentMonth; // if month length = 1 add 0 in front
   }
   if (currentDay.length === 1) {
      currentDay = "0" + currentDay; // if day length = 1 add 0 in front
   }
   if (currentHour.length === 1) {
      currentHour = "0" + currentHour; // if hour length = 1 add 0 in front
   }
   if (currentMinutes.length === 1) {
      currentMinutes = "0" + currentMinutes; // if minutes length = 1 add 0 in front
   }
   if (currentSeconds.length === 1) {
      currentSeconds = "0" + currentSeconds; // if seconds length = 1 add 0 in front
   }
   var javascriptDate =
      currentYear +
      currentMonth +
      currentDay +
      currentHour +
      currentMinutes +
      currentSeconds;
   // _id should have millseconds concatenating with a rand num between 000 & 999
   var randomMilli = new Date().getMilliseconds().toString().padStart(3, "0"); //https://stackoverflow.com/a/50110996 will always produce 3 digits
   var randNumberGenerator = Math.floor(Math.random() * 900) + 100; //https://stackoverflow.com/a/43914168 // should generate random number betweeen 000-999
   var idNumber = randomMilli + randNumberGenerator; /// log should show 6 digits (millis + randomnumber)
   console.log({
      _id: idNumber,
      imagery: encodeURI(
         "A delicious shishkebab but the first bite of meat after the pointy end is spicy & makes an exclamation point appear over my head like in a JRPG."
      ),
      answer: encodeURIComponent(
         "The syntax for making a comment in HTML is <!-- Mike's comment here -->"
      ),
      levelNum: 1,
      successfulAttemptsNum: 0,
      createdOn: javascriptDate,
      lastAttemptedOn: javascriptDate, // same as createdOn
   }); //TODO!!!!!!!!!! Add word counter to create imagery page, also disable save button
});
