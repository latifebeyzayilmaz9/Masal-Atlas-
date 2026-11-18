  // Sayfamızdaki ana bölümler
  const kapak = document.querySelector(".kapak");
  const dizin = document.getElementById("masallar");
  const okuma = document.getElementById("okuma-ekrani");

  // 12 masalımızın bilgileri
  const masallar = [
    "Hüsnü Yusuf",
    "Öksüz Kız",
    "Zümrüdüanka Kuşu",
    "Keloğlan ile Padişahın Kızı",
    "Dört Öğüt",
    "İnatçı Horoz",
    "Kurnaz Kurt",
    "Gökten Düşen Üç Elma",
    "Limon Kız",
    "Kabak Gelin",
    "Altın Saçlı Kız",
    "Keloğlan Hiç Alıyor"
  ];

  // Sayfadaki bütün masal kartlarını seçiyoruz
  const kartlar = document.querySelectorAll(".masal-kart");

  // Her karta tıklama özelliği ekliyoruz
  
let aktifMasal = 0;

const husnuYusufMetni = `
<p>Bir varmış, bir yokmuş... Evvel zaman içinde, bir padişahın dünyalar güzeli bir kızı varmış. Genç kız, sarayın bahçesinden geçen derenin kıyısında oturup serinlemeyi çok severmiş.</p>

<p>Bir gün yine derenin kenarına gitmiş. Kolundaki bileziği çıkarıp bir taşın üzerine bırakmış ve ellerini yıkamaya başlamış. Tam o sırada gökyüzünden kırk bir beyaz güvercin süzülerek çimenlere konmuş. Güvercinler kanatlarını çırpıp silkelenince kırkı güzel birer genç kıza, biri ise yakışıklı bir delikanlıya dönüşmüş.</p>

<p>Padişahın kızı gördüklerine hayran kalmış. Fakat bileziğini almak için yerinden doğrulduğunda delikanlı yeniden güvercin olmuş, taşın üzerindeki bileziği boynuna geçirerek uçup gitmiş. Diğer kırk güvercin de onun peşinden gökyüzüne yükselmiş.</p>

<p>O günden sonra genç kız her gün dere kıyısında güvercinleri beklemiş. Ne var ki hiçbiri geri dönmemiş. Gördüğü delikanlıya âşık olan kız, özleminden hastalanmış. Babası ülkenin en iyi hekimlerini getirtmiş ama hiçbiri kızının derdine çare bulamamış.</p>

<p>Sonunda padişah kızına özel bir hamam yaptırmış. Buraya gelen herkes, yıkanmadan önce başından geçen ilginç bir olayı anlatırmış. Günlerden bir gün hamama gelen genç bir gelin, herkesi şaşırtan bir hikâye anlatmaya başlamış.</p>

<p>Gelin, bir gün dere kenarında çamaşır yıkarken odununun bittiğini söylemiş. O sırada yanından geçen otuz katır yükü odunun peşine takılmış. Katırlar kayalıkların arasındaki gizli bir kapıya ulaşmış. Kapı açılınca gelin de onlarla birlikte içeri girmiş.</p>

<p>İçeride merdivenleri çıkarak büyük bir mutfağa ulaşmış. Tencerelerde nefis yemekler pişiyormuş. Birinin kapağını kaldırdığı anda görünmeyen bir ses, yemeklerin peri padişahının oğluna ait olduğunu söyleyerek onu uyarmış.</p>

<p>Gelin mutfaktan ayrılıp başka bir odaya geçtiğinde kırk bir beyaz güvercin görmüş. Güvercinler bir anda kırk genç kıza ve yakışıklı bir delikanlıya dönüşmüş. Delikanlı elindeki kamçıyı yere vurunca odanın her yanı titremeye başlamış.</p>

<p>Delikanlı, sevgilisinin de tıpkı oda gibi özlemle titreyip inlemesini dilemiş. Gelin ertesi gün katırlarla birlikte gizli yerden ayrılarak evine dönmüş.</p>

<p>Bu hikâyeyi duyan padişahın kızı, aradığı delikanlının orada olduğunu anlamış. Geline, kendisini o yere götürmesi karşılığında bütün hamamı vereceğini söylemiş.</p>

<p>Ertesi gün genç kız katırların peşine düşerek gizli kapıdan içeri girmiş. Karnını doyurduktan sonra büyük odadaki dolaplardan birine saklanmış ve güvercinlerin gelmesini beklemiş.</p>

<p>Bir süre sonra kırk bir güvercin odaya doluşmuş. Kırkı genç kıza, biri de delikanlıya dönüşmüş. Padişahın kızı onun, dere kenarında görüp âşık olduğu kişi olduğunu hemen anlamış.</p>

<p>Delikanlı yine kamçısını yere vurmuş. Odanın her yanı titremiş ama genç kızın saklandığı dolap hiç kıpırdamamış.</p>

<p>Delikanlı şaşkınlıkla dolaba neden inlemediğini sormuş. Bunun üzerine dolap dile gelmiş:</p>

<p>“Ey Hüsnü Yusuf! İçinde sevdiğin kız saklanıyor. Bu yüzden inlemiyorum.”</p>

<p>Hüsnü Yusuf dolabın kapağını açınca karşısında sevgilisini görmüş. İki genç birbirlerine kavuşmanın mutluluğunu yaşamışlar.</p>

<p>Günler geçmiş. Genç kız bir bebek beklediğini Hüsnü Yusuf'a müjdelemiş. Fakat Hüsnü Yusuf endişelenmiş. Çünkü kırk peri, kızın orada yaşadığını öğrenirse ona zarar verebilirmiş.</p>

<p>Bu yüzden sevgilisini babası olan peri padişahının sarayına götürmeye karar vermiş. Kıza, sarayın kapısında Hüsnü Yusuf'un adını söyleyerek içeri alınmayı istemesini öğütlemiş. Ardından onu kanatlarına bindirip sarayın önüne bırakmış.</p>

<p>Genç kız o gece bir erkek çocuk dünyaya getirmiş. Hüsnü Yusuf ise verdiği sözü tutarak onları gizlice ziyaret etmeye başlamış.</p>

<p>Bir gece hizmetçiler, Hüsnü Yusuf ile genç kızın konuştuğunu görüp padişaha haber vermişler. Padişah kızı huzuruna çağırmış. Genç kız da başından geçenleri hiçbir şeyi saklamadan anlatmış.</p>

<p>Ertesi gece Hüsnü Yusuf saraya geldiğinde yakalanmış. Serbest bırakılmayı istemiş ve perilerin tehlikeli olabileceği konusunda herkesi uyarmış. Ancak padişah onu bırakmamış.</p>

<p>Padişah bir beyaz güvercin getirtmiş ve sarayın büyük fırınlarından birini yaktırmış. Çok geçmeden kırk peri çıkagelmiş. Hüsnü Yusuf'u geri istemiş, padişaha saldırarak onu korkutmaya çalışmışlar.</p>

<p>Bunun üzerine padişah elindeki beyaz güvercini havaya kaldırmış. Hüsnü Yusuf'tan yıllarca ayrı kaldığını, gerekirse yine ayrı kalabileceğini ama onu perilere teslim etmeyeceğini söylemiş.</p>

<p>Ardından güvercini yanan fırına atmış. Güvercinin Hüsnü Yusuf olduğunu sanan kırk peri, onu kurtarmak için peşinden fırına dalmış. Böylece hepsi kendi tuzaklarına düşmüş.</p>

<p>Hüsnü Yusuf ile sevdiği kız artık perilerin korkusu olmadan yaşayabilecekmiş. İki genç için büyük bir düğün düzenlenmiş. Günlerce eğlenilmiş, sofralar kurulmuş.</p>

<p>Onlar ermiş muradına, biz çıkalım kerevetine. Gökten üç elma düşmüş; biri bu masalı anlatanın, biri dinleyenin, biri de sevginin gücüne inananların başına...</p>
`;

const oksuzKizMetni = `
    <p>Bir varmış, bir yokmuş… Vaktiyle bir anne, bir baba ve küçük kızları yaşarmış. Günlerden bir gün anne hayata gözlerini yummuş. Baba yeniden evlenince küçük kızın hayatına bir üvey anne girmiş.</p>

    <p>Üvey anne, öksüz kızı her gün hayvanları otlatmaya gönderir, yanına da yalnızca bir dilim arpa ekmeği verirmiş. Kız bu sert ekmeği yiyemez, açlıktan ve üzüntüden ağlarmış.</p>

    <p>Bir gün otlattığı inek dile gelmiş:</p>

    <p>“Ver o ekmeği bana, ben yiyeyim. Sen de kulağıma gir; orada birbirinden güzel yemekler bulacaksın.”</p>

    <p>Kız şaşkınlıkla ineğin söylediğini yapmış. O günden sonra aç kalmamış; gün geçtikçe güzelleşip sağlığına kavuşmuş.</p>

    <p>Üvey anne ise bunu fark edince kıskançlığa kapılmış. Kendi kızını da hayvanları otlatmaya göndermiş ama inek ona yardım etmemiş.</p>

    <p>Bir başka gün üvey anne, öksüz kıza bir tutam pamuk vererek onu incecik ipliğe dönüştürmesini istemiş. Kız yine çaresizlik içinde ağlarken inek yardımına yetişmiş. Pamuğu yutup kulağından incecik iplik olarak çıkarmış. Kız da ipliği sarıp eve götürmüş.</p>

    <p>Bu duruma iyice öfkelenen üvey anne, ineğin sırrını anlamış ve kesilmesini istemiş. Kız çok üzülmüş. İnek ona son bir öğüt vermiş:</p>

    <p>“Kemiklerimi beyaz bir beze sar ve yemliğimin altına sakla. Bir gün sana yine yardımım dokunacak.”</p>

    <p>Kız, ineğin söylediklerini unutmamış.</p>

    <p>Aradan zaman geçmiş. Sarayda büyük bir düğün yapılacağı haberi yayılmış. Üvey anne kendi kızını süsleyip düğüne götürürken öksüz kıza yapılması neredeyse imkânsız işler bırakmış: Bir kazanı gözyaşıyla doldurmasını, birbirine karışmış buğdaylarla mercimekleri ayırmasını istemiş.</p>

    <p>Kız ağlarken yoldan geçen bir tuzcu ona yardım etmiş. Biraz tuz ve suyla kazanı doldurmasını söylemiş. Ardından kapıya gelen yolcular da buğdaylarla mercimekleri ayırmasına yardım etmiş.</p>

    <p>İşlerini bitiren kız, ineğin kemiklerini sakladığı yere gitmiş. Bir de ne görsün! Orada altın işlemeli elbiseler, güzel bir at ve birbirinden değerli süsler duruyormuş.</p>

    <p>Hemen hazırlanıp saraydaki düğüne gitmiş. Onu gören herkes güzelliğine hayran kalmış, bir padişah kızı sanarak en güzel yere oturtmuş.</p>

    <p>Fakat üvey annesiyle kız kardeşi dönmeden eve yetişmek isteyen kız, düğünden erkenden ayrılmış. Aceleyle giderken ayakkabısının teki çeşmeye düşmüş.</p>

    <p>Bir süre sonra padişahın oğlu çeşmede bu ayakkabıyı bulmuş ve şöyle demiş:</p>

    <p>“Bu ayakkabı kimin ayağına tam olursa onunla evleneceğim!”</p>

    <p>Ayakkabı bütün genç kızlara denenmiş. Kiminin ayağına büyük, kimininkine küçük gelmiş. Sonunda öksüz kızın ayağına tam olmuş.</p>

    <p>Üvey anne şaşkınlıktan ne yapacağını bilememiş. Padişahın oğlu ile öksüz kız büyük bir düğünle evlenmişler.</p>

    <p>Onlar ermiş muradına, biz çıkalım kerevetine. Gökten üç elma düşmüş; biri bu masalı anlatanın, biri dinleyenin, biri de iyilikten vazgeçmeyenlerin başına…</p>
`;


