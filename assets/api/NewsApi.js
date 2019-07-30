import { AxiosBasepath, AxiosWrapper } from "./AxiosWrapper";
import moment from "moment";

export class NewsApi extends AxiosWrapper {
  static async getNews(count = 20) {

    const payload = {
      token: "4xVDZqn3EdTp-IRxANglnQ",
      data: {
        id: "numberInt",
        title: "stringWords|3,7",
        text: "stringWords|600,1200",
        views: "numberInt",
        date: "date",
        tag: "numberInt|0,2",
        _repeat: count
      }
    }

    let dto

    try {
      throw 'tt'
      dto = (await this.post("https://app.fakejson.com/q", payload)).data;
      dto.map(function (a) {
        a.photo = '/img/card.jpg'
      })
    } catch (e) {
      dto = [
        {
          id: Math.trunc(Math.random() * (9999999)),
          title: 'Как увеличить свой доход от партнерской программы за две недели',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.',
          views: Math.trunc(Math.random() * (99999)),
          date: '2019-04-20',
          photo: 'https://vuematerial.io/assets/examples/card-image-1.jpg',
          tag: Math.trunc(Math.random() * (3))
        },
        {
          id: Math.trunc(Math.random() * (9999999)),
          title: 'asdsaa asdasdas asdasd dasdas d?',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.',
          views: Math.trunc(Math.random() * (99999)),
          date: '2019-04-20',
          photo: 'https://vuematerial.io/assets/examples/card-image-1.jpg',
          tag: Math.trunc(Math.random() * (3))
        },
        {
          id: Math.trunc(Math.random() * (9999999)),
          title: 'asdsaa asdasdas asdasd dasdas d?',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.',
          views: Math.trunc(Math.random() * (99999)),
          date: '2019-04-20',
          photo: 'https://vuematerial.io/assets/examples/card-image-1.jpg',
          tag: Math.trunc(Math.random() * (3))
        },
        {
          id: Math.trunc(Math.random() * (9999999)),
          title: 'asdsaa asdasdas asdasd dasdas d?',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.',
          views: Math.trunc(Math.random() * (99999)),
          date: '2019-04-20',
          photo: 'https://vuematerial.io/assets/examples/card-image-1.jpg',
          tag: Math.trunc(Math.random() * (3))
        },
        {
          id: Math.trunc(Math.random() * (9999999)),
          title: 'asdsaa asdasdas asdasd dasdas d?',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.',
          views: Math.trunc(Math.random() * (99999)),
          date: '2019-04-20',
          photo: 'https://vuematerial.io/assets/examples/card-image-1.jpg',
          tag: Math.trunc(Math.random() * (3))
        },
        {
          id: Math.trunc(Math.random() * (9999999)),
          title: 'Как увеличить свой доход от партнерской программы за две недели',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.',
          views: Math.trunc(Math.random() * (99999)),
          date: '2019-04-20',
          photo: 'https://vuematerial.io/assets/examples/card-image-1.jpg',
          tag: Math.trunc(Math.random() * (3))
        }
      ]
    }

    return {
      news: dto.map((item) => {
        item.date = moment(item.date).format("DD.MM.YYYY")
        item.tag = getTagByIndex(item.tag)
        return item
      })
    };
  }
}

function getTagByIndex (index) {
  const tags = ['blog', 'news', 'stock']
  return tags[index]
}
