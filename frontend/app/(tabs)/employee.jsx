import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import EmployeeCard from '@/components/employeeCard'

const employee = () => {
  return (
    <SafeAreaView className='px-5'>
    <View>
      <Text>employeesssdfdsaf</Text>
      <EmployeeCard/>
      <EmployeeCard/>
      <EmployeeCard/>
    </View>
    </SafeAreaView>
  )
}

export default employee

