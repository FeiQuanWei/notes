export default class Singer {
  constructor({name, mid}) {
    this.id = mid
    this.name = name
    this.avator = `https://y.gtimg.cn/music/photo_new/T001R300x300M000${mid}.jpg?max_age=2592000`
  }
}