const zumruduankaMetni = `
<p>Evvel zaman içinde, kalbur saman içinde... Bir padişahın saray bahçesinde, yılda yalnızca üç elma veren sihirli bir ağaç varmış. Ne var ki elmalar her olgunlaştığında, gece vakti gizemli biri gelip onları çalarmış. Padişah üç oğlunu huzuruna çağırmış ve “Elmaları koruyup hırsızı bulan, tahtımın sahibi olacak,” demiş.</p>

<p>İlk gece büyük şehzade, ikinci gece ortanca şehzade nöbet tutmuş. Ancak ikisi de uyuyakalmış ve iki elma kaybolmuş. Üçüncü gece küçük şehzade nöbete durmuş. Uyumamak için parmağına tuz basmış. Gece yarısı gökten uzanan devasa bir el son elmayı almaya çalışınca kılıcıyla ele vurmuş. Yaralanan dev kaçmış, geride kan izleri bırakmış.</p>

<p>Üç kardeş izleri takip ederek dağların arasında derin bir kuyuya ulaşmış. Büyük ve ortanca kardeş kuyuya inmeyi denemiş ama korkup geri dönmüşler. Küçük şehzade ise “Ne olursa olsun beni yukarı çekmeyin,” diyerek kuyunun dibine kadar inmiş.</p>

<p>Kuyunun altında bambaşka bir dünya uzanıyormuş. Şehzade burada devlerin esir tuttuğu üç padişah kızıyla karşılaşmış. Kızlar ona devlerin gözleri açıkken uyuduklarını, kapalıyken uyanık olduklarını söylemiş. Şehzade devlerle savaşmış ve kızların öğüdünü dinleyerek her birini yalnızca bir kılıç darbesiyle yenmiş.</p>

<p>Şehzade üç kızı kurtarıp kuyunun başına getirmiş. Kızları birer birer yukarı göndermiş. En küçük kız, ayrılmadan önce ona bir yüzük vermiş ve “Başına bir kötülük gelirse bu yüzük bizi yeniden buluşturur,” demiş. Ancak şehzadenin ağabeyleri kıskançlığa kapılmış. Kardeşleri yukarı çıkarken ipi kesmiş ve onu yeraltı dünyasında bırakmışlar.</p>

<p>Yapayalnız kalan şehzade uzun süre yürümüş ve susuzluk çeken bir ülkeye varmış. Ülkenin suyunu korkunç bir ejderha tutuyormuş. Her hafta bir genç kız verilmedikçe suyu serbest bırakmıyormuş. O hafta sıra padişahın kızına gelmiş. Şehzade ejderhayla savaşmış, onu yenmiş ve halkı yeniden suya kavuşturmuş.</p>

<p>Ülkenin padişahı, “Dile benden ne dilersen,” deyince şehzade yalnızca yeryüzüne dönmek istediğini söylemiş. Padişah da ona bunu ancak efsanevi Zümrüdüanka Kuşu'nun başarabileceğini anlatmış.</p>

<p>Şehzade Zümrüdüanka'yı ararken kocaman bir çınar ağacına rastlamış. Ağacın tepesindeki yuvada kuşun yavruları varmış. Büyük bir yılan yuvaya tırmanıyormuş. Şehzade hemen kılıcını çekip yılanı öldürmüş, yavruları kurtarmış. Ardından ağacın dibinde uykuya dalmış.</p>

<p>Zümrüdüanka yuvasına döndüğünde şehzadeyi görüp önce yavrularına zarar verdiğini sanmış. Fakat yavruları, “Anne, bize dokunmadı! Bizi yılandan kurtardı!” diye seslenmişler. Zümrüdüanka şehzadeye minnet duymuş, kanatlarını açıp onu güneşten korumuş.</p>

<p>Şehzade uyanınca Zümrüdüanka, “Dile benden ne dilersen,” demiş. Şehzade yeryüzüne çıkmak istediğini söylemiş. Kuş, “Seni götürürüm ama kırk batman et ve kırk tulum su getirmelisin. Ben 'gak' dedikçe et, 'guk' dedikçe su vereceksin,” diye karşılık vermiş.</p>

<p>Hazırlıklar tamamlanmış. Şehzade Zümrüdüanka'nın sırtına binmiş ve birlikte gökyüzüne yükselmişler. Kuş her seslendiğinde şehzade ona yiyecek ve su vermiş. Ancak yeryüzüne ulaşmalarına çok az kala et tükenmiş. Zümrüdüanka yeniden “Gak!” deyince şehzade hiç düşünmeden kendi baldırından bir parça keserek kuşa uzatmış.</p>

<p>Zümrüdüanka bunun insan eti olduğunu anlamış ve parçayı dilinin altında saklamış. Yeryüzüne vardıklarında şehzadenin topalladığını görünce nedenini sormuş. Gerçeği öğrenince sakladığı parçayı yerine koymuş, kanadıyla sıvazlamış ve şehzadenin yarasını iyileştirmiş.</p>

<p>Ayrılmadan önce şehzadeye üç tüy vermiş. “Ne zaman yardıma ihtiyaç duyarsan birini yak. Hemen yanına gelirim,” demiş.</p>

<p>Şehzade kılık değiştirerek ülkesine dönmüş ve bir kuyumcunun yanında çırak olmuş. O sırada ağabeyleri, kurtardığı padişah kızlarıyla evlenmek istiyormuş. Fakat en küçük kız, üzerinde altın tavuk ve civcivler bulunan bir altın sini yapılmadan evlenmeyeceğini söylemiş.</p>

<p>Kimse bu isteği yerine getiremeyince şehzade Zümrüdüanka'nın tüylerinden birini yakmış. Kuş gelip ona istenen altın siniyi getirmiş. Ardından kız yürüyen bir altın saray istemiş. Şehzade ikinci tüyü yakmış ve bu dilek de gerçekleşmiş.</p>

<p>En küçük kız, bu olağanüstü eserleri yapan kişiyi görmek istemiş. Şehzade saraya geldiğinde kız onu hemen tanımış ve ayrılırken verdiği yüzüğü göstermiş. Şehzade de başından geçenleri padişaha anlatmış.</p>

<p>Gerçeği öğrenen padişah iki büyük oğlunu cezalandırmış ve küçük oğlunu tahtına oturtmuş. Kırk gün kırk gece düğün yapılmış. Şehzade sevdiği kızla evlenmiş; kızın iki ablası da şehzadenin iki yakın dostuyla yuva kurmuş.</p>

<p>Şehzade üçüncü tüyü hiç yakmamış. Onu sarayın en yüksek kulesinde saklamış. Derler ki o tüy hâlâ oradaymış ve geceleri sarayı aydınlatırmış.</p>

<p>Gökten üç elma düşmüş: Biri anlatana, biri dinleyene, biri de sevdikleri uğruna fedakârlık etmekten çekinmeyenlere...</p>
`;

