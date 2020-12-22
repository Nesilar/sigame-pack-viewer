var dropzone_target = null;
var dropzone_el = null;

var packs = [];


document.addEventListener('DOMContentLoaded', function() {
    console.info('Boop! Beep!');

    dropzone_el = document.querySelector(".dropzone");

    document.querySelector(".btn_changeView").addEventListener("click", ()=> {changeView();});
    document.querySelector(".btn_downloadShot").addEventListener("click", ()=> {takeshot()});

    // fake();
    
});

// Change render type
function changeView() {
    let rounds_el = document.querySelector(".rounds");
    if(rounds_el.dataset.type === "default") {
        renderPack(packs[0], "clear");
        rounds_el.dataset.type = "clear";
    }
    else {
        renderPack(packs[0]);
        rounds_el.dataset.type = "default";
    }
}

// Render package in DOM
function renderPack(pack, type) {
    let rounds_el = document.querySelector(".rounds");
    rounds_el.innerHTML = "";

    if(type === undefined) rounds_el.dataset.type = "default";
    else rounds_el.dataset.type = type;

    let information_el = document.querySelector(".information");
    information_el.innerHTML = "";


    if(pack.info.name !== undefined) {
        let el = document.createElement("div");
        el.className = "info__name";
        el.innerText = pack.info.name;
        information_el.appendChild(el);
    }
    if(pack.info.comments !== undefined) {
        let el = document.createElement("div");
        el.className = "info__comments";
        el.innerText = "Комментарии: " + pack.info.comments;
        information_el.appendChild(el);
    }
    if(pack.info.restriction !== undefined) {
        let el = document.createElement("div");
        el.className = "info__restriction";
        el.innerText = "Ограничения: " + pack.info.restriction;
        information_el.appendChild(el);
    }
    if(pack.info.difficulty !== undefined) {
        let el = document.createElement("div");
        el.className = "info__difficulty";
        el.innerText = "Сложность: " + pack.info.difficulty;
        el.innerText += "/10"
        information_el.appendChild(el);

            // el.innerText = info_to_ru[k]+": ("+value+") ";
            // for(let i = 0; i < 10; i++) {
            //     if(i < value) el.innerText += "★";
            //     else el.innerText += "☆";
            // }
    }
    if(pack.info.publisher !== undefined) {
        let el = document.createElement("div");
        el.className = "info__publisher";
        el.innerText = "Издатель: " + pack.info.publisher;
        information_el.appendChild(el);
    }
    if(pack.info.authors !== undefined) {
        let el = document.createElement("div");
        el.className = "info__author";

        if(pack.info.authors.length > 1) {
            el.innerText = "Авторы: ";
            pack.info.authors.forEach((author) => {
                el.innerText += author+", ";
            })
            el.innerText = el.innerText.slice(0, -2);
        } else {
            el.innerText = "Автор: " + pack.info.authors;
        }

        information_el.appendChild(el);
    }
    if(pack.info.date !== undefined) {
        let el = document.createElement("div");
        el.className = "info__date";
        el.innerText = "Дата создания: " + pack.info.date;
        information_el.appendChild(el);
    }



    pack.rounds.forEach((round) => {
        let round_el  = document.createElement('div');
        round_el.className = "round";

        let round__name_el = document.createElement("div");
        round__name_el.className = "round__name";
        round__name_el.innerText = round.name;
        round_el.appendChild(round__name_el);

        if(type !== undefined) round_el.dataset.type = type;
        else round_el.dataset.type = round.type;

        let themes_el = document.createElement("div");
            themes_el.className = "themes";
                round.themes.forEach((theme) => {
                    let theme_el = document.createElement("div");
                    theme_el.className = "theme";
                        theme__name_el = document.createElement("div");
                        theme__name_el.className = "theme__name";
                        theme__name_el.innerText = theme.name;
                        theme_el.appendChild(theme__name_el);

                        let questions_el = document.createElement("div");
                        questions_el.className = "questions";
                            theme.prices.forEach((price) => {
                                let question_el = document.createElement("div");
                                question_el.className = "question";
                                    let question__price_el = document.createElement("div");
                                    question__price_el.className = "question__price";
                                    question__price_el.innerText = price;

                                    question_el.appendChild(question__price_el);
                                questions_el.appendChild(question_el);
                            });
                    theme_el.appendChild(questions_el);

                    themes_el.appendChild(theme_el);
                });
            round_el.appendChild(themes_el);
        rounds_el.appendChild(round_el);
    })
}

