import { ComponentType } from 'react'
import Taro, { Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import './index.scss'

type Props = {
  counterStore: {
    counter: number
    increment: Function
    decrement: Function
    incrementAsync: Function
  }
}
@inject('counterStore')
@observer
class Index extends Taro.Component<Props> {
  componentWillReact() {
    console.log('componentWillReact')
  }

  config: Config = {
    navigationBarTitleText: '首页',
  }

  render() {
    return <View className='index'></View>
  }
}

export default Index as ComponentType
