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
  config: Config = {
    navigationBarTitleText: 'JavaScript迷津',
  }

  render() {
    return <View className='index'></View>
  }
}

export default Index as ComponentType
