import { mock } from "mockjs";
import Mock from mock
Mock.mock('/login', (options) => {
  console.log(options.body)
  return options.body
})
Mock.mock('/register', (options) => {
  console.log(options.body)
  return options.body
})