const keloglanMetni = `
<p>Evvel zaman içinde, kalbur saman içinde... Uzak ülkelerin birinde, güzelliği kadar bilgeliğiyle de tanınan bir padişah kızı yaşarmış. Okumadığı kitap, çözemediği bilmece kalmamış. Günlerden bir gün babası onu evlendirmek isteyince genç kız bir şart koymuş: “Bana talip olanlara kırk soru soracağım. Kim hepsini doğru cevaplarsa onunla evleneceğim.”</p>

<p>Padişahın tellalları dört bir yana haber salmış. Saraya şehzadeler, beyler ve bilginler gelmiş. Kimi on soruya, kimi yirmi soruya cevap verebilmiş ama hiçbiri kırk sorunun tamamını bilememiş.</p>

<p>Bu haber, uzak bir köyde anasıyla yaşayan Keloğlan'ın da kulağına gitmiş. Keloğlan, “Ana, ben de gidip şansımı deneyeceğim,” demiş. Anası şaşkınlıkla, “Oğul, koskoca şehzadeler bile bilememiş, sen nasıl bileceksin?” diye sormuş. Keloğlan gülümsemiş: “Bilmezsem öğrenirim ana. Yol da bir okuldur.”</p>

<p>Heybesine bir somun ekmekle biraz peynir koymuş ve yola düşmüş. Az gitmiş, uz gitmiş, dere tepe düz gitmiş. Bir derenin kıyısına vardığında karşıya geçemeyen yaşlı bir adam görmüş. Hiç düşünmeden adamı sırtına alıp karşıya taşımış. Yaşlı adam teşekkür ederek ona şöyle demiş: “Evlat, unutma, her sorunun cevabı biraz da kendi içindedir.”</p>

<p>Keloğlan yoluna devam ederken kervanların geçeceği yerde bir karınca yuvasına rastlamış. Karıncalar ezilmesin diye onları dikkatlice toplayıp güvenli bir yere taşımış. Biraz sonra da oluğu tıkanmış bir çeşme görmüş. Susuz kalan kuşlara acıyıp çeşmenin oluğunu temizlemiş. Kuşlar yeniden su içmeye başlayınca sevinçle ötüşmüşler.</p>

<p>Sonunda saraya varmış. Kapıdaki muhafızlar onu görünce kahkahalarla gülmüş: “Şehzadeler geldi, bilginler geçti; şimdi de bir Keloğlan mı çıkageldi?” Fakat padişahın şartı herkese açık olduğundan onu da içeri almak zorunda kalmışlar.</p>

<p>Padişah kızı perdenin arkasına geçmiş ve sorularını sormaya başlamış. “Dünyanın en hızlı şeyi nedir?” demiş. Keloğlan, “Düşüncedir. Bir anda dünyanın öbür ucuna ulaşır,” diye cevap vermiş.</p>

<p>“En tatlı şey nedir?” diye sormuş kız. “Yorgun insanın uykusudur,” demiş Keloğlan. “Ağzı olmadığı hâlde konuşan nedir?” sorusuna “Kitap”, “Ayakları olmadığı hâlde koşan nedir?” sorusuna ise “Dere” diye karşılık vermiş.</p>

<p>Sorular birbirini kovalamış. Keloğlan her defasında yaşlı adamın öğüdünü hatırlamış, acele etmeden düşünmüş. Birinci soru, onuncu soru, yirminci soru derken otuz dokuzuncu soruya kadar gelmiş. Saraydaki herkes şaşkınlıkla onu izliyormuş.</p>

<p>Sonunda padişah kızı kırkıncı sorusunu sormuş: “Söyle bakalım Keloğlan, şu anda benim aklımdan ne geçiyor?” Saray bir anda sessizliğe bürünmüş. Çünkü genç kızın aklından geçenleri kimse bilemezmiş.</p>

<p>Keloğlan biraz düşünmüş, sonra gülümseyerek cevap vermiş: “Sultanım, aklınızdan bu Keloğlan'ın son soruyu bilemeyeceği geçiyor. Eğer öyleyse cevabım doğrudur. Öyle değilse de benim bilemeyeceğimi düşünmediğiniz ortaya çıkar!”</p>

<p>Padişah kızı perdenin arkasından çıkmış ve gülmeye başlamış. Keloğlan'ın hazırcevaplığına hayran kalmış. Ancak vezir bu evliliği istemiyormuş. “Bir şart daha koymalıyız!” diyerek ortaya atılmış.</p>

<p>Vezir, bir çuval darıyla bir çuval pirinci birbirine karıştırmış. “Bunları sabaha kadar ayırabilirsen sarayda kalabilirsin,” demiş. Keloğlan gece boyunca nasıl yapacağını düşünürken bahçeden binlerce karınca çıkagelmiş. Bunlar, yolda ezilmekten kurtardığı karıncalarmış. Hep birlikte çalışarak darıları ve pirinçleri ayırmışlar.</p>

<p>Sabah olunca vezir gözlerine inanamamış. Yine de vazgeçmemiş: “Öyleyse güneş doğmadan kırk testi suyu saraya getirsin!” demiş. Keloğlan çeşmeye koşmuş. Tam ne yapacağını düşünürken daha önce su içmelerine yardım ettiği kuşlar gelmiş. Kimi gagasıyla, kimi kanadıyla ona yardım etmiş. Kırk testi su zamanında saraya ulaşmış.</p>

<p>Artık padişah da kızının kararına karşı çıkmamış. “Yol boyunca karşılık beklemeden iyilik yapan biri, kızıma da iyi davranır,” demiş. Böylece Keloğlan ile padişah kızının düğün hazırlıkları başlamış.</p>

<p>Kırk gün kırk gece düğün yapılmış. Keloğlan sevgili anasını da saraya getirmiş. Anası her sabah sarayın penceresinden uzaklardaki köylerine bakar, “Benim oğlum bilmezsem öğrenirim demişti, öğrendi de!” diyerek gülümsermiş.</p>

<p>Onlar ermiş muradına, biz çıkalım kerevetine. Gökten üç elma düşmüş: Biri aklını kullananlara, biri iyilik yapanlara, biri de bu masalı dinleyenlere...</p>
`;


const dortOgutMetni = `
<p>Bir varmış, bir yokmuş... Evvel zaman içinde, uzak bir köyde yoksul bir adam yaşarmış. Bir gün evlenmiş ama ailesini geçindirecek kadar parası olmadığı için çalışmak üzere gurbete gitmeye karar vermiş. Güney illerinden birinde zengin bir ağanın yanında işe başlamış. Ne kadar ücret alacağını bile sormadan tam yirmi yıl boyunca çalışmış.</p>

<p>Yıllar geçip de memleketine dönmek istediğinde ağasının karşısına çıkmış: “Ağam, yirmi yıldır yanında çalışıyorum. Artık annemi ve eşimi çok özledim. Hakkım neyse ver de köyüme döneyim,” demiş.</p>

<p>Ağa ona üç lira vermiş. Adam parasını cebine koymuş. Ağanın eşi ise adama acımış ve yolculuk için bir çörek hazırlamış. Çöreğin içine gizlice beş altın koymuş. “Bu çöreği sakın yolda yeme. Eşine benden bir hediye olsun,” demiş.</p>

<p>Adam teşekkür edip ayrılacakken ağası onu yeniden yanına çağırmış. “Bana bir lira verirsen sana bir öğüt vereceğim,” demiş. Adam bir lirasını uzatmış. Ağa, “Birinci öğüdüm: Sakın gece vakti yola çıkma,” demiş.</p>

<p>Ağa ikinci bir lira istemiş. Adam onu da vermiş. “İkinci öğüdüm: Dibini görmediğin sudan geçme.” Üçüncü lirasını da verince ağa şöyle demiş: “Üçüncü öğüdüm: Aslını bilmediğin bir iş hakkında hüküm verme.”</p>

<p>Adamın artık cebinde hiç parası kalmamış. Tam ayrılacağı sırada ağa onu bir kez daha durdurmuş: “Bir de sana karşılıksız bir öğüt vereyim. Dördüncü öğüdüm: Aslını bilmediğin işe burnunu sokma.” Adam dört öğüdü aklına kazıyıp yola koyulmuş.</p>

<p>Bir süre sonra Yozgat'a giden bir kervana rastlamış ve onlara katılmış. Gün boyunca birlikte yürümüşler. Hava karardığında kervan yoluna devam etmek istemiş ama adam ilk öğüdü hatırlamış. “Ben gece yolculuk yapmayacağım. Sabah olunca devam ederim,” demiş.</p>

<p>Kervancılar onu ikna etmeye çalışmışlar ama adam kararından dönmemiş. Sabah yola çıktığında korkunç bir manzarayla karşılaşmış: Kervan gece saldırıya uğramış, yolcular hayatlarını kaybetmiş. Adam derin bir nefes almış. “Demek ilk liram boşa gitmemiş,” diye düşünmüş.</p>

<p>Yoluna devam ederken bir atlıyla karşılaşmış. Birlikte ilerlemişler ama önlerine derin ve akıntılı bir ırmak çıkmış. Atlı, adamı da atına alarak karşıya geçirmek istemiş. Adam ikinci öğüdü hatırlamış. “Hayır, dibini görmediğim sudan geçmem,” demiş.</p>

<p>Atlı onu dinlememiş ve ırmağa girmiş. Fakat güçlü akıntıya kapılıp gözden kaybolmuş. Adam ise başka bir geçit bulup güvenle karşı kıyıya ulaşmış. “İkinci liram da hayatımı kurtardı,” demiş.</p>

<p>Akşam olduğunda bir köye varmış ve köyün ağasının evinde misafir edilmiş. Fakat evde tuhaf bir manzarayla karşılaşmış. Bir kadın boynuna bağlanan iple duvarın yanında tutuluyor, bir köpek ise rahat bir yatakta yatıyormuş. Yemek geldiğinde önce köpek doyuruluyor, artıkları kadına veriliyormuş.</p>

<p>Adam gördüklerine şaşırmış ama üçüncü öğüdü hatırlayıp hiçbir şey söylememiş. Yemeğini yiyip uyumuş. Sabah ayrıldıktan kısa süre sonra ağanın adamları gelip onu geri götürmüşler.</p>

<p>Ağa sert bir sesle sormuş: “Evde gördüklerin hakkında neden tek kelime etmedin? Kadının neden o durumda olduğunu hiç merak etmedin mi?” Adam sakinlikle cevap vermiş: “Benim ağam bana bir öğüt verdi: Aslını bilmediğin bir iş hakkında hüküm verme, dedi. Ben de bilmediğim bir konuda konuşmadım.”</p>

<p>Ağa bu cevabı çok beğenmiş. “İyi ki konuşmamışsın,” demiş. “Senden önce buraya gelenler gördüklerine karıştıkları için canlarından oldular.” Sonra adama bir heybe dolusu altın vermiş ve adamlarına onu köyüne kadar güvenle götürmelerini söylemiş.</p>

<p>Adam sonunda yıllardır hasret kaldığı evine ulaşmış. Pencereden içeri baktığında eşinin yanında genç bir adam görmüş. İkisi yüksek sesle konuşuyorlarmış. Adam öfkeye kapılmış. Elindeki tüfeği kaldırmış ama tam o sırada dördüncü öğüt aklına gelmiş: “Aslını bilmediğin işe burnunu sokma.”</p>

<p>Tüfeğini indirmiş ve kapıyı çalmış. Kapıyı açan kadın önce onu tanıyamamış. Sonra yıllar önce gurbete gönderdiği eşinin karşısında durduğunu anlayınca sevinçle boynuna sarılmış.</p>

<p>Adam içerideki genci merakla süzünce kadın gülümsemiş: “Onu tanımadın mı? Sen yirmi yıl önce giderken henüz dünyaya gelmemiş olan oğlumuz!” Adamın gözleri dolmuş. Az önce büyük bir yanlış yapmaktan kurtulduğunu anlamış. Oğluna sarılmış, ardından eşine kavuşmanın mutluluğunu yaşamış.</p>

<p>İşte o zaman ağasının verdiği dört öğüdün bütün altınlardan daha değerli olduğunu anlamış. O günden sonra ailesiyle huzur içinde yaşamış.</p>

<p>Gökten üç elma düşmüş: Biri anlatana, biri dinleyene, biri de bir öğüdün değerini bilenlere...</p>
`;