// Add fake package
function fake() {
    let fileData = '<?xml version="1.0" encoding="utf-8"?><package name="Обсервационно-развлекательный пак" version="4" id="b2b1a28e-44f4-4ba1-8af6-ce604cf7533a" date="25.09.2020" publisher="CMP" difficulty="3" xmlns="http://vladimirkhil.com/ygpackage3.0.xsd"><info><authors><author>Adenru</author><author>Adenru2</author></authors><comments>Сделан в обсерваторе для развлечения.</comments></info><rounds><round name="1-й раунд"><themes><theme name="ХХХ"><questions><question price="100"><info><comments>Нет, на женщине нельзя.</comments></info><scenario><atom>Из-за цензуры до эпохи интернета японцы могли посмотреть на это только в специальных заведениях</atom></scenario><right><answer>гениталии</answer><answer>пизду</answer><answer>письку</answer><answer>влагалище</answer></right></question><question price="200"><info><comments>Выбор есть всегда.</comments></info><scenario><atom>Не все знают, но "Пятёрочкой", "Перекрёстком" и "Каруселью" владеет одна компания.</atom></scenario><right><answer>X5 Retail Group</answer></right></question><question price="300"><type name="cat"><param name="theme">ПОПУЛЯРНОСТЬ</param><param name="cost">300</param></type><scenario><atom>Самый популярный по трафику сайт на 2020 год.</atom></scenario><right><answer>youtube.com</answer></right></question><question price="400"><scenario><atom>Когда-то из аэропорта этого города был совершён первый налёт американцев на Вьетнам.</atom></scenario><right><answer>Паттайя</answer></right></question><question price="500"><scenario><atom>В семидесятых заведениям для взрослых в США пришлось выбирать между настоящим секс-шоу и продажей этого.</atom></scenario><right><answer>алкоголя</answer><answer>алкогольных напитков</answer></right><wrong><answer>презервативов</answer></wrong></question></questions></theme><theme name="ЗАДАЧКИ"><questions><question price="100"><scenario><atom>В комнате 50 горящих свечей. Из них 20 погасили. Сколько свечей останется к утру?</atom></scenario><right><answer>20</answer></right></question><question price="200"><info><comments>Дальше уже втрое, вчетверо и т.д.</comments></info><scenario><atom>Сколько раз можно сложить газету вдвое?</atom></scenario><right><answer>один</answer></right></question><question price="300"><info><comments>Дом на Северном полюсе</comments></info><scenario><atom>Дом имеет четыре стены, причём все они смотрят на юг. Вокруг дома ходит медведь. Какого он цвета?</atom></scenario><right><answer>белого</answer></right></question><question price="400"><type name="cat"><param name="theme">славянские языки</param><param name="cost">400</param></type><scenario><atom>ПОЗОР в чешском означает...</atom></scenario><right><answer>внимание</answer></right></question><question price="500"><scenario><atom>Ребус</atom><atom type="image">@r.jpg</atom></scenario><right><answer>сорока</answer></right></question></questions></theme><theme name="ПОСЛЕДНИЕ СЛОВА"><questions><question price="100"><scenario><atom>"Карету мне! Карету!"</atom></scenario><right><answer>Чацский</answer></right></question><question price="200"><scenario><atom>"КУУУУУУУУУРРРРРРРРРРРРРРРРВАААААААААААА!!!!!!!"2010</atom></scenario><right><answer>Лех Качиньский</answer></right></question><question price="300"><scenario><atom>"Гав-гав-гав... Гав..."1957</atom></scenario><right><answer>Лайка</answer></right></question><question price="400"><scenario><atom>«Отдайте всё...»</atom></scenario><right><answer>Пётр Первый</answer></right></question><question price="500"><scenario><atom>"Ты был прав. Ты был прав на мой счёт. Скажи своей сестре, что ты был прав."</atom></scenario><right><answer>Дарт Вейдер</answer></right></question></questions></theme><theme name="&quot;ЦИТАТЫ&quot;"><questions><question price="100"><scenario><atom>"Я - автор. Вот ссылка на пруф."</atom></scenario><right><answer>Владимир Хиль</answer></right></question><question price="200"><scenario><atom>"Пошли со мной, если хочешь жить до начала ребута сиквелов."</atom></scenario><right><answer>Терминатор</answer></right></question><question price="300"><scenario><atom>"Сынок, ты будешь пилотировать вот этого огромного монстра, жить с  классной тёлкой, а вот тебе ещё и няшная девочка-клон.</atom></scenario><right><answer>Гендо</answer></right></question><question price="400"><scenario><atom>"Наша страна стоит на краю пропасти, но благодаря президенту мы сделаем шаг вперед!"</atom></scenario><right><answer>Черномырдин</answer></right></question><question price="500"><scenario><atom>"Вы хотите знать, правда ли мои фильмы финансируются нацистами? Да, это правда."</atom></scenario><right><answer>Уве Болл</answer></right></question></questions></theme><theme name="ЯНОНСКИЕ МУЛЬТИКИ"><questions><question price="100"><scenario><atom type="image">@govno2.jpg</atom><atom type="marker"></atom><atom type="image">@govno.jpg</atom></scenario><right><answer>говно</answer></right></question><question price="200"><type name="auction" /><scenario><atom>В 2016-м году это обошло по популярности порно в гугл трендах.</atom></scenario><right><answer>Pokemon GO</answer></right></question><question price="300"><scenario><atom type="image">@tanuki.jpg</atom><atom type="say">Этого зверя нельзя изобразить без его отличительной черты</atom></scenario><right><answer>тануки</answer></right></question><question price="400"><info><comments>Возможно, в русском переводе звучит по-другому. Я это говно всё равно не смотрел.</comments></info><type name="bagcat"><param name="theme">Наруто</param><param name="cost">400</param><param name="self">true</param><param name="knows">before</param></type><scenario><atom>В мультсериале "Наруто" Тоби объявляет войну Альянсу Шиноби. Сколько эпизодов длится битва без учёта филлеров? Можно ошибиться на 25 эпизодов.</atom></scenario><right><answer>159</answer></right></question><question price="500"><scenario><atom>Первое полнометражное аниме Studio Ghibli Хаяо Миядзаки</atom></scenario><right><answer>Небесный замок Лапута</answer></right></question></questions></theme></themes></round><round name="2-й раунд"><themes><theme name="ВОЖДИ"><questions><question price="200"><scenario><atom>В немецком языке это слово также означает "водитель".</atom></scenario><right><answer>фюрер</answer></right></question><question price="400"><scenario><atom>Фобия Ангелы Меркель.</atom><atom type="marker"></atom><atom type="image">@dog.jpg</atom></scenario><right><answer>собаки</answer></right></question><question price="600"><scenario><atom>Рональд Рейган назвал этих "джентльменов" "моральным эквивалентом американских отцов-основателей".</atom><atom type="marker"></atom><atom type="image">@Reagan-Mujahadeen.jpg</atom></scenario><right><answer>афганских моджахедов</answer></right></question><question price="800"><scenario><atom>Организация Red Men Of America в 1942 году избрала его своим вождём.</atom></scenario><right><answer>Сталина</answer></right></question><question price="1000"><type name="cat"><param name="theme">КРОКОДИЛ ГЕНА</param><param name="cost">1000</param></type><scenario><atom>Является ли Крокодил Гена настоящим крокодилом? Если нет, то кем?</atom><atom type="image">@gena.jpg</atom></scenario><right><answer>аллигатором</answer></right></question></questions></theme><theme name="ЛЕНИН"><questions><question price="200"><scenario><atom>В каком месяце произошла Октябрьская революция?</atom></scenario><right><answer>ноябрь</answer><answer>в ноябре</answer></right><wrong><answer>октябрь</answer><answer>октябре</answer></wrong></question><question price="400"><info><comments> "Снаружи красный, а внутри белый."</comments></info><scenario><atom>Этим ругательством можно называть людей, которые только снаружи строят из себя социалистов, а на деле белые.</atom></scenario><right><answer>редиска</answer></right></question><question price="600"><info><comments>Но не писать.</comments></info><scenario><atom>Сравнивая уровень грамотности в дореволюционной России, надо помнить об этом.</atom></scenario><right><answer>Грамотными считались в лучшем случае умеющие читать по слогам.</answer></right></question><question price="800"><scenario><atom>Этим придуманным им же термином Ленин охарактеризовал бы Зюганова.</atom></scenario><right><answer>социал-шовинист</answer></right></question><question price="1000"><info><comments>Помянем демократа.</comments></info><scenario><atom>Ленин называл демократию в буржуазном государстве оболочкой капитализма, а само государство - инструментом насилия, поэтому предлагал заменить его на систему управления через голосования, называя их такими "измов".</atom></scenario><right><answer>демократизмы</answer></right></question></questions></theme><theme name="СТАЛИН"><questions><question price="200"><scenario><atom>Найдите разницу в картинках.</atom><atom type="image">@ezh.jpg</atom></scenario><right><answer>Ежов</answer></right></question><question price="400"><scenario><atom>До войны ей планировали заменить винтовку Мосина в качестве основного стрелкового оружия, но перешли  на массовое производство автоматов.</atom></scenario><right><answer>самозарядной винтовкой Токарева</answer></right></question><question price="600"><scenario><atom>в 1949 году был разработан план по ядерной бомбардировке СССР с таким названием.</atom></scenario><right><answer>Дропшот</answer></right></question><question price="800"><info><comments>Упорно спасает принцессу, в первой своей игре был плотником, но переквалифицировался в сантехники и пристрастился к грибам.</comments></info><type name="cat"><param name="theme">красные  герои пролетариата</param><param name="cost">600</param></type><scenario><atom>Упорству в спасении женщины этого героя можно позавидовать, в восьмидесятых в профиле он был похож на Сталина, к сожалению, после смены рода деятельности у него появилось пагубное пристрастие к галлюциногенам.</atom><atom type="marker"></atom><atom type="image">@8Bit_Mario.jpg</atom></scenario><right><answer>Марио</answer></right></question><question price="1000"><scenario><atom>Непосредственная встреча лидеров при Ялтинской конференции проводилась в Ливадийском дворце, где размещался Рузвельт, хоть это  противоречило этикету. Почему?</atom></scenario><right><answer>В нём разместился Рузвельт, передвигавшийся на инвалидной коляске.</answer></right></question></questions></theme><theme name="ПУТИН"><questions><question price="215"><type name="sponsored" /><scenario><atom>Ты голосовал за Путина?</atom></scenario><right><answer>да</answer></right></question><question price="400"><scenario><atom type="say">Что это?</atom><atom type="image">@cat.jpg</atom></scenario><right><answer>кошка, вид сзади</answer></right></question><question price="600"><scenario><atom>На первое января 2032 Путин пропрезидентсвует столько лет.</atom></scenario><right><answer>27</answer><answer>двадцать семь</answer></right></question><question price="800"><scenario><atom>Штирлиц пьёт водку с Навальным. Доходят до второй бутылки, и Навальный падает.- "Эх, ________," - вздыхает Штирлиц.</atom></scenario><right><answer>новичок</answer></right></question><question price="1000"><scenario><atom>В 2012-м Путин летал со стерхами на мотодельтаплане, однако без этого элемента экипировки, использовавшегося для визуального сходства.</atom></scenario><right><answer>клюва</answer></right></question></questions></theme><theme name="ЦИТАТЫ ВОЖДЕЙ"><questions><question price="200"><scenario><atom>"Мы там и раньше бывали, в пицце, ну вот теперь сходили ещё раз"</atom></scenario><right><answer>Горбачёв</answer></right></question><question price="400"><scenario><atom>"Каковы бы ни были благие намерения английских попиков или сладенького Каутского, объективный, т. е. действительный социальный смысл его «теории» один и только один: реакционнейшее утешение масс надеждами на возможность постоянного мира при капитализме посредством отвлечения внимания от острых противоречий и острых проблем современности и направления внимания на ложные перспективы какого-то якобы нового будущего «ультраимпериализма»."</atom></scenario><right><answer>Ленин</answer></right></question><question price="600"><scenario><atom>"Политик должен уметь предсказать, что произойдет завтра, через неделю, через месяц и через год. А потом объяснить, почему этого не произошло."</atom></scenario><right><answer>Черчилль</answer></right></question><question price="800"><scenario><atom>"Если мы увидим, что войну выигрывает Германия, нам следует помогать России, если будет Россия, нам следует помогать Германии, и пусть они как можно больше убивают друг друга, хотя мне не хочется ни при каких условиях видеть Гитлера в победителях."</atom></scenario><right><answer>Трумэн</answer></right></question><question price="1000"><scenario><atom>"Мы живем сегодня так, как работали вчера, а завтра будем жить так, как работаем сегодня."</atom></scenario><right><answer>Брежнев</answer></right></question></questions></theme></themes></round><round name="3-й раунд"><themes><theme name="ЦИТАТЫ"><questions><question price="300"><scenario><atom>"Я - бездарь, невежда и историю знаю вершками, я никогда этого не скрывал."</atom></scenario><right><answer>Дудь</answer></right></question><question price="600"><scenario><atom>"И почем у нас будет Родина?" </atom></scenario><right><answer>Сталин</answer></right></question><question price="900"><scenario><atom>"На яйцах рисуют? Я не знаю, что там рисуют на яйцах. Не видел."</atom></scenario><right><answer>Путин</answer></right></question><question price="1200"><scenario><atom>"Скажу честно - проспал!"</atom></scenario><right><answer>Ельцин</answer></right></question><question price="1500"><scenario><atom>«Я хочу низко уклониться всем вам за то, что сегодня, мы одержали фактически окончательную победу. Сейчас это правительство, которое находится через дорогу, которое украло наши голоса, которое украло наши деньги, которое врало нашим гражданам, это правительство получило тыкву от украинского народа.» 2004</atom></scenario><right><answer>Порошенко</answer></right></question></questions></theme><theme name="МЕДИЦИНА"><questions><question price="300"><scenario><atom>В восемнадцатом веке табак начали использовать для реанимации утопленников таким образом.</atom><atom type="marker"></atom><atom type="image">@enema.jpg</atom></scenario><right><answer>клизма</answer><answer>табачная клизма</answer></right></question><question price="600"><scenario><atom>Этот препарат был разработан в 19-м веке как не вызывающий зависимости опиат, популярен и сейчас, хоть и находится под запретом.</atom></scenario><right><answer>героин</answer></right></question><question price="900"><type name="cat"><param name="theme">фразеологизмы интернета</param><param name="cost">900</param></type><scenario><atom>Сюжетное ответвление, ведущее в никуда.</atom></scenario><right><answer>ружьё Бондарчука</answer></right></question><question price="1200"><scenario><atom>Возбудитель сифилиса не выдерживает высоких температур, поэтому до антибиотиков его лечили ей.</atom></scenario><right><answer>малярией</answer></right></question><question price="1500"><info><comments>бог медицины</comments></info><scenario><atom>Посох этого греческого бога стал символом врачей.</atom></scenario><right><answer>Асклепий</answer></right></question></questions></theme><theme name="ЖИВОТНЫЕ"><questions><question price="300"><type name="cat"><param name="theme">простой вопрос по антропологии</param><param name="cost">300</param></type><scenario><atom>Среди мужских или женских черепов из каменного века больше разбитых носов?</atom><atom type="marker"></atom><atom type="image">@sutkin.jpg</atom></scenario><right><answer>женских</answer></right></question><question price="600"><scenario><atom>К этому надсемейству относится человек разумный.</atom></scenario><right><answer>человекообразные обезьяны</answer></right></question><question price="900"><scenario><atom>Семейство генов и соответствующих им белков, управляющих эмбриональным развитием нервной системы и скелетной системы, иронично названное именем этого персонажа видеоигр, поскольку в случае их мутации может развиться циклопия.</atom><atom type="marker"></atom><atom type="image">@eyeball.jpg</atom></scenario><right><answer>Sonic Hedgehog</answer><answer>Ёжик Соник</answer></right></question><question price="1200"><scenario><atom>У некоторых моллюсков кровь голубая. Почему?</atom></scenario><right><answer>Кислород переносит медь.</answer></right></question><question price="1500"><scenario><atom>Как отличить на глаз крокодила от аллигатора?</atom><atom type="marker"></atom><atom type="image">@croc.jpg</atom></scenario><right><answer>У аллигаторов морды шире, а зубы не так видны или не видны вовсе.</answer></right></question></questions></theme><theme name="...БЛЯ..."><questions><question price="300"><scenario><atom>Может быть как национальной, так и абордажной.</atom></scenario><right><answer>сабля</answer></right></question><question price="600"><scenario><atom>Трудозатратный способ исказить оригинальные идеи фильма.</atom></scenario><right><answer>дубляж</answer></right></question><question price="900"><type name="cat"><param name="theme">ВОЕННАЯ ПОМОЩЬ</param><param name="cost">900</param></type><scenario><atom>США в сороковых производился миниатюрный однозарядный пистолет для партизан с говорящим названием.</atom></scenario><right><answer>FP-45 Liberator </answer><answer>Освободитель</answer></right></question><question price="1200"><type name="bagcat"><param name="theme">ЧЁРТОВА ДЮЖИНА</param><param name="cost">1000</param><param name="self">true</param><param name="knows">after</param></type><scenario><atom>Тринадцатая буква английского алфавита.</atom></scenario><right><answer>P</answer></right></question><question price="1500"><scenario><atom>Вдвойне неприличная еврейская фамилия.</atom></scenario><right><answer>Бляхер</answer></right></question></questions></theme><theme name="РОССИЯ"><questions><question price="300"><scenario><atom>Греческое название Крыма до сих пор применяется на полуострове.</atom></scenario><right><answer>Таврида</answer><answer>Tauris</answer></right></question><question price="600"><info><comments>Японцы относятся к Успенскому и первоисточнику с куда большим уважением.</comments></info><scenario><atom>Увидев продолжение своего творения от российских авторов, этот детский писатель скоропостижно скончался.Назвать творение и писателя.</atom></scenario><right><answer>Трое из Простоквашино. Успенский.</answer></right></question><question price="900"><scenario><atom>Эти космонавты-испытатели удостоились собственного "мавзолея".</atom><atom type="marker"></atom><atom type="image">@cosmo.jpg</atom></scenario><right><answer>Белка и Стрелка</answer></right></question><question price="1200"><scenario><atom>Первый свод законов на Руси.</atom></scenario><right><answer>Русская Правда</answer></right></question><question price="1500"><info><comments>Сиамские кошки на самом деле немецкие.</comments></info><type name="bagcat"><param name="theme">ДОБРЫЙ ДЕТСКИЙ МУЛЬТИК</param><param name="cost">1000</param><param name="self">true</param><param name="knows">before</param></type><scenario><atom>В России его считают выходцем из Азии, хотя его порода скорее немецкая, а имя и вовсе взято из языка враждующего семейства, с членом которого он дружит</atom></scenario><right><answer>котёнок Гав</answer></right></question></questions></theme></themes></round><round name="ФИНАЛ" type="final"><themes><theme name="ЗАДАЧА НА ВНИМАТЕЛЬНОСТЬ"><questions><question price="0"><scenario><atom type="say">На каком номере припаркован автомобиль?</atom><atom type="image">@parking1.jpg</atom><atom type="marker"></atom><atom type="image">@parking2.jpg</atom></scenario><right><answer>87</answer></right></question></questions></theme><theme name="ПОСЛЕДОВАТЕЛЬНОСТЬ"><questions><question price="0"><scenario><atom>8 2 9 0 1 5 7 3 4 6В каком порядке расположены числа?</atom></scenario><right><answer>по алфавиту</answer></right></question></questions></theme></themes></round></rounds></package>';
    parser = new DOMParser();
    xml = parser.parseFromString(fileData,"text/xml");
    packs[0] = new SIPack(xml);
    renderPack(packs[0]);
};

