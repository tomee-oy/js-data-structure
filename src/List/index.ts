import { IList } from './type'

class List implements IList{
  constructor(data: any[]) {
    this.store = data
    this.length = data.length
  }
  // 存储列表数据
  private store: any[] = []
  // 列表元素个数
  private length: number = 0
  // 当前位置
  private position: number = 0
  // 清空数组
  public clear(): void {
    this.store = []
    this.length = 0
    this.position = 0
  }
  // 返回当前位置的元素
  public getElement(): any {
    return this.store[0]
  }
  // 插入元素
  public insert(elements: any[] | any, position: number): boolean {
    if (position < 0) position = this.length + position
    if (position < 0 || position > this.length - 1) return false
    this.store.splice(position, 0, elements)
    return true
  }
  // 在末尾追加元素
  public append(element: any): void {
    this.store.push(element)
  }
  // 从列表中删除元素
  public remove(startPos: number, endPos: number): any[] | Error {
    if (startPos < 0) startPos = this.length + startPos
    if (endPos < 0) endPos = this.length + endPos
    if (startPos > endPos) throw new Error('开始位置不能大于结束位置')
    return this.store.splice(startPos, endPos - startPos)
  }
  // 判断是否是第一个元素
  public hasPrev(): boolean {
    if (this.position === 0) return false
    return true
  }
  // 判断是否是最后一个元素
  public hasNext(): boolean {
    if (this.position === this.length - 1) return false
    return true
  }
  // 返回当前位置
  public getCurrentPos(): number {
    return this.position
  }
  // 获取列表元素个数
  public size(): number {
    return this.length
  }
  // 查找某个元素，返回找到元素的索引
  public find(element: any): number{
    return this.store.indexOf(element)
  }
  // 字符串化
  public toString(): string {
    return this.store.join(',')
  }
  // 判断列表中是否包含某个元素
  public contains(element: any): boolean {
    return this.store.includes(element)
  }
  // 将当前位置前移一位
  public prev(): void{
    if (this.position === 0) return
    this.position = this.position - 1
  }
  // 将当前位置后移一位
  public next(): void{
    if (this.position === this.length - 1) return
    this.position = this.position + 1
  }
  // 将位置移到第一位
  public front(): void {
    this.position = 0
  }
  // 将位置移到最后一位
  public end(): void{
    this.position = this.length - 1
  }
  // 将位置移动到指定位置
  public moveTo(position: number): void | Error {
    if (position < 0) position = this.length + position
    if (position < 0 || position > this.length - 1) return new Error('位置无效')
    this.position = position
  }
}

export default List