const inatciHorozMetni = `
<p>Bir varmış, bir yokmuş... Evvel zaman içinde, uzak bir köyde inatçılığıyla tanınan bir horoz yaşarmış. Günlerden bir gün çöplükte eşelenirken ayağına küçücük bir diken batmış. Ne yaptıysa dikeni çıkaramamış.</p>

<p>Horoz topallaya topallaya yakındaki bir eve gitmiş. Kapıyı açan yaşlı kadına seslenmiş: “Nineciğim, ayağıma diken battı. Ne olur çıkarıver de rahat edeyim!”</p>

<p>Yaşlı kadın horoza acımış, ayağındaki dikeni dikkatlice çıkarmış. Horoz sevinçle kanatlarını çırpmış. “Çok yaşa nine!” diyerek oradan uzaklaşmış.</p>

<p>Aradan günler geçmiş. Horoz bir sabah yeniden aynı evin kapısına dayanmış. “Nine! Ayağımdan çıkardığın dikeni geri ver!” diye bağırmış.</p>

<p>Kadın şaşkınlıkla bakmış. “Aman horoz, o küçücük dikeni ne yapacaksın? Çoktan mangala attım, yandı gitti!” demiş.</p>

<p>Ama horoz inat etmiş: “Ya dikenimi verirsin ya da mangalını alırım!”</p>

<p>Kadın ne söylediyse horozu ikna edememiş. Sonunda başının ağrımasından bıkıp mangalı ona vermiş. Horoz da mangalı sırtına yükleyip neşeyle yola koyulmuş.</p>

<p>Az gitmiş, uz gitmiş, başka bir köye varmış. Bir evin önünde ineğini sağan kadınla karşılaşmış. “Teyzeciğim, şu mangalımı sana emanet edeyim. Biraz dolaşıp geleceğim,” demiş.</p>

<p>Kadın kabul etmiş, mangalı ahıra koymuş. Fakat o gece inek ahırda gezinirken mangala çarpmış ve onu kırmış.</p>

<p>Horoz geri döndüğünde kapıya dayanmış: “Teyze, mangalımı almaya geldim!”</p>

<p>Kadın üzülerek, “Ah horoz, mangalını ahıra koymuştum ama inek kırmış,” demiş.</p>

<p>Horoz hemen kanatlarını açmış: “Ya mangalımı verirsin ya da ineğini alırım!”</p>

<p>Kadın horozun bitmek bilmeyen ısrarından usanmış. Sonunda ineğini ona vermiş. Horoz da ineği önüne katıp yollara düşmüş.</p>

<p>Bir başka köye vardığında ineğini bir ev sahibine emanet etmiş. “İneğime iyi bakın, dönünce alacağım,” demiş. Ardından yine gezmeye çıkmış. Köyleri, kasabaları dolaşmış; uzak diyarlara kadar gitmiş.</p>

<p>Günlerden bir gün geri döndüğünde emanet bıraktığı evde düğün yapıldığını görmüş. Herkes neşe içinde eğleniyormuş. Horoz ev sahibini bulup sormuş: “Benim ineğim nerede?”</p>

<p>Ev sahibi mahcup bir şekilde başını eğmiş. “Horoz kardeş, düğün hazırlığında ineğini kestik. Şimdi ne yapacağız?” demiş.</p>

<p>Horoz kızmış, kanatlarını çırpmış. Sonra birden durmuş: “Öyleyse gelininizi göreyim!” demiş.</p>

<p>Gelini getirmişler. Horoz onu görünce kararını vermiş: “Madem emanetime sahip çıkmadınız, ben de gelini alırım!”</p>

<p>Ev sahibi horoza altınlar teklif etmiş, dil dökmüş ama horoz hiçbirini kabul etmemiş. İnat etmiş de etmiş. Sonunda gelini yanına alıp dağ yoluna koyulmuş.</p>

<p>Yolda sürüsünü otlatan bir çobana rastlamış. Çoban bir kayanın üzerine oturmuş, öyle güzel kaval çalıyormuş ki horoz hayranlıkla dinlemeye başlamış.</p>

<p>Horoz çobana yaklaşmış: “Çoban kardeş, şu kavalını bana verir misin?” diye sormuş.</p>

<p>Çoban da kavalını vermek karşılığında gelini istemiş. Horoz hiç düşünmeden kabul etmiş. Gelin çobanın yanında kalmış, horoz ise çok beğendiği kavalı alıp yoluna devam etmiş.</p>

<p>Sonunda kendi kümesine dönmüş. Bütün tavukları etrafına toplamış. Kavalını gururla kaldırıp başından geçenleri anlatmaya başlamış:</p>

<p>“Dikenimi verdim, mangal aldım! Mangalımı verdim, inek aldım! İneğimi verdim, gelin aldım! Gelini verdim, kaval aldım!”</p>

<p>Sonra kavalını ağzına götürmüş ve bütün gücüyle üflemiş: “Düüüüüt!”</p>

<p>Tavuklar şaşkınlıkla bakarken horoz neşeyle kavalını çalmaya devam etmiş. Böylece inatçı horoz muradına ermiş.</p>

<p>Onlar ermiş muradına, biz çıkalım kerevetine. Gökten üç elma düşmüş: Biri anlatana, biri dinleyene, biri de horozun kaval sesini duyanlara...</p>
`;

const kurnazKurtMetni = `
<p>Bir varmış, bir yokmuş... Evvel zaman içinde, develer tellal, pireler berber iken, uzak diyarlarda ulu mu ulu, yüce mi yüce bir dağ varmış. Bu dağın dorukları gökyüzüne uzanır, etekleri yemyeşil bağlarla süslenirmiş. Görenler, “Burası dağ mı, bağ mı?” diye şaşırıp kalırmış.</p>

<p>İşte bu dağın yükseklerinde bir kurt yaşarmış. Ama ne kurtmuş! İri gözlü, kalın enseli, güçlü ve bir o kadar da kurnazmış. Geceleri dağdan iner, yakınlardaki köye girer, karşısına çıkan keçileri, koyunları ve diğer hayvanları yakalarmış.</p>

<p>Köylüler artık bu durumdan iyice usanmış. Hayvanları her geçen gün azalıyor, kimse geceleri rahat uyuyamıyormuş. Sonunda bir araya gelip kurdu yakalamaya karar vermişler.</p>

<p>Az gitmişler, uz gitmişler, dere tepe düz gitmişler. Dağın eteklerine ulaşıp yedi ayrı koldan kurdu aramaya başlamışlar. Tam yedi gün yedi gece iz sürmüşler. Sonunda kurdu görmüşler ama bir türlü yakalayamamışlar.</p>

<p>Bunun üzerine dağın yedi ayrı yerine tuzak kurmuşlar. Kurnaz kurt ne kadar dikkatli olsa da sonunda tuzaklardan birine yakalanmış. Köylüler onu alıp köy odasına götürmüşler.</p>

<p>Köy odasında herkes bir araya gelmiş. Köylüler kurttan korkuyor, kurt da köylülerden çekiniyormuş. Bir süre birbirlerine bakıp durmuşlar. Sonunda köylülerden biri söze başlamış:</p>

<p>“Bre kurt! Bizim hayvanlarımızı neden yiyorsun? Yazık değil mi bu köyün insanlarına?”</p>

<p>Kurt önce sessiz kalmış. Sonra başını kaldırıp cevap vermiş: “Ben bir kurdum. Benim de karnım acıkıyor. Siz ekmek yersiniz, ben et yerim. Hayvanlarınızı yememi istemiyorsanız her gün bana bir kilo et getirirsiniz. Ben de köyünüze dokunmam.”</p>

<p>Köylüler uzun uzun düşünmüşler. Sonunda başka çare bulamayınca kurdun teklifini kabul etmişler. Onu yeniden dağa bırakmış, kendisine bir yuva hazırlamışlar.</p>

<p>O günden sonra köylüler sıraya girmiş. Her gün sırası gelen kişi kurda bir kilo et götürüyormuş. Böylece kurt da köye inmiyormuş.</p>

<p>Günler geçmiş, haftalar geçmiş. Fakat köylüler kurdu beslemek için ellerindeki hayvanları tüketmeye başlamışlar. Bir gün bakmışlar ki neredeyse hiç hayvanları kalmamış. Bunun üzerine kurda et götürmeyi bırakmışlar.</p>

<p>Kurt yuvasında beklemiş. Bir gün geçmiş, iki gün geçmiş, ne gelen olmuş ne giden. Açlıktan gözleri kararmış, iyice öfkelenmiş. Sonunda yerinden kalkıp yeniden köyün yolunu tutmuş.</p>

<p>Dağın eteğinde otlayan bir eşekle yavrusunu görmüş. Kurt onların yanına yaklaşmış ve ikisinden de birer parça et koparıp yemiş. Ardından yeniden yuvasına dönmüş.</p>

<p>Akşam olduğunda eşekle yavrusu yaralı hâlde köye dönmüş. Sahipleri onları görünce çok üzülmüş. Hemen köy odasına gidip başına gelenleri anlatmış.</p>

<p>Köylüler yeniden toplanmış, dağa çıkıp kurdu yakalamışlar. Onu bir kez daha köy odasına getirmişler.</p>

<p>“Söyle bakalım kurt!” demişler. “Bizimle anlaşma yaptığın hâlde neden eşekle yavrusuna saldırdın?”</p>

<p>Kurt hiç çekinmeden cevap vermiş: “Bana et getirmezseniz yerim bile danasını!”</p>

<p>Köylüler çaresizlik içinde birbirlerine bakmışlar. “İyi ama köyde neredeyse hiç hayvan kalmadı. Ne tarlamızı sürecek hayvanımız var ne de kurda verecek etimiz. Biz şimdi ne yapacağız?” diye sormuşlar.</p>

<p>Kurt gözlerini kocaman açmış, dişlerini göstererek bağırmış: “Ben anlamam! Bana et getirmezseniz bu kez sizi de yerim!”</p>

<p>Bu sözleri duyan köylüler korkudan ne yapacaklarını şaşırmışlar. Kimse kurda karşı çıkmaya cesaret edememiş. Birer birer köy odasından uzaklaşmışlar.</p>

<p>Kurt odada yalnız kalınca derin bir nefes almış ve kahkahalarla gülmeye başlamış. Meğer o da köylülerden çok korkuyormuş! Söylediği tehditler yalnızca kendisini kurtarmak için bulduğu bir oyunmuş.</p>

<p>Fırsatı kaçırmadan köy odasından çıkmış, dağları aşarak kimsenin bilmediği uzak diyarlara kaçmış.</p>

<p>Gidiş o gidiş... O günden sonra ne kurdu gören olmuş ne de köyün hayvanlarına zarar veren.</p>

<p>Onlar ermiş muradına, biz çıkalım kerevetine. Gökten üç elma düşmüş: Biri anlatana, biri dinleyene, biri de kurnazlığın her zaman cesaret olmadığını anlayanlara...</p>
`;


