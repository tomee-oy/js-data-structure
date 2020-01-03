export interface IList{
  // 清空数组
  clear(): void
  // 返回当前位置的元素
  getElement(): any
  // 插入元素
  insert(element: any, position: number): void
  // 在末尾追加元素
  append(element: any): void
  // 从列表中删除元素
  remove(startPos: number, endPos: number): any[]
  // 判断是否是第一个元素
  hasPrev(): boolean
  // 判断是否是最后一个元素
  hasNext():boolean
  // 返回当前位置
  getCurrentPos(): number
  // 获取列表元素个数
  size(): number
}
