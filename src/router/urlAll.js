export const urls = {
  all:"static/data/all.json",
  bed:"static/data/bed.json",
  chore:"static/data/chore.json",
  city:"static/data/city.json",
  dress:"static/data/dress.json",
  gray:"static/data/gray.json",
  home:"static/data/home.json",
  homeFirst:"static/data/homeFirst.json",
  homeHot:"static/data/homeHot.json",
  kitchen:"static/data/kitchen.json",
  know:"static/data/know.json",
  life:"static/data/life.json",
  order:"static/data/order.json",
  time:"static/data/time.json",
  work:"static/data/work.json",
  deploydUrl:"http://localhost:5500/my-objects"
};
/*
* 用法：在这里配置地址，在需要引入数据的页面写：
* import {urls} from "../router/urlAll"
* axios.get(urls.deploydUrl)  //deploydUrl是给被配置的地址写的名字
* */
