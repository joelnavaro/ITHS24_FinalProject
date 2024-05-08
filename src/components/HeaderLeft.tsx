import { router } from 'expo-router'
import { color } from '../theme/color'
import { Chevron } from './icons/Chevron'
import { Pressable } from 'react-native'
import { FC } from 'react'

export const HeaderLeft: FC<{ route: string }> = ({ route }) => {
  return (
    <Pressable
      hitSlop={50}
      onPress={() => {
        router.canGoBack() && router.back()
      }}
    >
      <Chevron height={24} width={24} color={color.white} style={{ transform: [{ rotate: '-90deg' }] }} />
    </Pressable>
  )
}
