export interface IList{
  // 清空数组
  clear(): void
  // 返回当前位置的元素
  getElement(): any
  // 插入元素
  insert(element: any, position: number): boolean
  // 在末尾追加元素
  append(element: any): void
  // 从列表中删除元素
  remove(startPos: number, endPos: number): any[] | Error
  // 判断是否是第一个元素
  hasPrev(): boolean
  // 判断是否是最后一个元素
  hasNext(): boolean
  // 返回当前位置
  getCurrentPos(): number
  // 获取列表元素个数
  size(): number
  // 查找某个元素，返回找到元素的索引
  find(element: any): number
  // 字符串化
  toString(): string
  // 判断列表中是否包含某个元素
  contains(element: any): boolean
  // 将当前位置前移一位
  prev(): void
  // 将当前位置后移一位
  next(): void
  // 将位置移到第一位
  front(): void
  // 将位置移到最后一位
  end(): void
  // 将位置移动到指定位置
  moveTo(position: number): void | Error
}