const goktenDusenUcElmaMetni = `
<p>Bir varmış, bir yokmuş... Evvel zaman içinde, kalbur saman içinde, uzak ülkelerin birinde iyiliksever bir padişah yaşarmış. Sarayları, hazineleri, uçsuz bucaksız toprakları varmış. Fakat bütün zenginliğine rağmen içinde büyük bir eksiklik hissedermiş. Çünkü padişahın hiç çocuğu yokmuş.</p>

<p>Yıllar geçtikçe padişahın üzüntüsü artmış. Ne sarayındaki eğlenceler ne de sahip olduğu hazineler onu mutlu edebilmiş. Tek dileği, bir gün kucağına alacağı evladının sesini duymakmış.</p>

<p>Günlerden bir gün, bilge bir ihtiyar padişahın derdini öğrenmiş. “Padişahım,” demiş, “dileğinizin gerçekleşmesi için güzel bir bahçe yaptırın. İçinde güller, çiçekler, ağaçlar ve berrak havuzlar olsun. Sabırla bekleyin.”</p>

<p>Padişah hemen emir vermiş. Sarayın yanına öyle güzel bir bahçe yapılmış ki görenler hayran kalmış. Rengârenk çiçekler açmış, ağaçların dalları göğe uzanmış, havuzların suları güneş ışığında parlamış.</p>

<p>Padişahın eşi bu bahçeyi çok sevmiş. Günlerini çiçeklerin arasında geçirir, ağaçlarla konuşur, filizlenen her dala umutla bakarmış. Fakat aradan zaman geçmesine rağmen bekledikleri müjdeli haber bir türlü gelmemiş.</p>

<p>Padişah sonunda sabrını kaybetmiş. Büyük bir öfkeyle bahçeye girip çiçekleri ezmeye, dalları kırmaya başlamış. Eşi güçlükle onu durdurmuş ve bahçeyi yeniden huzura kavuşturmuş.</p>

<p>İşte o gün, bahçenin en eski köşesinde duran yaşlı bir elma ağacı dile gelmiş. Padişahın eşine seslenmiş: “Güzel yürekli kadın, benim dallarımdan bir filiz alıp toprağa dik. Ona sevgiyle bak, sabırla büyüt. Bir gün sana bir elma verecek. O elmanın yarısını sen ye, diğer yarısını da padişaha yedir.”</p>

<p>Kadın ağacın sözlerini dikkatle dinlemiş. Hemen bir filiz alıp bahçenin en güzel yerine dikmiş. Her gün onu sulamış, toprağını havalandırmış ve büyümesini umutla beklemiş.</p>

<p>Günler ayları, aylar yılları kovalamış. Küçücük filiz önce fidana, sonra dalları göğe uzanan kocaman bir elma ağacına dönüşmüş. Tam yedi yıl geçmiş.</p>

<p>Yedinci yılın sonunda ağaç tek bir elma vermiş. Ama ne elmaymış! Bir yanı al al kırmızı, diğer yanı bembeyazmış. Güneş ışığında sanki sihirli bir taş gibi parlıyormuş.</p>

<p>Kadın sevinçle elmayı dalından koparmış. Yaşlı ağacın öğüdünü hatırlayarak ikiye bölmüş. Yarısını kendisi yemiş, diğer yarısını da padişaha götürmüş.</p>

<p>Aradan dokuz ay on gün geçmiş. Bir sabah sarayda büyük bir sevinç yaşanmış. Padişahın ve eşinin nur topu gibi bir oğulları dünyaya gelmiş!</p>

<p>Bu müjdeli haber bütün ülkeye yayılmış. Davullar çalınmış, sofralar kurulmuş, meydanlar süslenmiş. Halk kırk gün kırk gece boyunca eğlenmiş. Padişah ve eşi, yıllardır bekledikleri evlatlarına kavuşmanın mutluluğunu yaşamışlar.</p>

<p>O günden sonra sarayın bahçesinde yetişen elma ağacı, sabrın ve umudun simgesi olmuş. Padişahın eşi her gün oğluyla birlikte ağacın yanına gelir, ona sevgiyle bakarmış.</p>

<p>Onlar ermiş muradına, biz çıkalım kerevetine. Gökten üç elma düşmüş: Biri anlatana, biri dinleyene, biri de kalbinde güzel bir dilek taşıyanlara...</p>
`;


