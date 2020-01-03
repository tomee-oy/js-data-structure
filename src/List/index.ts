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
  public clear: () => void
  // 返回当前位置的元素
  public getElement: () => any
  // 插入元素
  public insert: (element: any, position: number) => void
  // 在末尾追加元素
  public append(element: any) {
    this.store.push(element)
  }
  // 从列表中删除元素
  public remove(startPos: number, endPos: number) {
    if (startPos < 0) startPos = this.length + startPos
    if (endPos < 0) endPos = this.length + endPos
    if (startPos > endPos) throw new Error('开始位置不能大于结束位置')
    return this.store.splice(startPos, endPos - startPos)
  }
  // 判断是否是第一个元素
  public hasPrev() {
    if (this.position === 0) return false
    return true
  }
  // 判断是否是最后一个元素
  public hasNext() {
    if (this.position === this.length - 1) return false
    return true
  }
  // 返回当前位置
  public getCurrentPos() {
    return this.position
  }
  // 获取列表元素个数
  public size() {
    return this.length
  }
}

export default List