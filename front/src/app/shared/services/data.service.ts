import { Injectable } from '@angular/core';
import { Product, User } from '../interfaces';
import { v4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private product: Product = {
    uid: v4(),
    brand: 'Crazy Getup',
    name: 'Постельное белье 1.5 спальное, перкаль, Гусь обнимусь',
    description:
      'В КОМПЛЕКТЕ 1 НАВОЛОЧКА!! Твоя комната вызывает у тебя тоску и уныние? Цветочки и бабочки, машинки и роботы надоели? Что ж, пора показать родителям, что тебе это всё уже не подходит. Ты можешь сам выбирать, что будет в твоей комнате! Обратите внимание, два края простыни обработаны кромкой, два других края подшиты.Crazy Getup создаёт комплекты постельного белья для таких, как ты – активных, выделяющихся, на стиле. Никаких банальных пони или самолетов. Только то, что трендово и актуально прямо сейчас. Большой ассортимент позволит выбрать то, что подходит именно тебе! Начнём с самого хитового – принта корова. Анималистическая тема пятен коровы выглядит стильно, минималистично и трендово! Есть вариант черно-белой коровы , а так же в классическом оформлении бежевой Буренки)) Простынь, кстати, в клетку – как тетрадный лист. Оформляй спальню ярко! Следующий супер-трендовый комплект постельного белья - с принтами аниме! Если ты любишь аниме – этот комплект для тебя. Классическая чёрно-белая манга на простыни, пододеяльнике и наволочке. Стильно, четко и просто! А так же у нас есть постельное белье с авокадо! Авокадо на постельном белье – это круто, оригинально и совершенно точно в тренде. Этот фрукт (да-да, авокадо тот ещё фрукт) способен поднять настроение всем. Яркий зелёный комплект с улыбающимися авокадушками – лучший рецепт от зимней хандры. Для творческих и нестандартных личностей есть постельное бельё с мухоморами. Принт прикольный и необычный, уж точно нескучный. Цвета простые – чёрный, белый, красный. А если хочется чего-то более позитивного – постельное бельё с чёрно-белыми рисованными котами. Коты – это круто всегда. И крутейший комплект с принтом паутина. Вроде простое сочетание чёрного и белого цветов, но выглядит потрясно. Паутинные принты на пике популярности. Пододеяльник двусторонний – одна сторона белая с чёрной паутиной, вторая чёрная с белой паутиной. Простынь классическая, без резинки белая с чёрной паутиной. Самое крутое во всех комплектах Crazy Getup – их фотогеничность, они отлично получаются на фотках и собирают десятки лайков в соцсетях. Контент с этими комплектами будет рвать все алгоритмы. Абсолютно все наши комплекты для творческих, нестандартных личностей, которые не любят и не хотят сидеть в рамках. Действуй, а не скучай! А теперь немного тоскливой информации: Комплекты выполнены из 100% натурального хлопка – ткань перкаль. В наборе одна классическая простынь без резинки 214х150 см, один пододеяльник с клапаном 215х143 см, одна наволочка 70х70 см с клапаном. Всё это соответствует постельному белью, которое подходит на 1,5-спальные кровати. Все красители яркие, стойкие, безопасные – они сертифицированы по всем необходимым стандартам качества. Перкаль ткань долговечная и неприхотливая в уходе: достаточно стирать комплекты отдельно от других тканей при температуре не выше 40 градусов и не использовать отбеливатели. И тогда постельное бельё прослужит долго и очень долго. Кстати, такие комплекты можно дарить друзьям на Новый год и День Рождения. Если, конечно, ты захочешь поделиться с ними секретом, где брать крутое постельное бельё ;) Постельное белье / для девочки 1.5 /1,5 спальное / для мальчика / для ребенка /для подростка /для мальчиков /для девочек /для подростков / подростковое /молодежное /универсальное /современное /стиль /мода /тренд / хлопок /перкаль /набор для праздника /подарок на день рождения /новоселье /суперский /для подруги / подруге /для друга /другу /для девушки /девушке /для парня /парню /для жены / жене /для мужа /мужу /сестре /для сестры /брату /для брата /в дом /для дома / черно-белое /тетрадная клетка /фиолетовый /лаванда /лавандовое /манга /аниме/геншин импакт /наруто /тетрадь смерти /геройская академия /бнха /токийский гуль /итачи /саске / Naruto /евангелион / genshin impact /геншин импакт / Глаз Бога: Гео - Альбедо, Чжун Ли, Нин Гуан, Горо, Итто, пиро - Тома, Ёимия, Янь Фэй, Ху Тао, Кли, Дилюк, Беннет, электро - Сара, Сегун Райдэн Баал, Фишль, Бэй Доу, Кэ Цин, Рэйзор, анемо - Саю, Кадзуха, Сяо, Венти, Гань Юй / вокалоид / мику / паутина /с котами /утка с ножом /с котами /с котиками /кошка /кот / корова /коровий принт /шахматы /яичница /яйцо /авокадо /egg /мухоморы /грибы / кляксы /брызги краски /желток /зеленые сердца /сердце /зеленый /зеленое /кьютисы / мишки / с мишками /мишка /зайчики / с зайчиками / с зайцами / cuties / лига чемпионов / футбол /чемпионат мира /лионель месси /спартак /цска / зенит / барселона / аргентина / witchcraft /колдовство /око /змея /плюшевая акула из икеи икея икеа / игрушка/для дома/для дачи стрей кидс / stray kids / skzoo / скзу / волк / волф / чайн / хорек / black pink / блэк пинк / ppeu/ феликс цыпленок / лис / кролик / квокка / бродячие дети / капибара / capybara /мем / симпсоны / simpsons / гомер / мардж / барт / лиза / мегги / барби / марго робби / райан гослинг неон / светится в темноте / неоновое / неоновые / светящее / светящиеся / светящееся в темноте / полуторки / светящееся ночью / гусь / гусь обнимусь',
    cost: 1692,
    lastcost: 10450,
    rating: 4.9,
    rating_amount: 36010,
    articul: 158074064,
    compound: 'хлопок, перкаль',
    more_info: {
      'Особенности простыни': 'гипоаллергенная; цельнокроеная; для детей',
      'Размер простыни': '214х150; 150х214; без резинки',
      'Размер натяжной простыни':
        'без натяжной простыни; классическая простынь; без резинки',
      'Страна производства': 'Россия',
      'Размер постельного белья': '1,5-спальный; 1.5 - спальное; 1.5 спальный',
      'Размер наволочки': '70х70; 70х70 см; без застежки',
      'Размер пододеяльника': '215х143; 143х215; без застежки',
      'Плотность ткани': '110 г/кв.м',
      'Вид ткани постельного белья': 'перкаль; полотняное',
    },
    common_info: {
      'Количество предметов в упаковке':
        '3 ( 1 простыня, 1 пододеяльник, 1 наволочка)',
    },
    profile: {
      'Вес с упаковкой (кг)': '1.3 кг',
      'Длина упаковки': '6 см',
      'Высота упаковки': '29 см',
      'Ширина упаковки': '38 см',
    },
    images: [
      'assets/goose/1.png',
      'assets/goose/2.png',
      'assets/goose/3.png',
      'assets/goose/4.png',
      'assets/goose/5.png',
      'assets/goose/6.png',
      'assets/goose/7.png',
      'assets/goose/8.png',
      'assets/goose/9.png',
      'assets/goose/10.png',
      'assets/goose/11.png',
    ],
    delivery_date: 'завтра'
  };
  private products: Product[] = [];
  constructor() {}

  getProducts(count: number) {
    for (let item = 0; item < count; item++) {
      this.products.push(this.product);
    }
    return this.products;
  }
}