const limonKizMetni = `
<p>Bir varmış, bir yokmuş... Evvel zaman içinde, kalbur saman içinde, uzak ülkelerin birinde iyiliksever bir padişah yaşarmış. Her yıl fakirlere yiyecek ve giyecek dağıtır, sarayının karşısındaki çeşmenin bir musluğundan yağ, diğerinden bal akıtırmış.</p>

<p>Günlerden bir gün yaşlı bir kadın çeşmeye gelip testisini yağla doldurmuş. Tam evine dönecekken sarayın penceresinden onu izleyen yaramaz şehzade okunu çekip testiyi kırmış. Yağlar yere dökülmüş. Şehzade ise kahkahalarla gülmeye başlamış.</p>

<p>Yaşlı kadın başını kaldırmış: “Ben sana ne yaptım oğlum? Dilerim Limon Kız'a âşık olasın da onu bulmak için diyar diyar dolaşasın!” demiş.</p>

<p>O günden sonra şehzadenin aklından Limon Kız çıkmaz olmuş. Kim olduğunu, nerede yaşadığını merak edip durmuş. Sonunda babasından izin alarak onu aramak için yola koyulmuş.</p>

<p>Az gitmiş, uz gitmiş, dere tepe düz gitmiş. Günler sonra bir dağın başında yaşlı bir adamla karşılaşmış. Saygıyla selam verip elini öpmüş ve Limon Kız'ı aradığını söylemiş.</p>

<p>İhtiyar gülümsemiş: “Onun bulunduğu yeri biliyorum. Karşıdaki dağın ardında dikenli güllerle dolu bir bahçe var. Oradan bir gül koparıp ‘Ne güzel güller!’ diyerek kokla. Ardından suyu kıpkırmızı akan bir dereye ulaşacaksın. ‘Ne temiz su!’ diyerek biraz iç.”</p>

<p>İhtiyar anlatmaya devam etmiş: “Sonra zincirlenmiş bir atla köpek göreceksin. Atın önündeki eti köpeğe, köpeğin önündeki otu ata ver. Karşına biri açık, diğeri kapalı iki kapı çıkacak. Açık kapıyı kapat, kapalı kapıyı aç. İçeri girince devin bahçesindeki üç limonu bul ve arkana bakmadan geri dön.”</p>

<p>“Ama dikkat et,” demiş ihtiyar. “Bu limonların her birinden bir kız çıkacak. Senden bir şey isteyecekler. İstediklerini yerine getiremezsen yaşayamazlar.”</p>

<p>Şehzade teşekkür etmek için eğildiğinde ihtiyar bir anda ortadan kaybolmuş. Şehzade şaşkınlığını üzerinden atıp söylenenleri yapmaya koyulmuş.</p>

<p>Önce dikenli gül bahçesine ulaşmış. Elleri çizilse de bir gül koparıp güzel kokusunu içine çekmiş. Ardından kırmızı dereye varıp suyundan içmiş. Zincirli atla köpeğin yiyeceklerini değiştirmiş. Sonunda iki kapının bulunduğu yere ulaşmış; kapalı olanı açıp açık olanı kapatmış.</p>

<p>Devin bahçesine girdiğinde binlerce meyve ağacı arasında tek bir limon ağacı bulmuş. Dallarında üç limon varmış. Üçünü de koparıp hızla geri dönmüş.</p>

<p>Dev limonlarının alındığını fark edince öfkeyle bağırmış: “Kapılar! Şu delikanlıyı durdurun!” Ama kapılar, kendilerine iyilik yapan şehzadeyi durdurmamış.</p>

<p>Dev bu kez atla köpeğe seslenmiş. Onlar da “Yıllardır önümüzde yanlış yiyecekler vardı. Bu delikanlı bizi kurtardı!” diyerek şehzadenin geçmesine izin vermişler.</p>

<p>Kırmızı dere ve dikenli güller de kendilerine güzel sözler söyleyen şehzadeye yardım etmiş. Dev peşlerinden koşarken dere kabarıp önünü kesmiş. Böylece şehzade limonlarla birlikte uzaklaşmayı başarmış.</p>

<p>Bir süre sonra merakına yenilip ilk limonu kesmiş. Limonun içinden güzeller güzeli bir kız çıkmış ve “Su! Su!” diye seslenmiş. Şehzade çevresinde su bulamayınca kız gözlerinin önünde hayata veda etmiş.</p>

<p>Şehzade çok üzülmüş. Yine de bir süre sonra ikinci limonu kesmiş. Ondan çıkan kız da su istemiş. Fakat etrafta tek damla su yokmuş. İkinci kız da yaşayamamış.</p>

<p>Bu kez şehzade dersini almış. Son limonu mutlaka su kenarında açmaya karar vermiş. Uzun bir yolculuktan sonra büyük bir havuzun bulunduğu yemyeşil bir bahçeye ulaşmış.</p>

<p>Havuzun başına oturup üçüncü limonu dikkatlice kesmiş. İçinden ayın on dördü kadar güzel bir kız çıkmış. “Su! Su!” diye seslenince şehzade hemen ona havuzdan su vermiş. Kız kana kana içmiş, yüzünü yıkamış ve yeniden canlanmış.</p>

<p>Şehzade aradığı Limon Kız'ı sonunda bulmuş! Ona saraya gidip güzel elbiseler ve bir karşılama alayı getireceğini söylemiş.</p>

<p>Limon Kız, “Seni burada beklerim,” demiş. “Ama saraya vardığında annenle babanın seni alnından öpmesine izin verme. Yoksa beni unutursun.”</p>

<p>Şehzade söz vermiş. Parmağındaki yeşil taşlı yüzüğü çıkarıp Limon Kız'a uzatmış: “Birbirimizi kaybedersek bu yüzük bizi yeniden buluştursun.”</p>

<p>Şehzade ayrılınca Limon Kız havuzun yanındaki çınar ağacına seslenmiş: “Eğil çınar ağacı!” Ağaç dallarını yere indirmiş. Limon Kız bir dala oturunca çınar yeniden yükselmiş.</p>

<p>Bu sırada şehzade saraya ulaşmış. Anne ve babası oğullarını görünce sevinçle sarılmış, alnından öpmüşler. O anda şehzade verdiği sözü ve Limon Kız'ı unutmuş.</p>

<p>Günler geçerken havuza su almaya gelen bir hizmetçi, suda Limon Kız'ın yansımasını görmüş. Başını kaldırınca ağaçtaki güzel kızı fark etmiş ve yanına çıkmak istemiş.</p>

<p>Limon Kız yalnızlıktan sıkıldığı için onu yanına almış. Sohbet ederlerken hizmetçi, Limon Kız'ın sırrını öğrenmiş: Saçındaki küçük altın tarak yerinden çıkarılıp yanlış yere takılırsa Limon Kız beyaz bir güvercine dönüşürmüş.</p>

<p>Hizmetçi, Limon Kız'ın saçlarını taramayı teklif etmiş. Ardından altın tarağı yanlış yere takmış. Limon Kız bir anda beyaz bir güvercine dönüşüp gökyüzüne uçmuş.</p>

<p>Hizmetçi ise onun yerine geçmek için ağacın dalları arasında beklemeye başlamış. Bir süre sonra Limon Kız'ı hatırlayan şehzade bahçeye dönmüş. Ağaçtaki hizmetçiyi görünce şaşırmış.</p>

<p>Hizmetçi, “Beni çok beklettiniz şehzadem. Güneş yüzümü kararttı, rüzgâr beni değiştirdi,” demiş. Şehzade bu sözlere inanmış ve onu Limon Kız sanarak saraya götürmüş.</p>

<p>Kırk gün kırk gece düğün yapılmış. Ancak sarayın bahçesine her gün beyaz bir güvercin gelmeye başlamış. Bahçıvana seslenir, şehzadeye güzel dileklerde bulunur, sahte Limon Kız'a ise sitem edermiş. Konduğu dallar birer birer kururmuş.</p>

<p>Bahçıvan durumu şehzadeye anlatmış. Şehzade güvercini yakalatıp bir kafese koymuş. Kuşu çok sevdiği için kafesi odasına asmış. Güvercin, şehzade yanındayken sanki onunla konuşmak istermiş.</p>

<p>Hizmetçi güvercinin gerçek Limon Kız olduğunu anlamış. Ondan kurtulmak için hasta numarası yaparak güvercinin kendisine verilmesini istemiş. Şehzade sonunda isteğini kabul etmiş ve güvercin öldürülmüş.</p>

<p>Güvercinin kanının düştüğü yerde bir selvi ağacı büyümüş. Hizmetçi bu ağacı da ortadan kaldırmak istemiş ve ondan kendisine bir taht yapılmasını buyurmuş.</p>

<p>Selvi kesilmiş, taht hazırlanmış. Artan odun parçaları ise yoksul bir kadına verilmiş. Kadın bunları evine götürmüş.</p>

<p>Bir gün kadın dışarıdayken odun parçalarının arasından Limon Kız yeniden ortaya çıkmış. Evi temizlemiş, yemek pişirmiş, sofrayı hazırlamış ve bir dolaba saklanmış.</p>

<p>Kadın eve döndüğünde gördüklerine şaşırmış. “Kim yaptı bütün bunları?” diye seslenmiş. Limon Kız saklandığı yerden çıkıp başından geçenleri anlatmış. Kadın onu sevgiyle karşılamış ve evlat edinmiş.</p>

<p>Bir süre sonra şehzade hastalanmış. Hekimler ona çorba içmesini söylemişler. Ülkenin dört bir yanından saraya çorbalar gönderiliyormuş.</p>

<p>Bunu duyan Limon Kız da güzel bir çorba pişirmiş. Şehzadenin kendisine verdiği yeşil taşlı yüzüğü çorbanın içine bırakmış ve yaşlı kadından çorbayı saraya götürmesini istemiş.</p>

<p>Şehzade çorbayı çok beğenmiş. İkinci kaşığı aldığında ağzına sert bir şey gelmiş. Çıkarıp baktığında bunun Limon Kız'a verdiği yüzük olduğunu görmüş!</p>

<p>Hemen çorbayı getiren kadını çağırtmış. Kadın, evinde yaşayan genç kızın başından geçenleri anlatmış. Şehzade o anda gerçeği anlamış. Saraya getirdiği kişinin Limon Kız olmadığını öğrenmiş.</p>

<p>Hizmetçinin yalanları ortaya çıkmış. Şehzade onun saraydan uzaklaştırılmasını emretmiş. Ardından gerçek Limon Kız'ı bulmak için yaşlı kadınla birlikte yola çıkmış.</p>

<p>İki sevgili sonunda yeniden kavuşmuş. Bu kez şehzade Limon Kız'ı bir daha unutmayacağına söz vermiş.</p>

<p>Sarayda yeniden düğün hazırlıkları başlamış. Kırk gün kırk gece süren şenliklerle şehzade ve Limon Kız evlenmişler. Yoksul kadın da onların yanında yaşamış.</p>

<p>Onlar ermiş muradına, biz çıkalım kerevetine. Gökten üç elma düşmüş: Biri sabırla bekleyenlere, biri iyiliğin değerini bilenlere, biri de gerçek sevgiyi unutmayanlara...</p>
`;


const kabakGelinMetni = `
<p>Bir varmış, bir yokmuş, evvel zaman içinde, kalbur saman içindeyken köylerin birinde bir Keloğlan ile anası yaşarmış. Anası saçını süpürge yapar, orda burada çalışarak günlük nasiplerini çıkarırmış. Oğlu Keloğlan, tembelin tekiymiş. Bütün gün hiçbir işe bakmaz, miskin miskin oturur veyahut da yatarak zamanını geçirirmiş. Kadın bakar ki olacak gibi değil!</p>

<p>“Keloğlum, keleş oğlum, elâlemin oğlu analarına bakıyor. Git sen de çalış, para kazan…” diyerek oğluna yolluk ekmek pişirip yola salar.</p>

<p>Keloğlan az gide uz gide bir tepenin yamacında sürülerini otlatan bir çoban görür.</p>

<p>Hoşbeşten sonra:</p>

<p>“Ekmeğim sende kalsın. 3 güne kadar geldim geldim, gelmedimse helâl-hoş olsun” diyerek, çekip gidiyor. Geri döndüğünde, çobanın ekmeğini yediğini görünce:</p>

<p>O yanına geçerim, bu yanına geçerim<br>
Koyununu aldığım gibi kaçarım deyip koyunu kucaklayıp kaçıyor.</p>

<p>Gel zaman git zaman yolda bir kervana rast geliyor. Kervancıbaşına koyunu verip 3 gün içinde gelmezse kendilerinin olmasını söylüyor ve çekip gidiyor. Döndüğünde koyunun yerinde yeller estiğini görüp iyice sinirlenen Keloğlan:</p>

<p>“O yanına geçerim, bu yanına geçerim,<br>
Halılarını aldığım gibi kaçarım”</p>

<p>Deyip halıları alıp kaçıyor. Tepeler aşırı yol yürüdükten sonra bir köye geliyor. Bakar ki ne görsün? Herkes gülüp eğleniyor, davullar zurnalar çalınıyor. Bunun bir düğün töreni olduğunu öğrenen Keloğlan düğün sahibine halıları emanet edip yine “3 gün içinde gelmezsem helâl-hoş olsun” diyerek kayboluyor. Geldiğinde halıları bulamayınca hiddetlenip:</p>

<p>“O yanına geçerim, bu yanına geçerim, gelinini aldığım gibi kaçarım”,deyip gelinin elinden tuttuğu gibi geldiği yollardan, tepelerden aşarak köyüne geliyor.</p>

<p>Evlerine vardıktan sonra gelini kapını arkasına dayayıp annesine: -“Ana, Keloğlun sana bir gelin getirdi. Git de elini eteğini öpsün” diyerek, gelinin yanına yolluyor.</p>

<p>Kadıncağız, gelinin duvağını açtığında ne görsün! , kaşı, gözü oyulmuş, süslenmiş bezenmiş bir kabak durmuyor mu karşısında!</p>

<p>Meğer o köyde her yıl mevsimi gelince kabak şenlikleri yapılır, eğlenilirmiş. Gelini kaptığı gibi, Keloğlan’ın başına fırlatan anası, oğlunu bir güzel benzetmiş. Kabak Keloğlan’ın başında parçalanmış…</p>

<p>Onlar orada kaldı; safalarını süpür, muratlarını ersinler.</p>
`;