// Read input files
function readFiles(e) {
    let files = e;
    for (let i = 0; i < files.length; i++) {
        if(files[i].name.slice(files[i].name.length-4) === ".siq") {
            JSZip.loadAsync(files[i])
                .then((zip) => {
                    zip.files["content.xml"].async('string').then(function (fileData) { 
                        if(fileData[0] !== "<") fileData = fileData.slice(1);
                        parser = new DOMParser();
                        xml = parser.parseFromString(fileData,"text/xml");
                        
                        // siqs.push(new SIPack(xml));
                        packs[0] = new SIPack(xml);
                        renderPack(packs[0]);

                        document.querySelector(".info__preupload").style.display = "none";
                        document.querySelector(".info__errors").style.display = "none";
                        document.querySelector(".app__controls").style.display = "flex";
                        
                    })
                }, (e) => {
                    document.querySelector(".info__errors").style.display = "block";
                });
        }
    }
}

function isFile(e) {
    let dt = e.dataTransfer;
    for (let i = 0; i < dt.types.length; i++) {
        if (dt.types[i] === "Files") {
            return true;
        }
    }
    return false;
}

// Convert image to Blob
function dataURItoBlob(dataURI) {
    var byteString = atob(dataURI.split(',')[1]);
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);

    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
  
    var blob = new Blob([ab], {type: mimeString});
    return blob;
  
}

// Make screenshot and download
function takeshot() {
    let app = document.querySelector('.app__container');
    domtoimage.toPng(app)
    .then (function (dataURI) {
        saveAs(dataURItoBlob(dataURI), packs[0].info.name + "__screenshot_by_SIPack.png");
    })
    .catch(function (error) {
        console.error('Oops :\\ ', error);
    });
} 


// Some work for drag'n'drop overlay
window.addEventListener("dragenter", function (e) {
    if (isFile(e)) {
        dropzone_target = e.target;
        dropzone_el.classList.remove("dropzone_hidden");
    } 
});
window.addEventListener("dragleave", function (e) {
    e.preventDefault();
    if (e.target === document || e.target === dropzone_target) {
        dropzone_el.classList.add("dropzone_hidden");
    }
});
window.addEventListener("dragover", function (e) {
    e.preventDefault();
});
window.addEventListener("drop", function (e) {
    e.preventDefault();
    dropzone_el.classList.add("dropzone_hidden");
    readFiles(e.dataTransfer.files);
});