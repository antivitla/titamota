<template lang="pug">
  article
    p Таймер достаточно мощный, но его сложность раскроется постепенно

    h3 # Одна случайная запись
    p Чтобы просто записать время один раз, неважно чего - просто шлепните по кнопке. Название сгенерится от балды. Время будет написано на кнопке и появится вкладка "история".

    h3 # Больше одной записи
    p Когда станет две и больше записей, станут доступны "задачи", "дни" и "месяцы".

    h3 # Задача
    p Задача это цель отслеживания - она группирует записи с одинаковыми именами и считает суммарную длительность &amp; деньги по ним. Для случаев когда оплата по-проектная, то есть надо знать сумму денег за проект в целом.

    h3 # Дни и месяцы
    p Как и задачи, группируют записи, но ещё и по периодам времени. Также являются целью отслеживания - для случаев если вы сдаёте отчеты помесячно или каждый день заносите время в сторонний какой-то трекер.

    h3 # Помощь
    p Данная вкладка помощи может быть убрана из видимого списка - в меню. Там же можно вырубить неиспользуемые виды, например "дни", если работаете с помесячной оплатой.

    h3 # Вложенные задачи
    p Как только плоский список перестанет удовлетворять, можно делать вложенные задачи. Для этого записывайте названия задач через слеш c пробелами до и после &laquo; / &raquo;. Это как путь к файлу (через вложенные папки), образующий потенциально сложное дерево задач. Как только появится хотя бы одна вложенная задача, в "задачах" вы увидите как образуется дерево.

    h3 # Редактирование задач
    p Через длинный клик по задаче (нажать и подержать и когда круг завершится, отпустить). Время старта можно редактировать только в "истории" у конкретной записи.

    h3 # Быстрый старт задач
    p Кликом по задаче она стартуется в таймере (кроме "истории", там это выберет задачу для пакетных действий - удаление и когда запилю ещё что-то, будет ещё что-то). При этом если у задачи нет вложенных, то стартуется она сама. А если есть, то автоматом генерится ещё одна вложенная задача. Фокус ставится в поле ввода таймера, так что можно сразу и задать нужное название. Или нет - если нет времени. Потом поправить.

    blockquote(style="background-color: white; margin-left: 0px; padding: 5px 20px;")
      h3 После старта таймера можно подправить время старта в "истории", через длинный клик и редактирование начала, если забыли врубить таймер.

    h3 # Редактирование во время бега таймера
    p В целом таймер не обязательно останавливать чтобы подредактировать что-то. Если будете редактировать "красные" задачи (те которые трекаются) - просто это отразится в таймере сразу же. И наоброт - если вы записываете задачу, прямо в поле ввода таймера можно подредактировать имя и если вы задавали вложенность в имени и сейчас меняете её, то это отразится и на дереве задач в "задачах" и других видах ("месяцы", "дни") - просто для удобства чтоб не лезть в саму задачу через длинный клик.

    h3 # Задачу превращаем в набор подзадач?
    p Просто записываем новую запись c нужным "путём". Она подгруппируется с исходной корневой задачей. Некоей магией тупизны время суммарное по исходной задачи учтет все вложенные задачи (и их записи) и собственные записи. Тут цель в том что сначала задача может казаться простой, а потом вы решите разбить таки её на подзадачи и таймер не будет вам мешать - разбивайте, всё учтётся как было.
    blockquote(style="background-color: white; margin-left: 0px; padding: 5px 20px;")
      h3 Цель интерфейса - максимально быстро стартануть то что у вас в голове и не стоять на пути

    h3 # Задобали длинные пути задач, врубаем "контекст"
    p Когда накопится пара клиентов с парой проектов и проекты особенно на саппорте (а там дохренища всего хаотического) чтобы не морочиться и не видеть каждый раз полные пути можно задать "контекст" происходящего. Для этого навести на задачу и аккуратно один раз крутануть колесо мыши. Все существующие задачи обрежутся только до те которые относились к этому узлу, будет как будто у вас в таймере есть только содержимое данной задачи (с учётом месяца или дня, если выбирали там а не в "задачах")

    p Например если сделать контекстом "июнь" вообще, то у вас будут все дни июня только. Если сделать контектом проект "Бронепоезд", то во всех видах останется только он. Если сделать контектом "Бронепоезд" в июне - то, оля-ля, будет именно июньские бронепоездатые записи.

    p Контекстом можно сделать, понятно, только то, что имеет что-то вложенное. А так контекстом может быть что угодно из узлов.

    p Вот собственно и всё, а остальное это Best Practices и ... а, деньги!

    h3 # Деньги
    p Системы какого-то учёта денег нет - вы просто задаёте цену часа с краешку слева под таймером и для каждой задачи будет выведено столько натикало. Есть разные валюты и конвертится по курсу автоматом. Кстати с показыванием денег таймер чуть больше жрет ресурсов поэтому лучше вырубать если не нужно.

    h3 # Best Practices
    p Для самых помороченных. Из опыта пользователей сложилась стихийно структура удобная track'ать классичъные фрилансные проекты: Клиент &rarr; Проект &rarr; Задачи и подзадачи проекта. Если трекать деньги, то сделать "оплачено" и "неоплачено" корневыми узлами проекта или клиента - и переносить туда узлы. Перенос узлов через изменение "пути" вложенности. Клиент выше проекта потому что под клиентом несколько проектов и деньги в целом с клиента требуются а не с проекта.

    ul
      li Василий Чапаев (клиент)
        ul
          li Бронепоезд (проект)
            ul
              li неоплачено
                ul
                  li листовое железо (задача)
                  li патроны (задача)
                  li ищем машиниста (задача)
              li оплачено
          li Новый дизайн маузера (проект)

      li Семён Будённый (клиент)
        ul
          li Новая порода лошади для комдива (проект)
            ul
              li выращиваем корм (задача)
              li проводим лошадиные знакомства (задача)
                ul
                  li подзадачи и т.д.



    h3 # Внутренности для понимания
    p Есть только конкретные записи в истории. Проекты, задачи, месяцы и прочее что будет - генерится на лету из большого списка этих записей и никак не хранится. Каждый узел структур (задачи, месяцы, дни) соответсвует некоему набору записей из истории. Поэтому менять структуры можно и нужно быстро и на лету и всем пофик. "История" - вот источник реальности, то, что есть и хранится на самом деле. В случае непоняток смотрите "историю" - это лог, журнал и монитор базы данных в одном лице. Редактирование истории отражается сразу же на всех остальных видах.

    p Узлы месяцев и дней генерятся автоматом из дат старта записей и для них есть понятно ограничения, но в целом это обычный узел как и задача. Может быть контекстом, может быть по нему отфильтровано, можно посчитать общую длительность и деньги и т.д.

    h3 # Остальное
    p Есть ещё пакетное удаление в "истории", в сайдбаре можно аву себе сменить, экспортировать и импортировать данные в JSON-формат, переключить язык и валюту (можно и в ссылке через <code>?ru&amp;rub</code> например). Ещё можно фильтровать историю, тоже скраешку слева под таймером появится полюшко-поле вводе.
</template>

<style lang="stylus">
  @import '~@/assets/stylesheets/variables'
  // @import url('https://fonts.googleapis.com/css?family=Merriweather:300,700&subset=cyrillic')

  article
    // font-family Merriweather, serif
    font-size 18px
    line-height 1.5
    padding-top 40px
    padding-bottom 40px
    &[chibi="3"]:after
      padding-bottom 60vh
      content ' '
      display block
      position absolute
      bottom 0px
      left 0px
      right 0px
      height 75vh
      background-image url('~@/assets/images/chibi-03.png')
      background-position center bottom
      background-repeat no-repeat
      background-size auto 100%

    h3
      margin-top 40px
      color titamota-color-red

    blockquote
      h3
        margin-top 20px

</style>