const altinSacliKizMetni = `
<p>Evvel zaman içinde kalbur saman içinde padişahların yaşadığı çok eski zamanlarda, güzel bir bahçenin ortasındaki beyaz evde saçları altın sarısı renginde güzeller, güzeli Başak adında bir genç kız annesi ile birlikte yaşıyormuş. Babaannesinden kalma kemik tarak ile her sabah sarı saçlarını bıkmadan, usanmadan saatlerce tararmış.</p>

<p>Tarağın dişleri arasında kalan ve dökülen saçlarını tek, tek toplar bir mendilin içine koyar ve saklarmış. Beyaz evlerinin olduğu bahçedeki çiçekler mis gibi kokar, herkes onlara hayranlıkla bakarmış. Genç kızın annesi çiçeklerle hergün ilgilenir, onları sular ve onlara sevgisini gösteren sözler söylermiş. Çiçeklerle uğraşmak o kadarda kolay değilmiş. İlgi göstermez onlara bakılmazsa hemen boyunlarını büker, küserlermiş. Genç kızın annesi hergün karanlık çöktüğünde çiçeklerin içersinden seçtiği bir çiçeğin üzerine genç kızın sarı saçlarından bir tel koyar ertesi sabahta o çiçek onlara bir altın verirmiş. Bu anne ve kızın arasında bir sırmış. Kimseye muhtaç olmadan yaşayıp gidiyorlarmış.</p>

<p>Günlerden birgün, köşede duran kadının biri genç kızın annesini çiçekten altın alırken görmüş. Hayretler içersinde kalarak: -” Gördüklerim doğrumu acaba” diyerek hemen plan yapmaya başlamış. Üzerine eski, yırtık ve kirli bir elbise giyerek Başak ve annesinin yaşadığı eve gelmiş. Kapıyı çalmış genç kızın annesi kapıyı açtığında:</p>

<p>-” Çok zor durumdayım, birkaç gün sizde kalabilirmiyim” demiş ve yere yığılmış. Kadının bu halini gören Başak ve annesi haline çok acıyıp kadını eve alıp yatağa yatırmışlar. Merakla beklemeye başlamışlar. Kadın gözlerini açtığında bir bardak su istemiş. Başak suyu getirmiş içtikten sonra:</p>

<p>-” Karnım çok aç ” demiş. Genç kız ve annesi hemen kadına çorba yapıp bir güzel karnını doyurmuşlar. Kadın karnı doyduktan sonra ellerini açıp dualar etmiş onlara. Başak ve annesi kadının ettiği dualara o kadar sevinmişler ki ona artık burada kalabilmesi için ısrar etmeye başlamışlar. Kadın onların bu isteği karşısında:</p>

<p>-” Olur kalırım” demiş. Başak ve annesi kadının kötü niyetinden habersizmişler. Artık birlikte yaşamaya başlamışlar. Aradan günler geçmiş kötü niyetli kadın planını uygulamaya başlayıp artık hergün Başağın saçlarını tarıyor kimseye göstermeden de dökülen saçlarından bir kısmını saklıyormuş. Gece çiçeklerin üzerine kimseden habersiz aldığı saç tellerini koyup sabah olduğunda gidip altınları alıyormuş. Bu böyle devam etmiş, artık kadın bu durumdan sıkılmaya, ona zor gelmeye başlamış. Bir gece Başak uyurken kötü niyetli kadın makası eline almış ve bütün saçlarını kesivermiş. İşte o an kestiği bütün saçlar birer yılan olup kadının üzerine atlamış. Başak uyanıp “durun” demese yılanlar oracıkta kadını öldüreceklermiş. Kadın korkudan konuşamıyor, deli gibi ordan oraya koşuşturup duruyormuş.</p>

<p>Günler geçmiş, birgün köyü niyetli kadın sokakta perişan bir halde otururken karşısına yaşlı bir adam gelmiş. Kadının gözlerinin içine bakarak:</p>

<p>-” Bir zamanlar buralarda bir nalbant yaşardı. Herkes ona hürmet eder, çok severdi. Nalbant bir sabah çiçeğin altın verdiğini gördü. Gözünün önünden çil, çil altınlar gitmiyordu. Uyku uyuyamaz, çalışamaz oldu. O günden sonra baktı eline, diline, kulağına hakim olamayacak herşeyini bırakıp oralardan çekip gitti. Bir dahada kimse ondan haber alamadı. Ben sana söyleyeyim nalbant’ a ne olduğunu artık Padişah’ ın sağ kolu vezir oldu. Eğer senin gibi kendini tutmasaydı şimdi nalbantta senin gibi perişan bir halde olacaktı” dedi ve oradan uzaklaştı.</p>

<p>Yaşlı adam gittikten sonra kadın deli gibi bağırıp saçını, başını yolmaya, oradan oraya koşmaya başladı. Açgözlü olmanın, yalan söylemenin, kötü düşüncelere sahip olmanın cezasını çekiyordu.</p>

<p>Başak’ın saçları kısa sürede tekrar uzadı, güzel çiçeklerin olduğu beyaz evlerinde annesi ile birlikte uzun yıllar mutlu olarak yaşadılar.</p>

<p>Onlar ermiş muratlarına, biz çıkalım tahtına, güller döşeyelim onların yollarına.. gökten üç elma düştü; biri masalı yazanın, biri bu masalı okuyanın, biri de tüm dinleyenlerin başına...</p>
`;


const keloglanHicAliyorMetni = `
<p>Bir varmış, bir yokmuş. Tanrının kulu çokmuş. Çok yemesi, yok demesi günahmış. Vaktin birinde bir Keloğlan, bir de anası varmış. Bir gün anası bu Keloğlana on para vermiş: -Haydi Keloğlan, keleş oğlan, bakkala git on paralık hiç alıver gel demiş.</p>

<p>O zamanlar bizim bildiğimiz şu adi tuzun adına hiç derlermiş. Keloğlan anasının dediğini unutmamak için yolda giderken “hiç, hiç” diye söylenir dururmuş. Gide gide deniz kenarına varmış. Balıkçılar geceden ağ atmışlar da sabahleyin kıyıdan elbirliği ile “hay hak, hay hak” diye çekerlermiş. Bu Keloğlan gelmiş, aman anamın dediğini unutmayayım diye, orada “hiç, hiç” der dururmuş. O böyle dedikçe, balıkçılar kızmışlar, hay hak, hay hak diyerek asıla asıla ağın sonuna gelmişler ki, bir tek balık yok. Keloğlan hiç, hiç dedikçe balık çıkmazmış. Ağların sonundaki torba da boş çıkınca, bunlar tutmuşlar, orada dikilip hiç, hiç diye söylenen Keloğlan; evire çevire bir güzel dövmüşler.</p>

<p>Keloğlan ah demiş, of demiş, dayağı yemiş, ama anasının tembihlediğini de kel kafasından uçurmuş, unutmuş. Dayağın acısı, sızısı bir yana, telâşından sormuş:</p>

<p>-Peki, ben şimdi ne diyeyim neler söyleyeyim, balıkçı babalar?</p>

<p>Balıkçılardan biri buna:</p>

<p>- “Birisi çıktı, ikisi daha gelsin” diyeceksin, demiş. Keloğlan da bu sözleri diline dolamış da “biri çıktı, ikisi daha gelsin” diyerek giderken, bir evin önünde durmuş. Kapısından bir tabut çıkarıyorlarmış.</p>

<p>-Biri çıktı, ikisi daha gelsin diye söylenirken, cemaat hemen tabutu bırakıp bunu evire çevire dövmeye girişmişler. Keloğlan, ah demiş, of demiş, dayağı yemiş, ama balıkçıların sözlerini de kafasından uçurmuş, unutmuş. Dayağın acısı, sızısı bir yana, telâşından sormuş:</p>

<p>-Peki ben şimdi ne diyeyim, neler söyleyeyim beyler ağalar?</p>

<p>İmam da buna:</p>

<p>-Hak rahmet eylesin, geride kalanlara ecir sabır versin, diyeceksin diye tembihlemiş. Keloğlan yolda bu sözleri tekrarlayarak giderken, yerde bir köpek leşi görmüş. Hemen durup ona da:</p>

<p>-Hak rahmet eylesin, geride kalanlara ecir sabır versin demeye başlamış.</p>

<p>Yoldan burunlarını tıkayarak geçenler bunu duyunca, Keloğlan’ın başına üşüşmüşler, Keloğlan’ı evire çevire bir güzel dövmüşler. Keloğlan, ah demiş, of demiş, dayağı yemiş, ama beylerin, ağaların söylediklerini de kel kafasından uçurmuş, unutmuş.</p>

<p>Dayağın sızısı, acısı bir yana, telâşından sormuş:</p>

<p>-Peki ben şimdi ne diyeyim, neler söyleyeyim, yolcular?</p>

<p>Yolcular da buna:</p>

<p>- “Öf ne kokuymuş, püf ne kokuymuş!” diyeceksin demişler. Keloğlan da bu sözleri diline dolamış da: “Öf ne kokuymuş, püf ne kokuymuş!” diye söylenerek giderken, bohçaları koltuklarında hamamdan çıkan kadınlara rastlamış. Keloğlan burnunu tuta tuta kadınlara karşı:</p>

<p>-Öf ne kokuymuş, püf ne kokuymuş der demez, kadınlar, bohçalarını bir kenara koyup, Keloğlan’ın etrafını almışlar da evire çevire dövmeye, etlerini bura bura çimdiklemeye girişmişler ki, bağırtısı böğürtüsü gökyüzünü tırmalamış.</p>

<p>Keloğlan ah demiş, of demiş, dayağı yemiş, ama burada yolcuların sözlerini de kafasından uçurmuş, unutmuş. Dayağın acısı, sızısı bir yana, telâşından sormuş:</p>

<p>-Peki ben şimdi ne diyeyim, neler söyleyeyim, hanım teyzeler, ablalar?</p>

<p>Yolcular da buna:</p>

<p>- “Oh ne güzel, oh ne iyi, mis gibi mis gibi” diyeceksin diye sıkı sıkı tembihlemişler. Keloğlan, yolda bu sözleri tekrarlayarak giderken, gırtlak gırtlağa kavga eden iki kimseye rastlamış. Bu Keloğlan karşılarına geçmiş de:</p>

<p>- Oh ne güzel, oh ne iyi, mis gibi, mis gibi demeye başlamış. Adamlar bu sözü duymalarıyla hemen kavgayı bırakmışlar, Keloğlanın üstüne atılıp zavallıyı çevire çevire bir güzel pataklamışlar, Allah yarattı dememişler. Oğlanın inlemesi, sızlaması azala kısıla kedi miyavlamasına dönmüş. Bu Keloğlan, ah demiş, of demiş, dayağı da yemiş. Ama kadınların dediklerini de kel kafasından uçurmuş, unutmuş.</p>

<p>Dayağın acısı sızısı bir yana, telâşından sormuş:</p>

<p>-Peki ben şimdi ne diyeyim, neler söyleyeyim, ağalar?</p>

<p>Kavgacılar da buna:</p>

<p>- “Yapmayın kardeşler, etmeyin yoldaşlar!” diyeceksin diye öğretmişler.</p>

<p>Keloğlan, kavgacı ağaların öğrettiklerini ezberleye ezberleye giderken, bu sefer de yol üstünde hırlaşan iki köpeğe rast gelmiş. Durmuş bu köpeklerin başucunda da:</p>

<p>-Yapmayın kardeşler, etmeyin yoldaşlar demeye başlamış. Yoldan geçenler bu sözleri duymalarıyla, hemen Keloğlan’ın üstüne atılıp zavallıyı iteleyip kakalayıp dövüp sövmeye başlamışlar. Bu Keloğlan, ah demiş, of demiş, dayağı da yemiş.</p>

<p>Lâkin kavgacı ağaların öğrettiklerini de kel kafasından uçurmuş, unutmuş. Dayağın acısı sızısı bir yana, telâşından sormuş:</p>

<p>-Peki, ben şimdi ne diyeyim, neler söyleyeyim beyler?</p>

<p>Yoldan geçen beyler de buna:</p>

<p>- “Hoşt hoşt, hoşt hoşt” diyeceksin diye sıkı sıkı tembihlemişler. Keloğlan beylerin öğrettiklerini ezberleye ezberleye giderken, bir terlikçi dükkânına rastlamış. Durmuş da kendini terlikçilerin nasıl çalıştıklarını seyre epeyce kaptırmış.</p>

<p>Terlikçiler, kalıba oturmuş terlikleri, iki yana “gıcır, gıcır” diye diye mumlu sicimleri çeke çeke, göz açıp kapayasıya, fırdolayı, çevirip dikiyorlar, sonra da kalıptan çıkarıyorlar, dişleriyle asılıp yüzünü çeviriyor, düzeltiyorlarmış. Keloğlan bunların karşılarına geçmiş hem seyreder hem de “hoşt hoşt, hoşt hoşt” dermiş.</p>

<p>Terlikçiler dişlerinde terlikleri bir duralamışlar, iki dinlemişler, gözlerini devire devire bakmışlar, beklemişler. Olmamış. Hemen davranıp dükkânlarından fırlamışlar. Bu Keloğlan’ın yakasına yapışıp, evire çevire, yer misin yemez misin diyerek pata küte dövmüşler. Bu Keloğlan, ah demiş, of demiş, dayağı baştan ayağa sırılsıklam yemiş. Lâkin beylerin öğrettiklerini de kel kafasından uçurmuş, unutmuş, dayağın acısı sızısı bir yana, telâşından sormuş:</p>

<p>-Peki ben şimdi ne diyeyim, neler söyleyeyim, terlikçi dayılar?</p>

<p>Terlikçiler de buna:</p>

<p>- “Çek çek uzasın, çok çok uzasın” diyeceksin diye bir bir öğretmişler.</p>

<p>Keloğlan terlikçilerin öğrettiklerini söyleye söyleye giderken, oğlunun kulağını çekip azarlayan bir adama rastlamış, durmuş bakarken, onlara da:</p>

<p>-Çek çek uzasın, çok çok uzasın deyince, bu adamın çektiği kulak kopmuş, elinde kalmış. Bu adam dönmüş, Keloğlan’ı yakalamış, sille tokat, evire çevire dövmüş. Bu Keloğlan, ah demiş of demiş, bu dayağı da baştan ayağa sırılsıklam yemiş. Lâkin terlikçilerin sözlerini de kel kafasından uçurmuş, unutmuş. Dayağın acısı sızısı bir yana, telâşından sormuş:</p>

<p>-Peki, ben şimdi ne diyeyim, neler söyleyeyim bey amca?</p>

<p>Bu adam da kızgınlığından, hem de üzgünlüğünden:</p>

<p>- “Hiç” diyeceksin Keloğlan deyince, birden davranıp bu Keloğlan’ın aklı başına gelmiş.</p>

<p>- “Anam bana on paralık hiç al” demişti diyerekten koşmuş. Bakkala varmış.</p>

<p>On paralık “hiç” tarttırmış da doğru evine koşmuş. Anasının evde bekleye bekleye sabrı tükenmiş de başı iyice bunalmış. Keloğlan kapıdan girer girmez:</p>

<p>-Hınzır Keloğlan, haylaz Keloğlan, kim bilir nerelerde oyuna daldın diyerek bunu evire çevire dövmüş de, kel kafasına bir işkembe geçirip, bir köşeye oturtmuş.</p>

<p>Zaman geçmiş, devir sürmüş, bu Keloğlan’ın işleri oyunları tükenmemiş.</p>

<p>Gökten üç elma düştü: biri bana, biri masalı anlatana, biri de bende emanet dursun, Keloğlan’ın soyundan, gelenlere.</p>
`;


