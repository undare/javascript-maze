import Taro, { Config } from '@tarojs/taro'
import { View } from '@tarojs/components'

export default class Index extends Taro.Component {
  config: Config = {
    navigationBarTitleText: 'Quiz names',
  }

  render() {
    return <View className='pages quiz-index'></View>
  }
}
