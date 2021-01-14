import Mock from 'mockjs'
import data from './data.json'
import mockFetch from 'mockjs-fetch';
mockFetch(Mock);


Mock.mock('/shopping/restaurant/1', { code: 0, data: data[0].info })
Mock.mock('/ugc/v2/restaurants/restaurant_id/ratings', { data: data[0].ratings })
Mock.mock('/shopping/v2/menu', { data: data[0].goods })