// Seçilen masalı açan ortak fonksiyon
const masalMetinleri = [
    husnuYusufMetni,
    oksuzKizMetni,
    zumruduankaMetni,
    keloglanMetni,
    dortOgutMetni,
    inatciHorozMetni,
    kurnazKurtMetni,
    goktenDusenUcElmaMetni,
    limonKizMetni,
    kabakGelinMetni,
    altinSacliKizMetni,
    keloglanHicAliyorMetni
];
function masalAc(index) {
  aktifMasal = index;

  document.getElementById("masal-basligi")
    .textContent = masallar[index];

  document.getElementById("masal-numarasi")
    .textContent =
      "MASAL " +
      String(index + 1).padStart(2, "0") +
      " / 12";

  

document.getElementById("masal-metni").innerHTML =
    masalMetinleri[index] ||
    "<p>Bir varmış, bir yokmuş...</p>" +
    "<p><strong>" + masallar[index] +
    "</strong> masalının metni burada yer alacak.</p>";
// Okuma ekranındaki illüstrasyonu seçiyoruz
const okumaCizimi = document.getElementById("okuma-illustrasyon");

// Yalnızca üçüncü masalda gösteriyoruz
okumaCizimi.hidden = index !== 2;
// Keloğlan çizimini yalnızca dördüncü masalda göster
const keloglanCizimi = document.getElementById("keloglan-illustrasyon");
const husnuYusufCizimi = document.getElementById("husnu-yusuf-illustrasyon");
const oksuzKizCizimi = document.getElementById("oksuz-kiz-illustrasyon");
const dortOgutCizimi = document.getElementById("dort-ogut-illustrasyon");
const inatciHorozCizimi = document.getElementById("inatci-horoz-illustrasyon");
const kurnazKurtCizimi = document.getElementById("kurnaz-kurt-illustrasyon");
const goktenDusenUcElmaCizimi = document.getElementById("gokten-dusen-uc-elma-illustrasyon");
const limonKizCizimi = document.getElementById("limon-kiz-illustrasyon");
const kabakGelinCizimi = document.getElementById("kabak-gelin-illustrasyon");
const altinSacliKizCizimi = document.getElementById("altin-sacli-kiz-illustrasyon");
const keloglanHicAliyorCizimi = document.getElementById("keloglan-hic-aliyor-illustrasyon");
keloglanCizimi.hidden = index !== 3;
husnuYusufCizimi.hidden = index !== 0;
oksuzKizCizimi.hidden = index !== 1;
dortOgutCizimi.hidden = index !== 4;
inatciHorozCizimi.hidden = index !== 5;
kurnazKurtCizimi.hidden = index !== 6;
goktenDusenUcElmaCizimi.hidden = index !== 7;
limonKizCizimi.hidden = index !== 8;
kabakGelinCizimi.hidden = index !== 9;
altinSacliKizCizimi.hidden = index !== 10;
keloglanHicAliyorCizimi.hidden = index !== 11;
  kapak.hidden = true;
  dizin.hidden = true;
  okuma.hidden = false;

  // İlk ve son masalda ilgili butonu pasifleştir
  document.getElementById("onceki-masal")
    .disabled = index === 0;

  document.getElementById("sonraki-masal")
    .disabled = index === masallar.length - 1;

  window.scrollTo(0, 0);
}

// Masal kartlarına tıklama
kartlar.forEach(function (kart, index) {
  kart.addEventListener("click", function () {
    masalAc(index);
  });
});

// Önceki masala geç
document.getElementById("onceki-masal")
  .addEventListener("click", function () {
    if (aktifMasal > 0) {
      masalAc(aktifMasal - 1);
    }
  });

// Sonraki masala geç
document.getElementById("sonraki-masal")
  .addEventListener("click", function () {
    if (aktifMasal < masallar.length - 1) {
      masalAc(aktifMasal + 1);
    }
  });


  // Masalların dizinine geri dön
  document.getElementById("geri-butonu")
    .addEventListener("click", function () {
      okuma.hidden = true;
      kapak.hidden = true;
      dizin.hidden = false;

      window.scrollTo(0, 0);
    });

  // MASAL ARAMA ÖZELLİĞİ

  const aramaKutusu =
    document.getElementById("masal-arama");

  const aramaSonuc =
    document.getElementById("arama-sonuc");

  aramaKutusu.addEventListener("input", function () {

    // Kullanıcının yazdığı kelimeyi alıyoruz.
    const aranan = aramaKutusu.value
      .toLocaleLowerCase("tr-TR")
      .trim();

    let bulunanMasalSayisi = 0;

    // Bütün masal kartlarını kontrol ediyoruz.
    kartlar.forEach(function (kart, index) {

      const masalAdi = masallar[index]
        .toLocaleLowerCase("tr-TR");

      if (masalAdi.includes(aranan)) {
        kart.hidden = false;
        bulunanMasalSayisi++;
      } else {
        kart.hidden = true;
      }
    });

    // Hiçbir masal bulunamadıysa mesaj gösteriyoruz.
    aramaSonuc.hidden = bulunanMasalSayisi !== 0;

  });

  // YAZI BOYUTU AYARLARI

  const masalMetni = document.getElementById("masal-metni");

  let yaziBoyutu = 20;

  document.getElementById("yazi-buyut")
    .addEventListener("click", function () {

      if (yaziBoyutu < 28) {
        yaziBoyutu += 2;
        masalMetni.style.fontSize = yaziBoyutu + "px";
      }

    });

  document.getElementById("yazi-kucult")
    .addEventListener("click", function () {

      if (yaziBoyutu > 16) {
        yaziBoyutu -= 2;
        masalMetni.style.fontSize = yaziBoyutu + "px";
      }

    });