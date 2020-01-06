import List from './index.ts'
import { create } from '../../util'

const initArray = [1, false, { name: 'test', value: 232 }, 'xxx'];
let list;

// 每次执行test之前都会重置list的值，防止上次测试修改了原数组
beforeEach(() => {
  list = create(List, initArray)
})

test('列表toString方法测试', () => {
  expect(list.toString()).toMatch(initArray.join(','))
})

test('列表clear方法测试', () => {
  list.clear()
  expect(list.toString()).toEqual('')
})

test('列表size方法测试', () => {
  expect(list.size()).toBe(4)
})

test('列表getElement方法测试', () => {
  expect(list.getElement()).toBe(1)
})

test('列表insert方法测试', () => {
  const result = [...initArray]
  result.splice(2, 0, 'insert')
  list.insert('insert', 2)
  expect(list.toString()).toEqual(result.join(','))
})

test('列表append方法测试', () => {
  const result = [...initArray, 'append']
  list.append('append')
  expect(list.toString()).toEqual(result.join(','))
})

test('列表remove方法参数为正数测试', () => {
  const result = [...initArray].splice(2, 2)
  list.remove(2, 4)
  expect(list.toString()).toEqual(result.join(','))
})

test('列表remove方法参数为负数测试', () => {
  const result = [...initArray].splice(2, 1)
  list.remove(2, -1)
  expect(list.toString()).toEqual(result.join(','))
})

test('列表remove方法参数无效测试', () => {
  expect(list.remove(-12, -33)).toThrow('remove方法参数无效')
})

test('列表hasPrev方法测试', () => {
  expect(list.hasPrev()).toBeFalsy()
})

test('列表hasNext方法测试', () => {
  expect(list.hasPrev()).toBeTruthy()
})

test('列表getCurrentPos方法测试', () => {
  expect(list.getCurrentPos()).toBe(0)
})

test('列表find方法测试', () => {
  expect(list.find(false)).toBe(1)
})

test('列表contains方法测试', () => {
  expect(list.contains('')).toBeFalsy()
})

test('列表moveTo方法测试', () => {
  list.moveTo(2)
  expect(list.getCurrentPos()).toBe(2)
})

test('列表prev方法测试', () => {
  list.moveTo(2)
  expect(list.prev()).toBe(1)
})

test('列表next方法测试', () => {
  list.moveTo(2)
  expect(list.next()).toBe(3)
})

test('列表front方法测试', () => {
  list.front()
  expect(list.getCurrentPos()).toBe(0)
})

test('列表end方法测试', () => {
  list.end()
  expect(list.getCurrentPos()).toBe(3)
})