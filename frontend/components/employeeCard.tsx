import { View, Text , Image} from 'react-native'
import React from 'react'

const EmployeeCard = () => {
  return (
    <View className='w-full rounded-2xl bg-white flex flex-row gap-4 justify-start p-4'>
      <Image source={require('../assets/images/defaultProfile.png')} className='w-14 h-14 rounded-full'/>
      <View>
      <Text className='text-lg font-semibold '>John Doe</Text>      
      <Text className='font-semibold '>John Doe</Text>      
      </View>
    </View>
  )
}

export default EmployeeCard