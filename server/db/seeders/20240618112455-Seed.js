"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Stones",
      [
        {
          title: "Кварц",
          description:
            "Земная кора более чем на половину состоит из кварца. В химии он фигурирует под названием диоксид кремния (SiO2), в минералогии – кремнезем. В чистом виде кварц представляет собой твердые, совершенно прозрачные шестигранные кристаллы с заостренной верхушкой. Их твердость, как считают некоторые исследователи, и стала причиной происхождения названия минерала. На шкале твердости впереди кварца только алмазы, корунды и топазы.Благодаря своей высокой теплопроводности чистый, без примесей, кварц (горный хрусталь) всегда прохладный на ощупь. Это его свойство использовали еще в Древнем Риме, изготавливая хрустальные шары специально для того, чтобы знатные римляне могли охлаждать руки в жаркое время.Растворить его можно только в плавиковой кислоте или расплаве щелочи. Для того же, чтобы расплавить кварц, его нужно разогреть свыше 1700°С. То есть, в обычных условиях нанести какой-либо вред украшению из этого минерала не просто сложно, но и, практически, невозможно",
          url: "/stones/kvarc.jpg",
          price: 2500,
        },
        {
          title: "Турмалин",
          description:
            "Если нагреть кристалл или сжать его либо потереть, в нем возникает электрический заряд. При этом один конец кристалла заряжается положительно, а другой — отрицательно. Такой наэлектризованный кристалл притягивает частицы пыли и мелкие кусочки бумаги (пиро- и пьезоэлектричество).Голландские моряки и купцы, впервые привезшие этот минерал в Европу, знали и использовали этот эффект. Они чистили с помощью нагретых кристалликов турмалина свои пенковые трубки, а потому называли этот камень «ашенциер» — вытягивающий золу",
          url: "/stones/turmalin.jpg",
          price: 9800,
        },
        {
          title: "Сколецит",
          description:
            "Сколецит был описан в начале XIX века учеными Фуксом и Геленом. Свое название минерал получил в честь греческого слова – «скольз», что дословно переводится как червь. Дело в том, что кристаллы сколецита начинают извиваться словно червь, если поднести к ним паяльную лампу или горелку.",
          url: "/stones/skolecit.jpg",
          price: 13500,
        },
        {
          title: "Азурит",
          description:
            "Название камень азурит много лет назад получил из-за своего красивого цвета. По составу данный минерал является медным карбонатом. Чаще всего азурит встречается на территории Греции. Масса данного минерала представляет собой огромнейшее количество кристаллов и узелков, обладающих очень интересным блеском. Цвет столь интересной породы темно-синий. Иногда минерал азурит имеет узкие полоски нежно-голубого тона. В естественной среде его встречают в соединении с не менее известным камнем малахитом. Так называемый азуромалахит своей расцветкой напоминает вид Земли из космоса",
          url: "/stones/azurit.jpg",
          price: 24100,
        },
        {
          title: "Родохрозит",
          description:
            "Название «родохрозит» имеет древнегреческие корни и в дословном переводе означает «окрашенный, словно роза». В научной литературе минерал встречается и под другими именами. Ученые нередко называют его диалогитом, малиновым или марганцевым шпатом. Древние индейцы именовали самоцвет розой инков. Они были уверены, что ярко-малиновые кристаллы являются застывшей кровью их правителей, превратившихся после смерти в камень. Индейцы с глубоким почитанием относились к минералу и безоговорочно верили в его сверхъестественные силы",
          url: "/stones/rodohrozit.jpg",
          price: 34200,
        },
        {
          title: "Уваровит",
          description:
            "У уваровита есть несколько основных, достаточно хорошо известных названий, так, например, он известен как «императорский камень». Второе известное его название «уральский изумруд» относится так же и к «гранату – демантоиду» и говорит само за себя. Произошло оно по названию первых обнаруженных залежей минерала, очень похожего на изумруд, в районе Уральских гор Траутвинит. Это название встречается и в зарубежной литературе, «ханлеит» — уваровит, добытый в Индии на территории месторождения Ханли",
          url: "/stones/uvarovit.jpg",
          price: 16900,
        },
        {
          title: "Карнеол",
          description:
            "В разных странах карнеол имеет различные названия. Например, в древней Руси его именовали сердоликом (сочетание слов «сердце» и «лик»). Древние греки называли его сердолитом, что означает привезенный из города Сорта. В Риме минерал называли так же, как и ягоды кизила, из-за их невероятной схожести по цвету. Археологи выяснили, что в период палеолита из него изготовляли орудия труда и охотничье оружие. Это неудивительно, если вспомнить, насколько твердый и острый этот минерал. Кроме того, были найдены украшения, являющиеся амулетами и талисманами",
          url: "/stones/karneol.jpg",
          price: 12300,
        },
        {
          title: "Пирит",
          description:
            "Камень пирит получил свое название от греческого слова «пирос» — «огонь», что было связано с его способностью высекать искры при ударе. Кроме того, минерал называют серным, купоросным или железным колчеданом, а также золотом дураков. Название «золото дураков» минерал получил по той причине, что в доколумбовой Америке испанцы отнимали его у местных жителей, принимая за драгоценный металл. Этот термин — просто характеристика испанских конкистадоров, чьих жадности и глупости с избытком хватило на то, чтобы обманывать самих себя, оставаясь в дураках. Однако этот же камень стал символом гражданской доблести и щедрости для французских женщин времен Наполеона, получавшим от государства украшения с пиритом за заслуги перед армией, для которой они жертвовали свои драгоценности",
          url: "/stones/pirit.jpg",
          price: 8500,
        },
        {
          title: "Обсидиан",
          description:
            "Минерал обсидиан имеет запутанную историю происхождения, полную загадок и тайн. Кажется, что путь удивительного камня также длинен, как и вся история человечества. Впервые эффузивная горная порода упомянута в записях древнегреческого ученого Теофаста, жившего в IІІ-IV вв. до н. э. Однако многочисленные археологические раскопки подтверждают тот факт, что обсидиан активно использовали еще в каменном веке. Официальное название камень вулканического происхождения получил в честь греческого воина Обсидия. Именно он первым оценил красоту минералов и привез их в Рим. Наши древние предки верили в удивительные волшебные свойства камня. Его часто использовали для создания различных талисманов и ритуальных ножей",
          url: "/stones/obsidian.webp",
          price: 6400,
        },
        {
          title: "Серпентинит",
          description:
            "Порода имеет зеленую окраску с разноцветными пятнами. Как отмечают ученые, разнообразие зеленых оттенков зависит от присутствия тех или иных минеральных примесей. Например, белый цвет обусловлен присутствием ветвящихся прожилок кальцита или доломита. Большим разнообразием цветовых оттенков отличаются серпентиниты, добываемые на Урале",
          url: "/stones/zmeevik.jpg",
          price: 4200,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};